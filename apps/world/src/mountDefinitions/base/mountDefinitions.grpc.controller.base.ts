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
import { MountDefinitionsService } from "../mountDefinitions.service";
import { MountDefinitionsCreateInput } from "./MountDefinitionsCreateInput";
import { MountDefinitionsWhereInput } from "./MountDefinitionsWhereInput";
import { MountDefinitionsWhereUniqueInput } from "./MountDefinitionsWhereUniqueInput";
import { MountDefinitionsFindManyArgs } from "./MountDefinitionsFindManyArgs";
import { MountDefinitionsUpdateInput } from "./MountDefinitionsUpdateInput";
import { MountDefinitions } from "./MountDefinitions";

export class MountDefinitionsGrpcControllerBase {
  constructor(protected readonly service: MountDefinitionsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MountDefinitions })
  @GrpcMethod("MountDefinitionsService", "createMountDefinitions")
  async createMountDefinitions(
    @common.Body() data: MountDefinitionsCreateInput
  ): Promise<MountDefinitions> {
    return await this.service.createMountDefinitions({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MountDefinitions] })
  @ApiNestedQuery(MountDefinitionsFindManyArgs)
  @GrpcMethod("MountDefinitionsService", "mountDefinitionsItems")
  async mountDefinitionsItems(
    @common.Req() request: Request
  ): Promise<MountDefinitions[]> {
    const args = plainToClass(MountDefinitionsFindManyArgs, request.query);
    return this.service.mountDefinitionsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MountDefinitions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("MountDefinitionsService", "mountDefinitions")
  async mountDefinitions(
    @common.Param() params: MountDefinitionsWhereUniqueInput
  ): Promise<MountDefinitions | null> {
    const result = await this.service.mountDefinitions({
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
  @swagger.ApiOkResponse({ type: MountDefinitions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("MountDefinitionsService", "updateMountDefinitions")
  async updateMountDefinitions(
    @common.Param() params: MountDefinitionsWhereUniqueInput,
    @common.Body() data: MountDefinitionsUpdateInput
  ): Promise<MountDefinitions | null> {
    try {
      return await this.service.updateMountDefinitions({
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
  @swagger.ApiOkResponse({ type: MountDefinitions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("MountDefinitionsService", "deleteMountDefinitions")
  async deleteMountDefinitions(
    @common.Param() params: MountDefinitionsWhereUniqueInput
  ): Promise<MountDefinitions | null> {
    try {
      return await this.service.deleteMountDefinitions({
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
