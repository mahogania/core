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
import { PaymentReconciliationLogService } from "../paymentReconciliationLog.service";
import { PaymentReconciliationLogCreateInput } from "./PaymentReconciliationLogCreateInput";
import { PaymentReconciliationLog } from "./PaymentReconciliationLog";
import { PaymentReconciliationLogFindManyArgs } from "./PaymentReconciliationLogFindManyArgs";
import { PaymentReconciliationLogWhereUniqueInput } from "./PaymentReconciliationLogWhereUniqueInput";
import { PaymentReconciliationLogUpdateInput } from "./PaymentReconciliationLogUpdateInput";

export class PaymentReconciliationLogControllerBase {
  constructor(protected readonly service: PaymentReconciliationLogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentReconciliationLog })
  async createPaymentReconciliationLog(
    @common.Body() data: PaymentReconciliationLogCreateInput
  ): Promise<PaymentReconciliationLog> {
    return await this.service.createPaymentReconciliationLog({
      data: data,
      select: {
        allocated: true,
        createdAt: true,
        docstatus: true,
        errorLog: true,
        id: true,
        idx: true,
        modifiedBy: true,
        name: true,
        owner: true,
        processPr: true,
        reconciled: true,
        reconciledEntries: true,
        status: true,
        totalAllocations: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentReconciliationLog] })
  @ApiNestedQuery(PaymentReconciliationLogFindManyArgs)
  async paymentReconciliationLogs(
    @common.Req() request: Request
  ): Promise<PaymentReconciliationLog[]> {
    const args = plainToClass(
      PaymentReconciliationLogFindManyArgs,
      request.query
    );
    return this.service.paymentReconciliationLogs({
      ...args,
      select: {
        allocated: true,
        createdAt: true,
        docstatus: true,
        errorLog: true,
        id: true,
        idx: true,
        modifiedBy: true,
        name: true,
        owner: true,
        processPr: true,
        reconciled: true,
        reconciledEntries: true,
        status: true,
        totalAllocations: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentReconciliationLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async paymentReconciliationLog(
    @common.Param() params: PaymentReconciliationLogWhereUniqueInput
  ): Promise<PaymentReconciliationLog | null> {
    const result = await this.service.paymentReconciliationLog({
      where: params,
      select: {
        allocated: true,
        createdAt: true,
        docstatus: true,
        errorLog: true,
        id: true,
        idx: true,
        modifiedBy: true,
        name: true,
        owner: true,
        processPr: true,
        reconciled: true,
        reconciledEntries: true,
        status: true,
        totalAllocations: true,
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
  @swagger.ApiOkResponse({ type: PaymentReconciliationLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePaymentReconciliationLog(
    @common.Param() params: PaymentReconciliationLogWhereUniqueInput,
    @common.Body() data: PaymentReconciliationLogUpdateInput
  ): Promise<PaymentReconciliationLog | null> {
    try {
      return await this.service.updatePaymentReconciliationLog({
        where: params,
        data: data,
        select: {
          allocated: true,
          createdAt: true,
          docstatus: true,
          errorLog: true,
          id: true,
          idx: true,
          modifiedBy: true,
          name: true,
          owner: true,
          processPr: true,
          reconciled: true,
          reconciledEntries: true,
          status: true,
          totalAllocations: true,
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
  @swagger.ApiOkResponse({ type: PaymentReconciliationLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePaymentReconciliationLog(
    @common.Param() params: PaymentReconciliationLogWhereUniqueInput
  ): Promise<PaymentReconciliationLog | null> {
    try {
      return await this.service.deletePaymentReconciliationLog({
        where: params,
        select: {
          allocated: true,
          createdAt: true,
          docstatus: true,
          errorLog: true,
          id: true,
          idx: true,
          modifiedBy: true,
          name: true,
          owner: true,
          processPr: true,
          reconciled: true,
          reconciledEntries: true,
          status: true,
          totalAllocations: true,
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
