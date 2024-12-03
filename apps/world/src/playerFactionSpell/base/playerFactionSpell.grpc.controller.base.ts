/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { PlayerFactionSpellService } from "../playerFactionSpell.service";
import { PlayerFactionSpellCreateInput } from "./PlayerFactionSpellCreateInput";
import { PlayerFactionSpellWhereInput } from "./PlayerFactionSpellWhereInput";
import { PlayerFactionSpellWhereUniqueInput } from "./PlayerFactionSpellWhereUniqueInput";
import { PlayerFactionSpellFindManyArgs } from "./PlayerFactionSpellFindManyArgs";
import { PlayerFactionSpellUpdateInput } from "./PlayerFactionSpellUpdateInput";
import { PlayerFactionSpell } from "./PlayerFactionSpell";

export class PlayerFactionSpellGrpcControllerBase {
  constructor(protected readonly service: PlayerFactionSpellService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlayerFactionSpell })
  @GrpcMethod("PlayerFactionSpellService", "createPlayerFactionSpell")
  async createPlayerFactionSpell(
    @common.Body() data: PlayerFactionSpellCreateInput
  ): Promise<PlayerFactionSpell> {
    return await this.service.createPlayerFactionSpell({
      data: {
        ...data,

        faction: data.faction
          ? {
              connect: data.faction,
            }
          : undefined,

        player: data.player
          ? {
              connect: data.player,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        faction: {
          select: {
            id: true,
          },
        },

        id: true,

        player: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PlayerFactionSpell] })
  @ApiNestedQuery(PlayerFactionSpellFindManyArgs)
  @GrpcMethod("PlayerFactionSpellService", "playerFactionSpells")
  async playerFactionSpells(
    @common.Req() request: Request
  ): Promise<PlayerFactionSpell[]> {
    const args = plainToClass(PlayerFactionSpellFindManyArgs, request.query);
    return this.service.playerFactionSpells({
      ...args,
      select: {
        createdAt: true,

        faction: {
          select: {
            id: true,
          },
        },

        id: true,

        player: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PlayerFactionSpell })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerFactionSpellService", "playerFactionSpell")
  async playerFactionSpell(
    @common.Param() params: PlayerFactionSpellWhereUniqueInput
  ): Promise<PlayerFactionSpell | null> {
    const result = await this.service.playerFactionSpell({
      where: params,
      select: {
        createdAt: true,

        faction: {
          select: {
            id: true,
          },
        },

        id: true,

        player: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PlayerFactionSpell })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerFactionSpellService", "updatePlayerFactionSpell")
  async updatePlayerFactionSpell(
    @common.Param() params: PlayerFactionSpellWhereUniqueInput,
    @common.Body() data: PlayerFactionSpellUpdateInput
  ): Promise<PlayerFactionSpell | null> {
    try {
      return await this.service.updatePlayerFactionSpell({
        where: params,
        data: {
          ...data,

          faction: data.faction
            ? {
                connect: data.faction,
              }
            : undefined,

          player: data.player
            ? {
                connect: data.player,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          faction: {
            select: {
              id: true,
            },
          },

          id: true,

          player: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PlayerFactionSpell })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerFactionSpellService", "deletePlayerFactionSpell")
  async deletePlayerFactionSpell(
    @common.Param() params: PlayerFactionSpellWhereUniqueInput
  ): Promise<PlayerFactionSpell | null> {
    try {
      return await this.service.deletePlayerFactionSpell({
        where: params,
        select: {
          createdAt: true,

          faction: {
            select: {
              id: true,
            },
          },

          id: true,

          player: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
