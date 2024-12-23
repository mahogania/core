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
import { GameEventModelEquipService } from "../gameEventModelEquip.service";
import { GameEventModelEquipCreateInput } from "./GameEventModelEquipCreateInput";
import { GameEventModelEquipWhereInput } from "./GameEventModelEquipWhereInput";
import { GameEventModelEquipWhereUniqueInput } from "./GameEventModelEquipWhereUniqueInput";
import { GameEventModelEquipFindManyArgs } from "./GameEventModelEquipFindManyArgs";
import { GameEventModelEquipUpdateInput } from "./GameEventModelEquipUpdateInput";
import { GameEventModelEquip } from "./GameEventModelEquip";
import { GameEventFindManyArgs } from "../../gameEvent/base/GameEventFindManyArgs";
import { GameEvent } from "../../gameEvent/base/GameEvent";
import { GameEventWhereUniqueInput } from "../../gameEvent/base/GameEventWhereUniqueInput";

export class GameEventModelEquipGrpcControllerBase {
  constructor(protected readonly service: GameEventModelEquipService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameEventModelEquip })
  @GrpcMethod("GameEventModelEquipService", "createGameEventModelEquip")
  async createGameEventModelEquip(
    @common.Body() data: GameEventModelEquipCreateInput
  ): Promise<GameEventModelEquip> {
    return await this.service.createGameEventModelEquip({
      data: data,
      select: {
        createdAt: true,
        equipmentId: true,
        id: true,
        modelid: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [GameEventModelEquip] })
  @ApiNestedQuery(GameEventModelEquipFindManyArgs)
  @GrpcMethod("GameEventModelEquipService", "gameEventModelEquips")
  async gameEventModelEquips(
    @common.Req() request: Request
  ): Promise<GameEventModelEquip[]> {
    const args = plainToClass(GameEventModelEquipFindManyArgs, request.query);
    return this.service.gameEventModelEquips({
      ...args,
      select: {
        createdAt: true,
        equipmentId: true,
        id: true,
        modelid: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameEventModelEquip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameEventModelEquipService", "gameEventModelEquip")
  async gameEventModelEquip(
    @common.Param() params: GameEventModelEquipWhereUniqueInput
  ): Promise<GameEventModelEquip | null> {
    const result = await this.service.gameEventModelEquip({
      where: params,
      select: {
        createdAt: true,
        equipmentId: true,
        id: true,
        modelid: true,
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
  @swagger.ApiOkResponse({ type: GameEventModelEquip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameEventModelEquipService", "updateGameEventModelEquip")
  async updateGameEventModelEquip(
    @common.Param() params: GameEventModelEquipWhereUniqueInput,
    @common.Body() data: GameEventModelEquipUpdateInput
  ): Promise<GameEventModelEquip | null> {
    try {
      return await this.service.updateGameEventModelEquip({
        where: params,
        data: data,
        select: {
          createdAt: true,
          equipmentId: true,
          id: true,
          modelid: true,
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
  @swagger.ApiOkResponse({ type: GameEventModelEquip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameEventModelEquipService", "deleteGameEventModelEquip")
  async deleteGameEventModelEquip(
    @common.Param() params: GameEventModelEquipWhereUniqueInput
  ): Promise<GameEventModelEquip | null> {
    try {
      return await this.service.deleteGameEventModelEquip({
        where: params,
        select: {
          createdAt: true,
          equipmentId: true,
          id: true,
          modelid: true,
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

  @common.Get("/:id/gameEvents")
  @ApiNestedQuery(GameEventFindManyArgs)
  @GrpcMethod("GameEventModelEquipService", "findManyGameEvents")
  async findManyGameEvents(
    @common.Req() request: Request,
    @common.Param() params: GameEventModelEquipWhereUniqueInput
  ): Promise<GameEvent[]> {
    const query = plainToClass(GameEventFindManyArgs, request.query);
    const results = await this.service.findGameEvents(params.id, {
      ...query,
      select: {
        announce: true,
        createdAt: true,
        description: true,
        endTime: true,

        gameEventConditions: {
          select: {
            id: true,
          },
        },

        gameEventCreatures: {
          select: {
            id: true,
          },
        },

        gameEventGameObjects: {
          select: {
            id: true,
          },
        },

        gameEventModelEquips: {
          select: {
            id: true,
          },
        },

        gameEventQuests: {
          select: {
            id: true,
          },
        },

        id: true,
        startTime: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/gameEvents")
  @GrpcMethod("GameEventModelEquipService", "connectGameEvents")
  async connectGameEvents(
    @common.Param() params: GameEventModelEquipWhereUniqueInput,
    @common.Body() body: GameEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameEvents: {
        connect: body,
      },
    };
    await this.service.updateGameEventModelEquip({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/gameEvents")
  @GrpcMethod("GameEventModelEquipService", "updateGameEvents")
  async updateGameEvents(
    @common.Param() params: GameEventModelEquipWhereUniqueInput,
    @common.Body() body: GameEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameEvents: {
        set: body,
      },
    };
    await this.service.updateGameEventModelEquip({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/gameEvents")
  @GrpcMethod("GameEventModelEquipService", "disconnectGameEvents")
  async disconnectGameEvents(
    @common.Param() params: GameEventModelEquipWhereUniqueInput,
    @common.Body() body: GameEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameEvents: {
        disconnect: body,
      },
    };
    await this.service.updateGameEventModelEquip({
      where: params,
      data,
      select: { id: true },
    });
  }
}
