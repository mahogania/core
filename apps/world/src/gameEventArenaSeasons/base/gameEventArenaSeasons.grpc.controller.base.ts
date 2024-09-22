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
import { GameEventArenaSeasonsService } from "../gameEventArenaSeasons.service";
import { GameEventArenaSeasonsCreateInput } from "./GameEventArenaSeasonsCreateInput";
import { GameEventArenaSeasonsWhereInput } from "./GameEventArenaSeasonsWhereInput";
import { GameEventArenaSeasonsWhereUniqueInput } from "./GameEventArenaSeasonsWhereUniqueInput";
import { GameEventArenaSeasonsFindManyArgs } from "./GameEventArenaSeasonsFindManyArgs";
import { GameEventArenaSeasonsUpdateInput } from "./GameEventArenaSeasonsUpdateInput";
import { GameEventArenaSeasons } from "./GameEventArenaSeasons";

export class GameEventArenaSeasonsGrpcControllerBase {
  constructor(protected readonly service: GameEventArenaSeasonsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameEventArenaSeasons })
  @GrpcMethod("GameEventArenaSeasonsService", "createGameEventArenaSeasons")
  async createGameEventArenaSeasons(
    @common.Body() data: GameEventArenaSeasonsCreateInput
  ): Promise<GameEventArenaSeasons> {
    return await this.service.createGameEventArenaSeasons({
      data: data,
      select: {
        createdAt: true,
        eventEntry: true,
        id: true,
        season: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [GameEventArenaSeasons] })
  @ApiNestedQuery(GameEventArenaSeasonsFindManyArgs)
  @GrpcMethod("GameEventArenaSeasonsService", "gameEventArenaSeasonsItems")
  async gameEventArenaSeasonsItems(
    @common.Req() request: Request
  ): Promise<GameEventArenaSeasons[]> {
    const args = plainToClass(GameEventArenaSeasonsFindManyArgs, request.query);
    return this.service.gameEventArenaSeasonsItems({
      ...args,
      select: {
        createdAt: true,
        eventEntry: true,
        id: true,
        season: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameEventArenaSeasons })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameEventArenaSeasonsService", "gameEventArenaSeasons")
  async gameEventArenaSeasons(
    @common.Param() params: GameEventArenaSeasonsWhereUniqueInput
  ): Promise<GameEventArenaSeasons | null> {
    const result = await this.service.gameEventArenaSeasons({
      where: params,
      select: {
        createdAt: true,
        eventEntry: true,
        id: true,
        season: true,
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
  @swagger.ApiOkResponse({ type: GameEventArenaSeasons })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameEventArenaSeasonsService", "updateGameEventArenaSeasons")
  async updateGameEventArenaSeasons(
    @common.Param() params: GameEventArenaSeasonsWhereUniqueInput,
    @common.Body() data: GameEventArenaSeasonsUpdateInput
  ): Promise<GameEventArenaSeasons | null> {
    try {
      return await this.service.updateGameEventArenaSeasons({
        where: params,
        data: data,
        select: {
          createdAt: true,
          eventEntry: true,
          id: true,
          season: true,
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
  @swagger.ApiOkResponse({ type: GameEventArenaSeasons })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameEventArenaSeasonsService", "deleteGameEventArenaSeasons")
  async deleteGameEventArenaSeasons(
    @common.Param() params: GameEventArenaSeasonsWhereUniqueInput
  ): Promise<GameEventArenaSeasons | null> {
    try {
      return await this.service.deleteGameEventArenaSeasons({
        where: params,
        select: {
          createdAt: true,
          eventEntry: true,
          id: true,
          season: true,
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
