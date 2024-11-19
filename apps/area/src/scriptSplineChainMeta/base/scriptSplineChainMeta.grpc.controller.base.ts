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
import { ScriptSplineChainMetaService } from "../scriptSplineChainMeta.service";
import { ScriptSplineChainMetaCreateInput } from "./ScriptSplineChainMetaCreateInput";
import { ScriptSplineChainMetaWhereInput } from "./ScriptSplineChainMetaWhereInput";
import { ScriptSplineChainMetaWhereUniqueInput } from "./ScriptSplineChainMetaWhereUniqueInput";
import { ScriptSplineChainMetaFindManyArgs } from "./ScriptSplineChainMetaFindManyArgs";
import { ScriptSplineChainMetaUpdateInput } from "./ScriptSplineChainMetaUpdateInput";
import { ScriptSplineChainMeta } from "./ScriptSplineChainMeta";

export class ScriptSplineChainMetaGrpcControllerBase {
  constructor(protected readonly service: ScriptSplineChainMetaService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ScriptSplineChainMeta })
  @GrpcMethod("ScriptSplineChainMetaService", "createScriptSplineChainMeta")
  async createScriptSplineChainMeta(
    @common.Body() data: ScriptSplineChainMetaCreateInput
  ): Promise<ScriptSplineChainMeta> {
    return await this.service.createScriptSplineChainMeta({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ScriptSplineChainMeta] })
  @ApiNestedQuery(ScriptSplineChainMetaFindManyArgs)
  @GrpcMethod("ScriptSplineChainMetaService", "scriptSplineChainMetas")
  async scriptSplineChainMetas(
    @common.Req() request: Request
  ): Promise<ScriptSplineChainMeta[]> {
    const args = plainToClass(ScriptSplineChainMetaFindManyArgs, request.query);
    return this.service.scriptSplineChainMetas({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ScriptSplineChainMeta })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ScriptSplineChainMetaService", "scriptSplineChainMeta")
  async scriptSplineChainMeta(
    @common.Param() params: ScriptSplineChainMetaWhereUniqueInput
  ): Promise<ScriptSplineChainMeta | null> {
    const result = await this.service.scriptSplineChainMeta({
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
  @swagger.ApiOkResponse({ type: ScriptSplineChainMeta })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ScriptSplineChainMetaService", "updateScriptSplineChainMeta")
  async updateScriptSplineChainMeta(
    @common.Param() params: ScriptSplineChainMetaWhereUniqueInput,
    @common.Body() data: ScriptSplineChainMetaUpdateInput
  ): Promise<ScriptSplineChainMeta | null> {
    try {
      return await this.service.updateScriptSplineChainMeta({
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
  @swagger.ApiOkResponse({ type: ScriptSplineChainMeta })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ScriptSplineChainMetaService", "deleteScriptSplineChainMeta")
  async deleteScriptSplineChainMeta(
    @common.Param() params: ScriptSplineChainMetaWhereUniqueInput
  ): Promise<ScriptSplineChainMeta | null> {
    try {
      return await this.service.deleteScriptSplineChainMeta({
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