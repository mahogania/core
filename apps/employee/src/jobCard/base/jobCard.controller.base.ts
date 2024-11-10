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
import { JobCardService } from "../jobCard.service";
import { JobCardCreateInput } from "./JobCardCreateInput";
import { JobCard } from "./JobCard";
import { JobCardFindManyArgs } from "./JobCardFindManyArgs";
import { JobCardWhereUniqueInput } from "./JobCardWhereUniqueInput";
import { JobCardUpdateInput } from "./JobCardUpdateInput";

export class JobCardControllerBase {
  constructor(protected readonly service: JobCardService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: JobCard })
  @swagger.ApiBody({
    type: JobCardCreateInput,
  })
  async createJobCard(
    @common.Body() data: JobCardCreateInput
  ): Promise<JobCard> {
    return await this.service.createJobCard({
      data: data,
      select: {
        actualEndDate: true,
        actualStartDate: true,
        amendedFrom: true,
        barcode: true,
        batchNo: true,
        bomNo: true,
        company: true,
        createdAt: true,
        creation: true,
        currentTime: true,
        docstatus: true,
        expectedEndDate: true,
        expectedStartDate: true,
        forJobCard: true,
        forOperation: true,
        forQuantity: true,
        hourRate: true,
        id: true,
        idx: true,
        isCorrectiveJobCard: true,
        itemName: true,
        jobStarted: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        operation: true,
        operationId: true,
        operationRowNumber: true,
        owner: true,
        postingDate: true,
        processLossQty: true,
        productionItem: true,
        project: true,
        qualityInspection: true,
        qualityInspectionTemplate: true,
        remarks: true,
        requestedQty: true,
        sequenceId: true,
        serialAndBatchBundle: true,
        serialNo: true,
        startedTime: true,
        status: true,
        timeRequired: true,
        totalCompletedQty: true,
        totalTimeInMins: true,
        transferredQty: true,
        updatedAt: true,
        wipWarehouse: true,
        workOrder: true,
        workstation: true,
        workstationType: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [JobCard] })
  @ApiNestedQuery(JobCardFindManyArgs)
  async jobCards(@common.Req() request: Request): Promise<JobCard[]> {
    const args = plainToClass(JobCardFindManyArgs, request.query);
    return this.service.jobCards({
      ...args,
      select: {
        actualEndDate: true,
        actualStartDate: true,
        amendedFrom: true,
        barcode: true,
        batchNo: true,
        bomNo: true,
        company: true,
        createdAt: true,
        creation: true,
        currentTime: true,
        docstatus: true,
        expectedEndDate: true,
        expectedStartDate: true,
        forJobCard: true,
        forOperation: true,
        forQuantity: true,
        hourRate: true,
        id: true,
        idx: true,
        isCorrectiveJobCard: true,
        itemName: true,
        jobStarted: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        operation: true,
        operationId: true,
        operationRowNumber: true,
        owner: true,
        postingDate: true,
        processLossQty: true,
        productionItem: true,
        project: true,
        qualityInspection: true,
        qualityInspectionTemplate: true,
        remarks: true,
        requestedQty: true,
        sequenceId: true,
        serialAndBatchBundle: true,
        serialNo: true,
        startedTime: true,
        status: true,
        timeRequired: true,
        totalCompletedQty: true,
        totalTimeInMins: true,
        transferredQty: true,
        updatedAt: true,
        wipWarehouse: true,
        workOrder: true,
        workstation: true,
        workstationType: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: JobCard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async jobCard(
    @common.Param() params: JobCardWhereUniqueInput
  ): Promise<JobCard | null> {
    const result = await this.service.jobCard({
      where: params,
      select: {
        actualEndDate: true,
        actualStartDate: true,
        amendedFrom: true,
        barcode: true,
        batchNo: true,
        bomNo: true,
        company: true,
        createdAt: true,
        creation: true,
        currentTime: true,
        docstatus: true,
        expectedEndDate: true,
        expectedStartDate: true,
        forJobCard: true,
        forOperation: true,
        forQuantity: true,
        hourRate: true,
        id: true,
        idx: true,
        isCorrectiveJobCard: true,
        itemName: true,
        jobStarted: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        operation: true,
        operationId: true,
        operationRowNumber: true,
        owner: true,
        postingDate: true,
        processLossQty: true,
        productionItem: true,
        project: true,
        qualityInspection: true,
        qualityInspectionTemplate: true,
        remarks: true,
        requestedQty: true,
        sequenceId: true,
        serialAndBatchBundle: true,
        serialNo: true,
        startedTime: true,
        status: true,
        timeRequired: true,
        totalCompletedQty: true,
        totalTimeInMins: true,
        transferredQty: true,
        updatedAt: true,
        wipWarehouse: true,
        workOrder: true,
        workstation: true,
        workstationType: true,
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
  @swagger.ApiOkResponse({ type: JobCard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: JobCardUpdateInput,
  })
  async updateJobCard(
    @common.Param() params: JobCardWhereUniqueInput,
    @common.Body() data: JobCardUpdateInput
  ): Promise<JobCard | null> {
    try {
      return await this.service.updateJobCard({
        where: params,
        data: data,
        select: {
          actualEndDate: true,
          actualStartDate: true,
          amendedFrom: true,
          barcode: true,
          batchNo: true,
          bomNo: true,
          company: true,
          createdAt: true,
          creation: true,
          currentTime: true,
          docstatus: true,
          expectedEndDate: true,
          expectedStartDate: true,
          forJobCard: true,
          forOperation: true,
          forQuantity: true,
          hourRate: true,
          id: true,
          idx: true,
          isCorrectiveJobCard: true,
          itemName: true,
          jobStarted: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namingSeries: true,
          operation: true,
          operationId: true,
          operationRowNumber: true,
          owner: true,
          postingDate: true,
          processLossQty: true,
          productionItem: true,
          project: true,
          qualityInspection: true,
          qualityInspectionTemplate: true,
          remarks: true,
          requestedQty: true,
          sequenceId: true,
          serialAndBatchBundle: true,
          serialNo: true,
          startedTime: true,
          status: true,
          timeRequired: true,
          totalCompletedQty: true,
          totalTimeInMins: true,
          transferredQty: true,
          updatedAt: true,
          wipWarehouse: true,
          workOrder: true,
          workstation: true,
          workstationType: true,
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
  @swagger.ApiOkResponse({ type: JobCard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteJobCard(
    @common.Param() params: JobCardWhereUniqueInput
  ): Promise<JobCard | null> {
    try {
      return await this.service.deleteJobCard({
        where: params,
        select: {
          actualEndDate: true,
          actualStartDate: true,
          amendedFrom: true,
          barcode: true,
          batchNo: true,
          bomNo: true,
          company: true,
          createdAt: true,
          creation: true,
          currentTime: true,
          docstatus: true,
          expectedEndDate: true,
          expectedStartDate: true,
          forJobCard: true,
          forOperation: true,
          forQuantity: true,
          hourRate: true,
          id: true,
          idx: true,
          isCorrectiveJobCard: true,
          itemName: true,
          jobStarted: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namingSeries: true,
          operation: true,
          operationId: true,
          operationRowNumber: true,
          owner: true,
          postingDate: true,
          processLossQty: true,
          productionItem: true,
          project: true,
          qualityInspection: true,
          qualityInspectionTemplate: true,
          remarks: true,
          requestedQty: true,
          sequenceId: true,
          serialAndBatchBundle: true,
          serialNo: true,
          startedTime: true,
          status: true,
          timeRequired: true,
          totalCompletedQty: true,
          totalTimeInMins: true,
          transferredQty: true,
          updatedAt: true,
          wipWarehouse: true,
          workOrder: true,
          workstation: true,
          workstationType: true,
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
