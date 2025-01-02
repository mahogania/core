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
import { PlayerXpForLevelService } from "../playerXpForLevel.service";
import { PlayerXpForLevelCreateInput } from "./PlayerXpForLevelCreateInput";
import { PlayerXpForLevelWhereInput } from "./PlayerXpForLevelWhereInput";
import { PlayerXpForLevelWhereUniqueInput } from "./PlayerXpForLevelWhereUniqueInput";
import { PlayerXpForLevelFindManyArgs } from "./PlayerXpForLevelFindManyArgs";
import { PlayerXpForLevelUpdateInput } from "./PlayerXpForLevelUpdateInput";
import { PlayerXpForLevel } from "./PlayerXpForLevel";

export class PlayerXpForLevelGrpcControllerBase {
  constructor(protected readonly service: PlayerXpForLevelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlayerXpForLevel })
  @GrpcMethod("PlayerXpForLevelService", "createPlayerXpForLevel")
  async createPlayerXpForLevel(
    @common.Body() data: PlayerXpForLevelCreateInput
  ): Promise<PlayerXpForLevel> {
    return await this.service.createPlayerXpForLevel({
      data: {
        ...data,

        player: data.player
          ? {
              connect: data.player,
            }
          : undefined,
      },
      select: {
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
  @swagger.ApiOkResponse({ type: [PlayerXpForLevel] })
  @ApiNestedQuery(PlayerXpForLevelFindManyArgs)
  @GrpcMethod("PlayerXpForLevelService", "playerXpForLevels")
  async playerXpForLevels(
    @common.Req() request: Request
  ): Promise<PlayerXpForLevel[]> {
    const args = plainToClass(PlayerXpForLevelFindManyArgs, request.query);
    return this.service.playerXpForLevels({
      ...args,
      select: {
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
  @swagger.ApiOkResponse({ type: PlayerXpForLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerXpForLevelService", "playerXpForLevel")
  async playerXpForLevel(
    @common.Param() params: PlayerXpForLevelWhereUniqueInput
  ): Promise<PlayerXpForLevel | null> {
    const result = await this.service.playerXpForLevel({
      where: params,
      select: {
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
  @swagger.ApiOkResponse({ type: PlayerXpForLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerXpForLevelService", "updatePlayerXpForLevel")
  async updatePlayerXpForLevel(
    @common.Param() params: PlayerXpForLevelWhereUniqueInput,
    @common.Body() data: PlayerXpForLevelUpdateInput
  ): Promise<PlayerXpForLevel | null> {
    try {
      return await this.service.updatePlayerXpForLevel({
        where: params,
        data: {
          ...data,

          player: data.player
            ? {
                connect: data.player,
              }
            : undefined,
        },
        select: {
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
  @swagger.ApiOkResponse({ type: PlayerXpForLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerXpForLevelService", "deletePlayerXpForLevel")
  async deletePlayerXpForLevel(
    @common.Param() params: PlayerXpForLevelWhereUniqueInput
  ): Promise<PlayerXpForLevel | null> {
    try {
      return await this.service.deletePlayerXpForLevel({
        where: params,
        select: {
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