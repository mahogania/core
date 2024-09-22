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
import { LinkedRespawnService } from "../linkedRespawn.service";
import { LinkedRespawnCreateInput } from "./LinkedRespawnCreateInput";
import { LinkedRespawnWhereInput } from "./LinkedRespawnWhereInput";
import { LinkedRespawnWhereUniqueInput } from "./LinkedRespawnWhereUniqueInput";
import { LinkedRespawnFindManyArgs } from "./LinkedRespawnFindManyArgs";
import { LinkedRespawnUpdateInput } from "./LinkedRespawnUpdateInput";
import { LinkedRespawn } from "./LinkedRespawn";

export class LinkedRespawnGrpcControllerBase {
  constructor(protected readonly service: LinkedRespawnService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LinkedRespawn })
  @GrpcMethod("LinkedRespawnService", "createLinkedRespawn")
  async createLinkedRespawn(
    @common.Body() data: LinkedRespawnCreateInput
  ): Promise<LinkedRespawn> {
    return await this.service.createLinkedRespawn({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LinkedRespawn] })
  @ApiNestedQuery(LinkedRespawnFindManyArgs)
  @GrpcMethod("LinkedRespawnService", "linkedRespawns")
  async linkedRespawns(
    @common.Req() request: Request
  ): Promise<LinkedRespawn[]> {
    const args = plainToClass(LinkedRespawnFindManyArgs, request.query);
    return this.service.linkedRespawns({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LinkedRespawn })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("LinkedRespawnService", "linkedRespawn")
  async linkedRespawn(
    @common.Param() params: LinkedRespawnWhereUniqueInput
  ): Promise<LinkedRespawn | null> {
    const result = await this.service.linkedRespawn({
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
  @swagger.ApiOkResponse({ type: LinkedRespawn })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("LinkedRespawnService", "updateLinkedRespawn")
  async updateLinkedRespawn(
    @common.Param() params: LinkedRespawnWhereUniqueInput,
    @common.Body() data: LinkedRespawnUpdateInput
  ): Promise<LinkedRespawn | null> {
    try {
      return await this.service.updateLinkedRespawn({
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
  @swagger.ApiOkResponse({ type: LinkedRespawn })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("LinkedRespawnService", "deleteLinkedRespawn")
  async deleteLinkedRespawn(
    @common.Param() params: LinkedRespawnWhereUniqueInput
  ): Promise<LinkedRespawn | null> {
    try {
      return await this.service.deleteLinkedRespawn({
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
