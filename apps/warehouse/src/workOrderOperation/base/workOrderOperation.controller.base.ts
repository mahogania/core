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
import { WorkOrderOperationService } from "../workOrderOperation.service";
import { WorkOrderOperationCreateInput } from "./WorkOrderOperationCreateInput";
import { WorkOrderOperation } from "./WorkOrderOperation";
import { WorkOrderOperationFindManyArgs } from "./WorkOrderOperationFindManyArgs";
import { WorkOrderOperationWhereUniqueInput } from "./WorkOrderOperationWhereUniqueInput";
import { WorkOrderOperationUpdateInput } from "./WorkOrderOperationUpdateInput";

export class WorkOrderOperationControllerBase {
  constructor(protected readonly service: WorkOrderOperationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WorkOrderOperation })
  async createWorkOrderOperation(
    @common.Body() data: WorkOrderOperationCreateInput
  ): Promise<WorkOrderOperation> {
    return await this.service.createWorkOrderOperation({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [WorkOrderOperation] })
  @ApiNestedQuery(WorkOrderOperationFindManyArgs)
  async workOrderOperations(
    @common.Req() request: Request
  ): Promise<WorkOrderOperation[]> {
    const args = plainToClass(WorkOrderOperationFindManyArgs, request.query);
    return this.service.workOrderOperations({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WorkOrderOperation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async workOrderOperation(
    @common.Param() params: WorkOrderOperationWhereUniqueInput
  ): Promise<WorkOrderOperation | null> {
    const result = await this.service.workOrderOperation({
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
  @swagger.ApiOkResponse({ type: WorkOrderOperation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWorkOrderOperation(
    @common.Param() params: WorkOrderOperationWhereUniqueInput,
    @common.Body() data: WorkOrderOperationUpdateInput
  ): Promise<WorkOrderOperation | null> {
    try {
      return await this.service.updateWorkOrderOperation({
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
  @swagger.ApiOkResponse({ type: WorkOrderOperation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWorkOrderOperation(
    @common.Param() params: WorkOrderOperationWhereUniqueInput
  ): Promise<WorkOrderOperation | null> {
    try {
      return await this.service.deleteWorkOrderOperation({
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