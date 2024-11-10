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
import { ExplorationBasexpService } from "../explorationBasexp.service";
import { ExplorationBasexpCreateInput } from "./ExplorationBasexpCreateInput";
import { ExplorationBasexpWhereInput } from "./ExplorationBasexpWhereInput";
import { ExplorationBasexpWhereUniqueInput } from "./ExplorationBasexpWhereUniqueInput";
import { ExplorationBasexpFindManyArgs } from "./ExplorationBasexpFindManyArgs";
import { ExplorationBasexpUpdateInput } from "./ExplorationBasexpUpdateInput";
import { ExplorationBasexp } from "./ExplorationBasexp";

export class ExplorationBasexpGrpcControllerBase {
  constructor(protected readonly service: ExplorationBasexpService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ExplorationBasexp })
  @GrpcMethod("ExplorationBasexpService", "createExplorationBasexp")
  async createExplorationBasexp(
    @common.Body() data: ExplorationBasexpCreateInput
  ): Promise<ExplorationBasexp> {
    return await this.service.createExplorationBasexp({
      data: data,
      select: {
        basexp: true,
        createdAt: true,
        id: true,
        level: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ExplorationBasexp] })
  @ApiNestedQuery(ExplorationBasexpFindManyArgs)
  @GrpcMethod("ExplorationBasexpService", "explorationBasexps")
  async explorationBasexps(
    @common.Req() request: Request
  ): Promise<ExplorationBasexp[]> {
    const args = plainToClass(ExplorationBasexpFindManyArgs, request.query);
    return this.service.explorationBasexps({
      ...args,
      select: {
        basexp: true,
        createdAt: true,
        id: true,
        level: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ExplorationBasexp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ExplorationBasexpService", "explorationBasexp")
  async explorationBasexp(
    @common.Param() params: ExplorationBasexpWhereUniqueInput
  ): Promise<ExplorationBasexp | null> {
    const result = await this.service.explorationBasexp({
      where: params,
      select: {
        basexp: true,
        createdAt: true,
        id: true,
        level: true,
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
  @swagger.ApiOkResponse({ type: ExplorationBasexp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ExplorationBasexpService", "updateExplorationBasexp")
  async updateExplorationBasexp(
    @common.Param() params: ExplorationBasexpWhereUniqueInput,
    @common.Body() data: ExplorationBasexpUpdateInput
  ): Promise<ExplorationBasexp | null> {
    try {
      return await this.service.updateExplorationBasexp({
        where: params,
        data: data,
        select: {
          basexp: true,
          createdAt: true,
          id: true,
          level: true,
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
  @swagger.ApiOkResponse({ type: ExplorationBasexp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ExplorationBasexpService", "deleteExplorationBasexp")
  async deleteExplorationBasexp(
    @common.Param() params: ExplorationBasexpWhereUniqueInput
  ): Promise<ExplorationBasexp | null> {
    try {
      return await this.service.deleteExplorationBasexp({
        where: params,
        select: {
          basexp: true,
          createdAt: true,
          id: true,
          level: true,
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
