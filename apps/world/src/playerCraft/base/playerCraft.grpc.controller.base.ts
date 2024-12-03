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
import { PlayerCraftService } from "../playerCraft.service";
import { PlayerCraftCreateInput } from "./PlayerCraftCreateInput";
import { PlayerCraftWhereInput } from "./PlayerCraftWhereInput";
import { PlayerCraftWhereUniqueInput } from "./PlayerCraftWhereUniqueInput";
import { PlayerCraftFindManyArgs } from "./PlayerCraftFindManyArgs";
import { PlayerCraftUpdateInput } from "./PlayerCraftUpdateInput";
import { PlayerCraft } from "./PlayerCraft";

export class PlayerCraftGrpcControllerBase {
  constructor(protected readonly service: PlayerCraftService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlayerCraft })
  @GrpcMethod("PlayerCraftService", "createPlayerCraft")
  async createPlayerCraft(
    @common.Body() data: PlayerCraftCreateInput
  ): Promise<PlayerCraft> {
    return await this.service.createPlayerCraft({
      data: {
        ...data,

        craft: {
          connect: data.craft,
        },

        player: {
          connect: data.player,
        },
      },
      select: {
        craft: {
          select: {
            id: true,
          },
        },

        createdAt: true,
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
  @swagger.ApiOkResponse({ type: [PlayerCraft] })
  @ApiNestedQuery(PlayerCraftFindManyArgs)
  @GrpcMethod("PlayerCraftService", "playerCrafts")
  async playerCrafts(@common.Req() request: Request): Promise<PlayerCraft[]> {
    const args = plainToClass(PlayerCraftFindManyArgs, request.query);
    return this.service.playerCrafts({
      ...args,
      select: {
        craft: {
          select: {
            id: true,
          },
        },

        createdAt: true,
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
  @swagger.ApiOkResponse({ type: PlayerCraft })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerCraftService", "playerCraft")
  async playerCraft(
    @common.Param() params: PlayerCraftWhereUniqueInput
  ): Promise<PlayerCraft | null> {
    const result = await this.service.playerCraft({
      where: params,
      select: {
        craft: {
          select: {
            id: true,
          },
        },

        createdAt: true,
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
  @swagger.ApiOkResponse({ type: PlayerCraft })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerCraftService", "updatePlayerCraft")
  async updatePlayerCraft(
    @common.Param() params: PlayerCraftWhereUniqueInput,
    @common.Body() data: PlayerCraftUpdateInput
  ): Promise<PlayerCraft | null> {
    try {
      return await this.service.updatePlayerCraft({
        where: params,
        data: {
          ...data,

          craft: {
            connect: data.craft,
          },

          player: {
            connect: data.player,
          },
        },
        select: {
          craft: {
            select: {
              id: true,
            },
          },

          createdAt: true,
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
  @swagger.ApiOkResponse({ type: PlayerCraft })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerCraftService", "deletePlayerCraft")
  async deletePlayerCraft(
    @common.Param() params: PlayerCraftWhereUniqueInput
  ): Promise<PlayerCraft | null> {
    try {
      return await this.service.deletePlayerCraft({
        where: params,
        select: {
          craft: {
            select: {
              id: true,
            },
          },

          createdAt: true,
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
