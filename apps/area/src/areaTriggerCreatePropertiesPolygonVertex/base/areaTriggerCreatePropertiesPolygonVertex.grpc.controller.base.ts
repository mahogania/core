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
import { AreaTriggerCreatePropertiesPolygonVertexService } from "../areaTriggerCreatePropertiesPolygonVertex.service";
import { AreaTriggerCreatePropertiesPolygonVertexCreateInput } from "./AreaTriggerCreatePropertiesPolygonVertexCreateInput";
import { AreaTriggerCreatePropertiesPolygonVertexWhereInput } from "./AreaTriggerCreatePropertiesPolygonVertexWhereInput";
import { AreaTriggerCreatePropertiesPolygonVertexWhereUniqueInput } from "./AreaTriggerCreatePropertiesPolygonVertexWhereUniqueInput";
import { AreaTriggerCreatePropertiesPolygonVertexFindManyArgs } from "./AreaTriggerCreatePropertiesPolygonVertexFindManyArgs";
import { AreaTriggerCreatePropertiesPolygonVertexUpdateInput } from "./AreaTriggerCreatePropertiesPolygonVertexUpdateInput";
import { AreaTriggerCreatePropertiesPolygonVertex } from "./AreaTriggerCreatePropertiesPolygonVertex";

export class AreaTriggerCreatePropertiesPolygonVertexGrpcControllerBase {
  constructor(
    protected readonly service: AreaTriggerCreatePropertiesPolygonVertexService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({
    type: AreaTriggerCreatePropertiesPolygonVertex,
  })
  @GrpcMethod(
    "AreaTriggerCreatePropertiesPolygonVertexService",
    "createAreaTriggerCreatePropertiesPolygonVertex"
  )
  async createAreaTriggerCreatePropertiesPolygonVertex(
    @common.Body() data: AreaTriggerCreatePropertiesPolygonVertexCreateInput
  ): Promise<AreaTriggerCreatePropertiesPolygonVertex> {
    return await this.service.createAreaTriggerCreatePropertiesPolygonVertex({
      data: data,
      select: {
        areaTriggerCreatePropertiesId: true,
        createdAt: true,
        id: true,
        idx: true,
        isCustom: true,
        updatedAt: true,
        verifiedBuild: true,
        verticeTargetX: true,
        verticeTargetY: true,
        verticeX: true,
        verticeY: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AreaTriggerCreatePropertiesPolygonVertex] })
  @ApiNestedQuery(AreaTriggerCreatePropertiesPolygonVertexFindManyArgs)
  @GrpcMethod(
    "AreaTriggerCreatePropertiesPolygonVertexService",
    "areaTriggerCreatePropertiesPolygonVertices"
  )
  async areaTriggerCreatePropertiesPolygonVertices(
    @common.Req() request: Request
  ): Promise<AreaTriggerCreatePropertiesPolygonVertex[]> {
    const args = plainToClass(
      AreaTriggerCreatePropertiesPolygonVertexFindManyArgs,
      request.query
    );
    return this.service.areaTriggerCreatePropertiesPolygonVertices({
      ...args,
      select: {
        areaTriggerCreatePropertiesId: true,
        createdAt: true,
        id: true,
        idx: true,
        isCustom: true,
        updatedAt: true,
        verifiedBuild: true,
        verticeTargetX: true,
        verticeTargetY: true,
        verticeX: true,
        verticeY: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AreaTriggerCreatePropertiesPolygonVertex })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "AreaTriggerCreatePropertiesPolygonVertexService",
    "areaTriggerCreatePropertiesPolygonVertex"
  )
  async areaTriggerCreatePropertiesPolygonVertex(
    @common.Param()
    params: AreaTriggerCreatePropertiesPolygonVertexWhereUniqueInput
  ): Promise<AreaTriggerCreatePropertiesPolygonVertex | null> {
    const result = await this.service.areaTriggerCreatePropertiesPolygonVertex({
      where: params,
      select: {
        areaTriggerCreatePropertiesId: true,
        createdAt: true,
        id: true,
        idx: true,
        isCustom: true,
        updatedAt: true,
        verifiedBuild: true,
        verticeTargetX: true,
        verticeTargetY: true,
        verticeX: true,
        verticeY: true,
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
  @swagger.ApiOkResponse({ type: AreaTriggerCreatePropertiesPolygonVertex })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "AreaTriggerCreatePropertiesPolygonVertexService",
    "updateAreaTriggerCreatePropertiesPolygonVertex"
  )
  async updateAreaTriggerCreatePropertiesPolygonVertex(
    @common.Param()
    params: AreaTriggerCreatePropertiesPolygonVertexWhereUniqueInput,
    @common.Body() data: AreaTriggerCreatePropertiesPolygonVertexUpdateInput
  ): Promise<AreaTriggerCreatePropertiesPolygonVertex | null> {
    try {
      return await this.service.updateAreaTriggerCreatePropertiesPolygonVertex({
        where: params,
        data: data,
        select: {
          areaTriggerCreatePropertiesId: true,
          createdAt: true,
          id: true,
          idx: true,
          isCustom: true,
          updatedAt: true,
          verifiedBuild: true,
          verticeTargetX: true,
          verticeTargetY: true,
          verticeX: true,
          verticeY: true,
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
  @swagger.ApiOkResponse({ type: AreaTriggerCreatePropertiesPolygonVertex })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "AreaTriggerCreatePropertiesPolygonVertexService",
    "deleteAreaTriggerCreatePropertiesPolygonVertex"
  )
  async deleteAreaTriggerCreatePropertiesPolygonVertex(
    @common.Param()
    params: AreaTriggerCreatePropertiesPolygonVertexWhereUniqueInput
  ): Promise<AreaTriggerCreatePropertiesPolygonVertex | null> {
    try {
      return await this.service.deleteAreaTriggerCreatePropertiesPolygonVertex({
        where: params,
        select: {
          areaTriggerCreatePropertiesId: true,
          createdAt: true,
          id: true,
          idx: true,
          isCustom: true,
          updatedAt: true,
          verifiedBuild: true,
          verticeTargetX: true,
          verticeTargetY: true,
          verticeX: true,
          verticeY: true,
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