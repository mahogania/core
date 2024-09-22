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
import { GameObjectTemplateLocaleService } from "../gameObjectTemplateLocale.service";
import { GameObjectTemplateLocaleCreateInput } from "./GameObjectTemplateLocaleCreateInput";
import { GameObjectTemplateLocaleWhereInput } from "./GameObjectTemplateLocaleWhereInput";
import { GameObjectTemplateLocaleWhereUniqueInput } from "./GameObjectTemplateLocaleWhereUniqueInput";
import { GameObjectTemplateLocaleFindManyArgs } from "./GameObjectTemplateLocaleFindManyArgs";
import { GameObjectTemplateLocaleUpdateInput } from "./GameObjectTemplateLocaleUpdateInput";
import { GameObjectTemplateLocale } from "./GameObjectTemplateLocale";

export class GameObjectTemplateLocaleGrpcControllerBase {
  constructor(protected readonly service: GameObjectTemplateLocaleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameObjectTemplateLocale })
  @GrpcMethod(
    "GameObjectTemplateLocaleService",
    "createGameObjectTemplateLocale"
  )
  async createGameObjectTemplateLocale(
    @common.Body() data: GameObjectTemplateLocaleCreateInput
  ): Promise<GameObjectTemplateLocale> {
    return await this.service.createGameObjectTemplateLocale({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [GameObjectTemplateLocale] })
  @ApiNestedQuery(GameObjectTemplateLocaleFindManyArgs)
  @GrpcMethod("GameObjectTemplateLocaleService", "gameObjectTemplateLocales")
  async gameObjectTemplateLocales(
    @common.Req() request: Request
  ): Promise<GameObjectTemplateLocale[]> {
    const args = plainToClass(
      GameObjectTemplateLocaleFindManyArgs,
      request.query
    );
    return this.service.gameObjectTemplateLocales({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameObjectTemplateLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameObjectTemplateLocaleService", "gameObjectTemplateLocale")
  async gameObjectTemplateLocale(
    @common.Param() params: GameObjectTemplateLocaleWhereUniqueInput
  ): Promise<GameObjectTemplateLocale | null> {
    const result = await this.service.gameObjectTemplateLocale({
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
  @swagger.ApiOkResponse({ type: GameObjectTemplateLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "GameObjectTemplateLocaleService",
    "updateGameObjectTemplateLocale"
  )
  async updateGameObjectTemplateLocale(
    @common.Param() params: GameObjectTemplateLocaleWhereUniqueInput,
    @common.Body() data: GameObjectTemplateLocaleUpdateInput
  ): Promise<GameObjectTemplateLocale | null> {
    try {
      return await this.service.updateGameObjectTemplateLocale({
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
  @swagger.ApiOkResponse({ type: GameObjectTemplateLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "GameObjectTemplateLocaleService",
    "deleteGameObjectTemplateLocale"
  )
  async deleteGameObjectTemplateLocale(
    @common.Param() params: GameObjectTemplateLocaleWhereUniqueInput
  ): Promise<GameObjectTemplateLocale | null> {
    try {
      return await this.service.deleteGameObjectTemplateLocale({
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
