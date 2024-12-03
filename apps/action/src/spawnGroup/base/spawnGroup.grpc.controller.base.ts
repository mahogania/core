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
import { SpawnGroupService } from "../spawnGroup.service";
import { SpawnGroupCreateInput } from "./SpawnGroupCreateInput";
import { SpawnGroupWhereInput } from "./SpawnGroupWhereInput";
import { SpawnGroupWhereUniqueInput } from "./SpawnGroupWhereUniqueInput";
import { SpawnGroupFindManyArgs } from "./SpawnGroupFindManyArgs";
import { SpawnGroupUpdateInput } from "./SpawnGroupUpdateInput";
import { SpawnGroup } from "./SpawnGroup";

export class SpawnGroupGrpcControllerBase {
  constructor(protected readonly service: SpawnGroupService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SpawnGroup })
  @GrpcMethod("SpawnGroupService", "createSpawnGroup")
  async createSpawnGroup(
    @common.Body() data: SpawnGroupCreateInput
  ): Promise<SpawnGroup> {
    return await this.service.createSpawnGroup({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SpawnGroup] })
  @ApiNestedQuery(SpawnGroupFindManyArgs)
  @GrpcMethod("SpawnGroupService", "spawnGroups")
  async spawnGroups(@common.Req() request: Request): Promise<SpawnGroup[]> {
    const args = plainToClass(SpawnGroupFindManyArgs, request.query);
    return this.service.spawnGroups({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SpawnGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SpawnGroupService", "spawnGroup")
  async spawnGroup(
    @common.Param() params: SpawnGroupWhereUniqueInput
  ): Promise<SpawnGroup | null> {
    const result = await this.service.spawnGroup({
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
  @swagger.ApiOkResponse({ type: SpawnGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SpawnGroupService", "updateSpawnGroup")
  async updateSpawnGroup(
    @common.Param() params: SpawnGroupWhereUniqueInput,
    @common.Body() data: SpawnGroupUpdateInput
  ): Promise<SpawnGroup | null> {
    try {
      return await this.service.updateSpawnGroup({
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
  @swagger.ApiOkResponse({ type: SpawnGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SpawnGroupService", "deleteSpawnGroup")
  async deleteSpawnGroup(
    @common.Param() params: SpawnGroupWhereUniqueInput
  ): Promise<SpawnGroup | null> {
    try {
      return await this.service.deleteSpawnGroup({
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
