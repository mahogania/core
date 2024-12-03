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
import { StockLedgerEntryService } from "../stockLedgerEntry.service";
import { StockLedgerEntryCreateInput } from "./StockLedgerEntryCreateInput";
import { StockLedgerEntry } from "./StockLedgerEntry";
import { StockLedgerEntryFindManyArgs } from "./StockLedgerEntryFindManyArgs";
import { StockLedgerEntryWhereUniqueInput } from "./StockLedgerEntryWhereUniqueInput";
import { StockLedgerEntryUpdateInput } from "./StockLedgerEntryUpdateInput";

export class StockLedgerEntryControllerBase {
  constructor(protected readonly service: StockLedgerEntryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StockLedgerEntry })
  async createStockLedgerEntry(
    @common.Body() data: StockLedgerEntryCreateInput
  ): Promise<StockLedgerEntry> {
    return await this.service.createStockLedgerEntry({
      data: data,
      select: {
        actualQty: true,
        autoCreatedSerialAndBatchBundle: true,
        batchNo: true,
        company: true,
        createdAt: true,
        creation: true,
        dependantSleVoucherDetailNo: true,
        docstatus: true,
        fiscalYear: true,
        hasBatchNo: true,
        hasSerialNo: true,
        id: true,
        idx: true,
        incomingRate: true,
        isAdjustmentEntry: true,
        isCancelled: true,
        itemCode: true,
        modified: true,
        modifiedBy: true,
        name: true,
        outgoingRate: true,
        owner: true,
        postingDate: true,
        postingDatetime: true,
        postingTime: true,
        project: true,
        qtyAfterTransaction: true,
        recalculateRate: true,
        serialAndBatchBundle: true,
        serialNo: true,
        stockQueue: true,
        stockUom: true,
        stockValue: true,
        stockValueDifference: true,
        toRename: true,
        updatedAt: true,
        valuationRate: true,
        voucherDetailNo: true,
        voucherNo: true,
        voucherType: true,
        warehouse: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [StockLedgerEntry] })
  @ApiNestedQuery(StockLedgerEntryFindManyArgs)
  async stockLedgerEntries(
    @common.Req() request: Request
  ): Promise<StockLedgerEntry[]> {
    const args = plainToClass(StockLedgerEntryFindManyArgs, request.query);
    return this.service.stockLedgerEntries({
      ...args,
      select: {
        actualQty: true,
        autoCreatedSerialAndBatchBundle: true,
        batchNo: true,
        company: true,
        createdAt: true,
        creation: true,
        dependantSleVoucherDetailNo: true,
        docstatus: true,
        fiscalYear: true,
        hasBatchNo: true,
        hasSerialNo: true,
        id: true,
        idx: true,
        incomingRate: true,
        isAdjustmentEntry: true,
        isCancelled: true,
        itemCode: true,
        modified: true,
        modifiedBy: true,
        name: true,
        outgoingRate: true,
        owner: true,
        postingDate: true,
        postingDatetime: true,
        postingTime: true,
        project: true,
        qtyAfterTransaction: true,
        recalculateRate: true,
        serialAndBatchBundle: true,
        serialNo: true,
        stockQueue: true,
        stockUom: true,
        stockValue: true,
        stockValueDifference: true,
        toRename: true,
        updatedAt: true,
        valuationRate: true,
        voucherDetailNo: true,
        voucherNo: true,
        voucherType: true,
        warehouse: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: StockLedgerEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async stockLedgerEntry(
    @common.Param() params: StockLedgerEntryWhereUniqueInput
  ): Promise<StockLedgerEntry | null> {
    const result = await this.service.stockLedgerEntry({
      where: params,
      select: {
        actualQty: true,
        autoCreatedSerialAndBatchBundle: true,
        batchNo: true,
        company: true,
        createdAt: true,
        creation: true,
        dependantSleVoucherDetailNo: true,
        docstatus: true,
        fiscalYear: true,
        hasBatchNo: true,
        hasSerialNo: true,
        id: true,
        idx: true,
        incomingRate: true,
        isAdjustmentEntry: true,
        isCancelled: true,
        itemCode: true,
        modified: true,
        modifiedBy: true,
        name: true,
        outgoingRate: true,
        owner: true,
        postingDate: true,
        postingDatetime: true,
        postingTime: true,
        project: true,
        qtyAfterTransaction: true,
        recalculateRate: true,
        serialAndBatchBundle: true,
        serialNo: true,
        stockQueue: true,
        stockUom: true,
        stockValue: true,
        stockValueDifference: true,
        toRename: true,
        updatedAt: true,
        valuationRate: true,
        voucherDetailNo: true,
        voucherNo: true,
        voucherType: true,
        warehouse: true,
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
  @swagger.ApiOkResponse({ type: StockLedgerEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStockLedgerEntry(
    @common.Param() params: StockLedgerEntryWhereUniqueInput,
    @common.Body() data: StockLedgerEntryUpdateInput
  ): Promise<StockLedgerEntry | null> {
    try {
      return await this.service.updateStockLedgerEntry({
        where: params,
        data: data,
        select: {
          actualQty: true,
          autoCreatedSerialAndBatchBundle: true,
          batchNo: true,
          company: true,
          createdAt: true,
          creation: true,
          dependantSleVoucherDetailNo: true,
          docstatus: true,
          fiscalYear: true,
          hasBatchNo: true,
          hasSerialNo: true,
          id: true,
          idx: true,
          incomingRate: true,
          isAdjustmentEntry: true,
          isCancelled: true,
          itemCode: true,
          modified: true,
          modifiedBy: true,
          name: true,
          outgoingRate: true,
          owner: true,
          postingDate: true,
          postingDatetime: true,
          postingTime: true,
          project: true,
          qtyAfterTransaction: true,
          recalculateRate: true,
          serialAndBatchBundle: true,
          serialNo: true,
          stockQueue: true,
          stockUom: true,
          stockValue: true,
          stockValueDifference: true,
          toRename: true,
          updatedAt: true,
          valuationRate: true,
          voucherDetailNo: true,
          voucherNo: true,
          voucherType: true,
          warehouse: true,
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
  @swagger.ApiOkResponse({ type: StockLedgerEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStockLedgerEntry(
    @common.Param() params: StockLedgerEntryWhereUniqueInput
  ): Promise<StockLedgerEntry | null> {
    try {
      return await this.service.deleteStockLedgerEntry({
        where: params,
        select: {
          actualQty: true,
          autoCreatedSerialAndBatchBundle: true,
          batchNo: true,
          company: true,
          createdAt: true,
          creation: true,
          dependantSleVoucherDetailNo: true,
          docstatus: true,
          fiscalYear: true,
          hasBatchNo: true,
          hasSerialNo: true,
          id: true,
          idx: true,
          incomingRate: true,
          isAdjustmentEntry: true,
          isCancelled: true,
          itemCode: true,
          modified: true,
          modifiedBy: true,
          name: true,
          outgoingRate: true,
          owner: true,
          postingDate: true,
          postingDatetime: true,
          postingTime: true,
          project: true,
          qtyAfterTransaction: true,
          recalculateRate: true,
          serialAndBatchBundle: true,
          serialNo: true,
          stockQueue: true,
          stockUom: true,
          stockValue: true,
          stockValueDifference: true,
          toRename: true,
          updatedAt: true,
          valuationRate: true,
          voucherDetailNo: true,
          voucherNo: true,
          voucherType: true,
          warehouse: true,
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
