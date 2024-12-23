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
import { AreaTriggerCreatePropertyService } from "../areaTriggerCreateProperty.service";
import { AreaTriggerCreatePropertyCreateInput } from "./AreaTriggerCreatePropertyCreateInput";
import { AreaTriggerCreatePropertyWhereInput } from "./AreaTriggerCreatePropertyWhereInput";
import { AreaTriggerCreatePropertyWhereUniqueInput } from "./AreaTriggerCreatePropertyWhereUniqueInput";
import { AreaTriggerCreatePropertyFindManyArgs } from "./AreaTriggerCreatePropertyFindManyArgs";
import { AreaTriggerCreatePropertyUpdateInput } from "./AreaTriggerCreatePropertyUpdateInput";
import { AreaTriggerCreateProperty } from "./AreaTriggerCreateProperty";

export class AreaTriggerCreatePropertyGrpcControllerBase {
  constructor(protected readonly service: AreaTriggerCreatePropertyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AreaTriggerCreateProperty })
  @GrpcMethod(
    "AreaTriggerCreatePropertyService",
    "createAreaTriggerCreateProperty"
  )
  async createAreaTriggerCreateProperty(
    @common.Body() data: AreaTriggerCreatePropertyCreateInput
  ): Promise<AreaTriggerCreateProperty> {
    return await this.service.createAreaTriggerCreateProperty({
      data: data,
      select: {
        animId: true,
        animKitId: true,
        areaTriggerId: true,
        createdAt: true,
        decalPropertiesId: true,
        facingCurveId: true,
        flags: true,
        id: true,
        isAreatriggerCustom: true,
        isCustom: true,
        morphCurveId: true,
        moveCurveId: true,
        scaleCurveId: true,
        scriptName: true,
        shape: true,
        shapeData0: true,
        shapeData1: true,
        shapeData2: true,
        shapeData3: true,
        shapeData4: true,
        shapeData5: true,
        shapeData6: true,
        shapeData7: true,
        timeToTarget: true,
        timeToTargetScale: true,
        updatedAt: true,
        verifiedBuild: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AreaTriggerCreateProperty] })
  @ApiNestedQuery(AreaTriggerCreatePropertyFindManyArgs)
  @GrpcMethod("AreaTriggerCreatePropertyService", "areaTriggerCreateProperties")
  async areaTriggerCreateProperties(
    @common.Req() request: Request
  ): Promise<AreaTriggerCreateProperty[]> {
    const args = plainToClass(
      AreaTriggerCreatePropertyFindManyArgs,
      request.query
    );
    return this.service.areaTriggerCreateProperties({
      ...args,
      select: {
        animId: true,
        animKitId: true,
        areaTriggerId: true,
        createdAt: true,
        decalPropertiesId: true,
        facingCurveId: true,
        flags: true,
        id: true,
        isAreatriggerCustom: true,
        isCustom: true,
        morphCurveId: true,
        moveCurveId: true,
        scaleCurveId: true,
        scriptName: true,
        shape: true,
        shapeData0: true,
        shapeData1: true,
        shapeData2: true,
        shapeData3: true,
        shapeData4: true,
        shapeData5: true,
        shapeData6: true,
        shapeData7: true,
        timeToTarget: true,
        timeToTargetScale: true,
        updatedAt: true,
        verifiedBuild: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AreaTriggerCreateProperty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AreaTriggerCreatePropertyService", "areaTriggerCreateProperty")
  async areaTriggerCreateProperty(
    @common.Param() params: AreaTriggerCreatePropertyWhereUniqueInput
  ): Promise<AreaTriggerCreateProperty | null> {
    const result = await this.service.areaTriggerCreateProperty({
      where: params,
      select: {
        animId: true,
        animKitId: true,
        areaTriggerId: true,
        createdAt: true,
        decalPropertiesId: true,
        facingCurveId: true,
        flags: true,
        id: true,
        isAreatriggerCustom: true,
        isCustom: true,
        morphCurveId: true,
        moveCurveId: true,
        scaleCurveId: true,
        scriptName: true,
        shape: true,
        shapeData0: true,
        shapeData1: true,
        shapeData2: true,
        shapeData3: true,
        shapeData4: true,
        shapeData5: true,
        shapeData6: true,
        shapeData7: true,
        timeToTarget: true,
        timeToTargetScale: true,
        updatedAt: true,
        verifiedBuild: true,
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
  @swagger.ApiOkResponse({ type: AreaTriggerCreateProperty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "AreaTriggerCreatePropertyService",
    "updateAreaTriggerCreateProperty"
  )
  async updateAreaTriggerCreateProperty(
    @common.Param() params: AreaTriggerCreatePropertyWhereUniqueInput,
    @common.Body() data: AreaTriggerCreatePropertyUpdateInput
  ): Promise<AreaTriggerCreateProperty | null> {
    try {
      return await this.service.updateAreaTriggerCreateProperty({
        where: params,
        data: data,
        select: {
          animId: true,
          animKitId: true,
          areaTriggerId: true,
          createdAt: true,
          decalPropertiesId: true,
          facingCurveId: true,
          flags: true,
          id: true,
          isAreatriggerCustom: true,
          isCustom: true,
          morphCurveId: true,
          moveCurveId: true,
          scaleCurveId: true,
          scriptName: true,
          shape: true,
          shapeData0: true,
          shapeData1: true,
          shapeData2: true,
          shapeData3: true,
          shapeData4: true,
          shapeData5: true,
          shapeData6: true,
          shapeData7: true,
          timeToTarget: true,
          timeToTargetScale: true,
          updatedAt: true,
          verifiedBuild: true,
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
  @swagger.ApiOkResponse({ type: AreaTriggerCreateProperty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "AreaTriggerCreatePropertyService",
    "deleteAreaTriggerCreateProperty"
  )
  async deleteAreaTriggerCreateProperty(
    @common.Param() params: AreaTriggerCreatePropertyWhereUniqueInput
  ): Promise<AreaTriggerCreateProperty | null> {
    try {
      return await this.service.deleteAreaTriggerCreateProperty({
        where: params,
        select: {
          animId: true,
          animKitId: true,
          areaTriggerId: true,
          createdAt: true,
          decalPropertiesId: true,
          facingCurveId: true,
          flags: true,
          id: true,
          isAreatriggerCustom: true,
          isCustom: true,
          morphCurveId: true,
          moveCurveId: true,
          scaleCurveId: true,
          scriptName: true,
          shape: true,
          shapeData0: true,
          shapeData1: true,
          shapeData2: true,
          shapeData3: true,
          shapeData4: true,
          shapeData5: true,
          shapeData6: true,
          shapeData7: true,
          timeToTarget: true,
          timeToTargetScale: true,
          updatedAt: true,
          verifiedBuild: true,
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
