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
import { GameTeleService } from "../gameTele.service";
import { GameTeleCreateInput } from "./GameTeleCreateInput";
import { GameTeleWhereInput } from "./GameTeleWhereInput";
import { GameTeleWhereUniqueInput } from "./GameTeleWhereUniqueInput";
import { GameTeleFindManyArgs } from "./GameTeleFindManyArgs";
import { GameTeleUpdateInput } from "./GameTeleUpdateInput";
import { GameTele } from "./GameTele";

export class GameTeleGrpcControllerBase {
  constructor(protected readonly service: GameTeleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameTele })
  @GrpcMethod("GameTeleService", "createGameTele")
  async createGameTele(
    @common.Body() data: GameTeleCreateInput
  ): Promise<GameTele> {
    return await this.service.createGameTele({
      data: data,
      select: {
        createdAt: true,
        id: true,
        map: true,
        name: true,
        orientation: true,
        positionX: true,
        positionY: true,
        positionZ: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [GameTele] })
  @ApiNestedQuery(GameTeleFindManyArgs)
  @GrpcMethod("GameTeleService", "gameTeles")
  async gameTeles(@common.Req() request: Request): Promise<GameTele[]> {
    const args = plainToClass(GameTeleFindManyArgs, request.query);
    return this.service.gameTeles({
      ...args,
      select: {
        createdAt: true,
        id: true,
        map: true,
        name: true,
        orientation: true,
        positionX: true,
        positionY: true,
        positionZ: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameTele })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameTeleService", "gameTele")
  async gameTele(
    @common.Param() params: GameTeleWhereUniqueInput
  ): Promise<GameTele | null> {
    const result = await this.service.gameTele({
      where: params,
      select: {
        createdAt: true,
        id: true,
        map: true,
        name: true,
        orientation: true,
        positionX: true,
        positionY: true,
        positionZ: true,
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
  @swagger.ApiOkResponse({ type: GameTele })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameTeleService", "updateGameTele")
  async updateGameTele(
    @common.Param() params: GameTeleWhereUniqueInput,
    @common.Body() data: GameTeleUpdateInput
  ): Promise<GameTele | null> {
    try {
      return await this.service.updateGameTele({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          map: true,
          name: true,
          orientation: true,
          positionX: true,
          positionY: true,
          positionZ: true,
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
  @swagger.ApiOkResponse({ type: GameTele })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameTeleService", "deleteGameTele")
  async deleteGameTele(
    @common.Param() params: GameTeleWhereUniqueInput
  ): Promise<GameTele | null> {
    try {
      return await this.service.deleteGameTele({
        where: params,
        select: {
          createdAt: true,
          id: true,
          map: true,
          name: true,
          orientation: true,
          positionX: true,
          positionY: true,
          positionZ: true,
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
