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
import { PhaseAreaService } from "../phaseArea.service";
import { PhaseAreaCreateInput } from "./PhaseAreaCreateInput";
import { PhaseAreaWhereInput } from "./PhaseAreaWhereInput";
import { PhaseAreaWhereUniqueInput } from "./PhaseAreaWhereUniqueInput";
import { PhaseAreaFindManyArgs } from "./PhaseAreaFindManyArgs";
import { PhaseAreaUpdateInput } from "./PhaseAreaUpdateInput";
import { PhaseArea } from "./PhaseArea";

export class PhaseAreaGrpcControllerBase {
  constructor(protected readonly service: PhaseAreaService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PhaseArea })
  @GrpcMethod("PhaseAreaService", "createPhaseArea")
  async createPhaseArea(
    @common.Body() data: PhaseAreaCreateInput
  ): Promise<PhaseArea> {
    return await this.service.createPhaseArea({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PhaseArea] })
  @ApiNestedQuery(PhaseAreaFindManyArgs)
  @GrpcMethod("PhaseAreaService", "phaseAreas")
  async phaseAreas(@common.Req() request: Request): Promise<PhaseArea[]> {
    const args = plainToClass(PhaseAreaFindManyArgs, request.query);
    return this.service.phaseAreas({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PhaseArea })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PhaseAreaService", "phaseArea")
  async phaseArea(
    @common.Param() params: PhaseAreaWhereUniqueInput
  ): Promise<PhaseArea | null> {
    const result = await this.service.phaseArea({
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
  @swagger.ApiOkResponse({ type: PhaseArea })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PhaseAreaService", "updatePhaseArea")
  async updatePhaseArea(
    @common.Param() params: PhaseAreaWhereUniqueInput,
    @common.Body() data: PhaseAreaUpdateInput
  ): Promise<PhaseArea | null> {
    try {
      return await this.service.updatePhaseArea({
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
  @swagger.ApiOkResponse({ type: PhaseArea })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PhaseAreaService", "deletePhaseArea")
  async deletePhaseArea(
    @common.Param() params: PhaseAreaWhereUniqueInput
  ): Promise<PhaseArea | null> {
    try {
      return await this.service.deletePhaseArea({
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
