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
import { PlayerFactionQuestService } from "../playerFactionQuest.service";
import { PlayerFactionQuestCreateInput } from "./PlayerFactionQuestCreateInput";
import { PlayerFactionQuestWhereInput } from "./PlayerFactionQuestWhereInput";
import { PlayerFactionQuestWhereUniqueInput } from "./PlayerFactionQuestWhereUniqueInput";
import { PlayerFactionQuestFindManyArgs } from "./PlayerFactionQuestFindManyArgs";
import { PlayerFactionQuestUpdateInput } from "./PlayerFactionQuestUpdateInput";
import { PlayerFactionQuest } from "./PlayerFactionQuest";

export class PlayerFactionQuestGrpcControllerBase {
  constructor(protected readonly service: PlayerFactionQuestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlayerFactionQuest })
  @GrpcMethod("PlayerFactionQuestService", "createPlayerFactionQuest")
  async createPlayerFactionQuest(
    @common.Body() data: PlayerFactionQuestCreateInput
  ): Promise<PlayerFactionQuest> {
    return await this.service.createPlayerFactionQuest({
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

        questId: true,
        state: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PlayerFactionQuest] })
  @ApiNestedQuery(PlayerFactionQuestFindManyArgs)
  @GrpcMethod("PlayerFactionQuestService", "playerFactionQuests")
  async playerFactionQuests(
    @common.Req() request: Request
  ): Promise<PlayerFactionQuest[]> {
    const args = plainToClass(PlayerFactionQuestFindManyArgs, request.query);
    return this.service.playerFactionQuests({
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

        questId: true,
        state: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PlayerFactionQuest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerFactionQuestService", "playerFactionQuest")
  async playerFactionQuest(
    @common.Param() params: PlayerFactionQuestWhereUniqueInput
  ): Promise<PlayerFactionQuest | null> {
    const result = await this.service.playerFactionQuest({
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

        questId: true,
        state: true,
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
  @swagger.ApiOkResponse({ type: PlayerFactionQuest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerFactionQuestService", "updatePlayerFactionQuest")
  async updatePlayerFactionQuest(
    @common.Param() params: PlayerFactionQuestWhereUniqueInput,
    @common.Body() data: PlayerFactionQuestUpdateInput
  ): Promise<PlayerFactionQuest | null> {
    try {
      return await this.service.updatePlayerFactionQuest({
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

          questId: true,
          state: true,
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
  @swagger.ApiOkResponse({ type: PlayerFactionQuest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerFactionQuestService", "deletePlayerFactionQuest")
  async deletePlayerFactionQuest(
    @common.Param() params: PlayerFactionQuestWhereUniqueInput
  ): Promise<PlayerFactionQuest | null> {
    try {
      return await this.service.deletePlayerFactionQuest({
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

          questId: true,
          state: true,
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
