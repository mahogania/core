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
import { GameObjectQuestItemService } from "../gameObjectQuestItem.service";
import { GameObjectQuestItemCreateInput } from "./GameObjectQuestItemCreateInput";
import { GameObjectQuestItemWhereInput } from "./GameObjectQuestItemWhereInput";
import { GameObjectQuestItemWhereUniqueInput } from "./GameObjectQuestItemWhereUniqueInput";
import { GameObjectQuestItemFindManyArgs } from "./GameObjectQuestItemFindManyArgs";
import { GameObjectQuestItemUpdateInput } from "./GameObjectQuestItemUpdateInput";
import { GameObjectQuestItem } from "./GameObjectQuestItem";

export class GameObjectQuestItemGrpcControllerBase {
  constructor(protected readonly service: GameObjectQuestItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameObjectQuestItem })
  @GrpcMethod("GameObjectQuestItemService", "createGameObjectQuestItem")
  async createGameObjectQuestItem(
    @common.Body() data: GameObjectQuestItemCreateInput
  ): Promise<GameObjectQuestItem> {
    return await this.service.createGameObjectQuestItem({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [GameObjectQuestItem] })
  @ApiNestedQuery(GameObjectQuestItemFindManyArgs)
  @GrpcMethod("GameObjectQuestItemService", "gameObjectQuestItems")
  async gameObjectQuestItems(
    @common.Req() request: Request
  ): Promise<GameObjectQuestItem[]> {
    const args = plainToClass(GameObjectQuestItemFindManyArgs, request.query);
    return this.service.gameObjectQuestItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameObjectQuestItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameObjectQuestItemService", "gameObjectQuestItem")
  async gameObjectQuestItem(
    @common.Param() params: GameObjectQuestItemWhereUniqueInput
  ): Promise<GameObjectQuestItem | null> {
    const result = await this.service.gameObjectQuestItem({
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
  @swagger.ApiOkResponse({ type: GameObjectQuestItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameObjectQuestItemService", "updateGameObjectQuestItem")
  async updateGameObjectQuestItem(
    @common.Param() params: GameObjectQuestItemWhereUniqueInput,
    @common.Body() data: GameObjectQuestItemUpdateInput
  ): Promise<GameObjectQuestItem | null> {
    try {
      return await this.service.updateGameObjectQuestItem({
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
  @swagger.ApiOkResponse({ type: GameObjectQuestItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameObjectQuestItemService", "deleteGameObjectQuestItem")
  async deleteGameObjectQuestItem(
    @common.Param() params: GameObjectQuestItemWhereUniqueInput
  ): Promise<GameObjectQuestItem | null> {
    try {
      return await this.service.deleteGameObjectQuestItem({
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
