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
import { JobCardOperationService } from "../jobCardOperation.service";
import { JobCardOperationCreateInput } from "./JobCardOperationCreateInput";
import { JobCardOperationWhereInput } from "./JobCardOperationWhereInput";
import { JobCardOperationWhereUniqueInput } from "./JobCardOperationWhereUniqueInput";
import { JobCardOperationFindManyArgs } from "./JobCardOperationFindManyArgs";
import { JobCardOperationUpdateInput } from "./JobCardOperationUpdateInput";
import { JobCardOperation } from "./JobCardOperation";

export class JobCardOperationGrpcControllerBase {
  constructor(protected readonly service: JobCardOperationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: JobCardOperation })
  @GrpcMethod("JobCardOperationService", "createJobCardOperation")
  async createJobCardOperation(
    @common.Body() data: JobCardOperationCreateInput
  ): Promise<JobCardOperation> {
    return await this.service.createJobCardOperation({
      data: data,
      select: {
        completedQty: true,
        completedTime: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        status: true,
        subOperation: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [JobCardOperation] })
  @ApiNestedQuery(JobCardOperationFindManyArgs)
  @GrpcMethod("JobCardOperationService", "jobCardOperations")
  async jobCardOperations(
    @common.Req() request: Request
  ): Promise<JobCardOperation[]> {
    const args = plainToClass(JobCardOperationFindManyArgs, request.query);
    return this.service.jobCardOperations({
      ...args,
      select: {
        completedQty: true,
        completedTime: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        status: true,
        subOperation: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: JobCardOperation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("JobCardOperationService", "jobCardOperation")
  async jobCardOperation(
    @common.Param() params: JobCardOperationWhereUniqueInput
  ): Promise<JobCardOperation | null> {
    const result = await this.service.jobCardOperation({
      where: params,
      select: {
        completedQty: true,
        completedTime: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        status: true,
        subOperation: true,
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
  @swagger.ApiOkResponse({ type: JobCardOperation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("JobCardOperationService", "updateJobCardOperation")
  async updateJobCardOperation(
    @common.Param() params: JobCardOperationWhereUniqueInput,
    @common.Body() data: JobCardOperationUpdateInput
  ): Promise<JobCardOperation | null> {
    try {
      return await this.service.updateJobCardOperation({
        where: params,
        data: data,
        select: {
          completedQty: true,
          completedTime: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          status: true,
          subOperation: true,
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
  @swagger.ApiOkResponse({ type: JobCardOperation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("JobCardOperationService", "deleteJobCardOperation")
  async deleteJobCardOperation(
    @common.Param() params: JobCardOperationWhereUniqueInput
  ): Promise<JobCardOperation | null> {
    try {
      return await this.service.deleteJobCardOperation({
        where: params,
        select: {
          completedQty: true,
          completedTime: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          status: true,
          subOperation: true,
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