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
import { PosInvoiceMergeLogService } from "../posInvoiceMergeLog.service";
import { PosInvoiceMergeLogCreateInput } from "./PosInvoiceMergeLogCreateInput";
import { PosInvoiceMergeLog } from "./PosInvoiceMergeLog";
import { PosInvoiceMergeLogFindManyArgs } from "./PosInvoiceMergeLogFindManyArgs";
import { PosInvoiceMergeLogWhereUniqueInput } from "./PosInvoiceMergeLogWhereUniqueInput";
import { PosInvoiceMergeLogUpdateInput } from "./PosInvoiceMergeLogUpdateInput";

export class PosInvoiceMergeLogControllerBase {
  constructor(protected readonly service: PosInvoiceMergeLogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PosInvoiceMergeLog })
  async createPosInvoiceMergeLog(
    @common.Body() data: PosInvoiceMergeLogCreateInput
  ): Promise<PosInvoiceMergeLog> {
    return await this.service.createPosInvoiceMergeLog({
      data: data,
      select: {
        amendedFrom: true,
        consolidatedCreditNote: true,
        consolidatedInvoice: true,
        createdAt: true,
        creation: true,
        customer: true,
        customerGroup: true,
        docStatus: true,
        id: true,
        idx: true,
        mergeInvoicesBasedOn: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        posClosingEntry: true,
        postingDate: true,
        postingTime: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PosInvoiceMergeLog] })
  @ApiNestedQuery(PosInvoiceMergeLogFindManyArgs)
  async posInvoiceMergeLogs(
    @common.Req() request: Request
  ): Promise<PosInvoiceMergeLog[]> {
    const args = plainToClass(PosInvoiceMergeLogFindManyArgs, request.query);
    return this.service.posInvoiceMergeLogs({
      ...args,
      select: {
        amendedFrom: true,
        consolidatedCreditNote: true,
        consolidatedInvoice: true,
        createdAt: true,
        creation: true,
        customer: true,
        customerGroup: true,
        docStatus: true,
        id: true,
        idx: true,
        mergeInvoicesBasedOn: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        posClosingEntry: true,
        postingDate: true,
        postingTime: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PosInvoiceMergeLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async posInvoiceMergeLog(
    @common.Param() params: PosInvoiceMergeLogWhereUniqueInput
  ): Promise<PosInvoiceMergeLog | null> {
    const result = await this.service.posInvoiceMergeLog({
      where: params,
      select: {
        amendedFrom: true,
        consolidatedCreditNote: true,
        consolidatedInvoice: true,
        createdAt: true,
        creation: true,
        customer: true,
        customerGroup: true,
        docStatus: true,
        id: true,
        idx: true,
        mergeInvoicesBasedOn: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        posClosingEntry: true,
        postingDate: true,
        postingTime: true,
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
  @swagger.ApiOkResponse({ type: PosInvoiceMergeLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePosInvoiceMergeLog(
    @common.Param() params: PosInvoiceMergeLogWhereUniqueInput,
    @common.Body() data: PosInvoiceMergeLogUpdateInput
  ): Promise<PosInvoiceMergeLog | null> {
    try {
      return await this.service.updatePosInvoiceMergeLog({
        where: params,
        data: data,
        select: {
          amendedFrom: true,
          consolidatedCreditNote: true,
          consolidatedInvoice: true,
          createdAt: true,
          creation: true,
          customer: true,
          customerGroup: true,
          docStatus: true,
          id: true,
          idx: true,
          mergeInvoicesBasedOn: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          posClosingEntry: true,
          postingDate: true,
          postingTime: true,
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
  @swagger.ApiOkResponse({ type: PosInvoiceMergeLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePosInvoiceMergeLog(
    @common.Param() params: PosInvoiceMergeLogWhereUniqueInput
  ): Promise<PosInvoiceMergeLog | null> {
    try {
      return await this.service.deletePosInvoiceMergeLog({
        where: params,
        select: {
          amendedFrom: true,
          consolidatedCreditNote: true,
          consolidatedInvoice: true,
          createdAt: true,
          creation: true,
          customer: true,
          customerGroup: true,
          docStatus: true,
          id: true,
          idx: true,
          mergeInvoicesBasedOn: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          posClosingEntry: true,
          postingDate: true,
          postingTime: true,
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