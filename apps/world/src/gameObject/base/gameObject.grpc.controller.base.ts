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
import { GameObjectService } from "../gameObject.service";
import { GameObjectCreateInput } from "./GameObjectCreateInput";
import { GameObjectWhereInput } from "./GameObjectWhereInput";
import { GameObjectWhereUniqueInput } from "./GameObjectWhereUniqueInput";
import { GameObjectFindManyArgs } from "./GameObjectFindManyArgs";
import { GameObjectUpdateInput } from "./GameObjectUpdateInput";
import { GameObject } from "./GameObject";

export class GameObjectGrpcControllerBase {
  constructor(protected readonly service: GameObjectService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameObject })
  @GrpcMethod("GameObjectService", "createGameObject")
  async createGameObject(
    @common.Body() data: GameObjectCreateInput
  ): Promise<GameObject> {
    return await this.service.createGameObject({
      data: data,
      select: {
        animprogress: true,
        areaId: true,
        createdAt: true,
        guid: true,
        id: true,
        map: true,
        orientation: true,
        phaseGroup: true,
        phaseId: true,
        phaseUseFlags: true,
        positionX: true,
        positionY: true,
        positionZ: true,
        rotation0: true,
        rotation1: true,
        rotation2: true,
        rotation3: true,
        scriptName: true,
        spawnDifficulties: true,
        spawntimesecs: true,
        state: true,
        stringId: true,
        terrainSwapMap: true,
        updatedAt: true,
        verifiedBuild: true,
        zoneId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [GameObject] })
  @ApiNestedQuery(GameObjectFindManyArgs)
  @GrpcMethod("GameObjectService", "gameObjects")
  async gameObjects(@common.Req() request: Request): Promise<GameObject[]> {
    const args = plainToClass(GameObjectFindManyArgs, request.query);
    return this.service.gameObjects({
      ...args,
      select: {
        animprogress: true,
        areaId: true,
        createdAt: true,
        guid: true,
        id: true,
        map: true,
        orientation: true,
        phaseGroup: true,
        phaseId: true,
        phaseUseFlags: true,
        positionX: true,
        positionY: true,
        positionZ: true,
        rotation0: true,
        rotation1: true,
        rotation2: true,
        rotation3: true,
        scriptName: true,
        spawnDifficulties: true,
        spawntimesecs: true,
        state: true,
        stringId: true,
        terrainSwapMap: true,
        updatedAt: true,
        verifiedBuild: true,
        zoneId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameObject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameObjectService", "gameObject")
  async gameObject(
    @common.Param() params: GameObjectWhereUniqueInput
  ): Promise<GameObject | null> {
    const result = await this.service.gameObject({
      where: params,
      select: {
        animprogress: true,
        areaId: true,
        createdAt: true,
        guid: true,
        id: true,
        map: true,
        orientation: true,
        phaseGroup: true,
        phaseId: true,
        phaseUseFlags: true,
        positionX: true,
        positionY: true,
        positionZ: true,
        rotation0: true,
        rotation1: true,
        rotation2: true,
        rotation3: true,
        scriptName: true,
        spawnDifficulties: true,
        spawntimesecs: true,
        state: true,
        stringId: true,
        terrainSwapMap: true,
        updatedAt: true,
        verifiedBuild: true,
        zoneId: true,
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
  @swagger.ApiOkResponse({ type: GameObject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameObjectService", "updateGameObject")
  async updateGameObject(
    @common.Param() params: GameObjectWhereUniqueInput,
    @common.Body() data: GameObjectUpdateInput
  ): Promise<GameObject | null> {
    try {
      return await this.service.updateGameObject({
        where: params,
        data: data,
        select: {
          animprogress: true,
          areaId: true,
          createdAt: true,
          guid: true,
          id: true,
          map: true,
          orientation: true,
          phaseGroup: true,
          phaseId: true,
          phaseUseFlags: true,
          positionX: true,
          positionY: true,
          positionZ: true,
          rotation0: true,
          rotation1: true,
          rotation2: true,
          rotation3: true,
          scriptName: true,
          spawnDifficulties: true,
          spawntimesecs: true,
          state: true,
          stringId: true,
          terrainSwapMap: true,
          updatedAt: true,
          verifiedBuild: true,
          zoneId: true,
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
  @swagger.ApiOkResponse({ type: GameObject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GameObjectService", "deleteGameObject")
  async deleteGameObject(
    @common.Param() params: GameObjectWhereUniqueInput
  ): Promise<GameObject | null> {
    try {
      return await this.service.deleteGameObject({
        where: params,
        select: {
          animprogress: true,
          areaId: true,
          createdAt: true,
          guid: true,
          id: true,
          map: true,
          orientation: true,
          phaseGroup: true,
          phaseId: true,
          phaseUseFlags: true,
          positionX: true,
          positionY: true,
          positionZ: true,
          rotation0: true,
          rotation1: true,
          rotation2: true,
          rotation3: true,
          scriptName: true,
          spawnDifficulties: true,
          spawntimesecs: true,
          state: true,
          stringId: true,
          terrainSwapMap: true,
          updatedAt: true,
          verifiedBuild: true,
          zoneId: true,
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
