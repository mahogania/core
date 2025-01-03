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
import { GameObjectQuestEnderService } from "../gameObjectQuestEnder.service";
import { GameObjectQuestEnderCreateInput } from "./GameObjectQuestEnderCreateInput";
import { GameObjectQuestEnderWhereInput } from "./GameObjectQuestEnderWhereInput";
import { GameObjectQuestEnderWhereUniqueInput } from "./GameObjectQuestEnderWhereUniqueInput";
import { GameObjectQuestEnderFindManyArgs } from "./GameObjectQuestEnderFindManyArgs";
import { GameObjectQuestEnderUpdateInput } from "./GameObjectQuestEnderUpdateInput";
import { GameObjectQuestEnder } from "./GameObjectQuestEnder";

export class GameObjectQuestEnderGrpcControllerBase {
  constructor(protected readonly service: GameObjectQuestEnderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameObjectQuestEnder })
  @GrpcMethod("GameObjectQuestEnderService", "createGameObjectQuestEnder")
  async createGameObjectQuestEnder(
    @common.Body() data: GameObjectQuestEnderCreateInput
  ): Promise<GameObjectQuestEnder> {
    return await this.service.createGameObjectQuestEnder({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [GameObjectQuestEnder] })
  @ApiNestedQuery(GameObjectQuestEnderFindManyArgs)
  @GrpcMethod("GameObjectQuestEnderService", "gameObjectQuestEnders")
  async gameObjectQuestEnders(
    @common.Req() request: Request
  ): Promise<GameObjectQuestEnder[]> {
    const args = plainToClass(GameObjectQuestEnderFindManyArgs, request.query);
    return this.service.gameObjectQuestEnders({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameObjectQuestEnder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameObjectQuestEnderService", "gameObjectQuestEnder")
  async gameObjectQuestEnder(
    @common.Param() params: GameObjectQuestEnderWhereUniqueInput
  ): Promise<GameObjectQuestEnder | null> {
    const result = await this.service.gameObjectQuestEnder({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: GameObjectQuestEnder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameObjectQuestEnderService", "updateGameObjectQuestEnder")
  async updateGameObjectQuestEnder(
    @common.Param() params: GameObjectQuestEnderWhereUniqueInput,
    @common.Body() data: GameObjectQuestEnderUpdateInput
  ): Promise<GameObjectQuestEnder | null> {
    try {
      return await this.service.updateGameObjectQuestEnder({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: GameObjectQuestEnder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameObjectQuestEnderService", "deleteGameObjectQuestEnder")
  async deleteGameObjectQuestEnder(
    @common.Param() params: GameObjectQuestEnderWhereUniqueInput
  ): Promise<GameObjectQuestEnder | null> {
    try {
      return await this.service.deleteGameObjectQuestEnder({
        where: params,
        select: {
          createdAt: true,
          id: true,
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
