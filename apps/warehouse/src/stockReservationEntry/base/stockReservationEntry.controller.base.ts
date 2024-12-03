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
import { StockReservationEntryService } from "../stockReservationEntry.service";
import { StockReservationEntryCreateInput } from "./StockReservationEntryCreateInput";
import { StockReservationEntry } from "./StockReservationEntry";
import { StockReservationEntryFindManyArgs } from "./StockReservationEntryFindManyArgs";
import { StockReservationEntryWhereUniqueInput } from "./StockReservationEntryWhereUniqueInput";
import { StockReservationEntryUpdateInput } from "./StockReservationEntryUpdateInput";

export class StockReservationEntryControllerBase {
  constructor(protected readonly service: StockReservationEntryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StockReservationEntry })
  async createStockReservationEntry(
    @common.Body() data: StockReservationEntryCreateInput
  ): Promise<StockReservationEntry> {
    return await this.service.createStockReservationEntry({
      data: data,
      select: {
        amendedFrom: true,
        availableQty: true,
        company: true,
        createdAt: true,
        creation: true,
        deliveredQty: true,
        docstatus: true,
        fromVoucherDetailNo: true,
        fromVoucherNo: true,
        fromVoucherType: true,
        hasBatchNo: true,
        hasSerialNo: true,
        id: true,
        idx: true,
        itemCode: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        project: true,
        reservationBasedOn: true,
        reservedQty: true,
        status: true,
        stockUom: true,
        updatedAt: true,
        voucherDetailNo: true,
        voucherNo: true,
        voucherQty: true,
        voucherType: true,
        warehouse: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [StockReservationEntry] })
  @ApiNestedQuery(StockReservationEntryFindManyArgs)
  async stockReservationEntries(
    @common.Req() request: Request
  ): Promise<StockReservationEntry[]> {
    const args = plainToClass(StockReservationEntryFindManyArgs, request.query);
    return this.service.stockReservationEntries({
      ...args,
      select: {
        amendedFrom: true,
        availableQty: true,
        company: true,
        createdAt: true,
        creation: true,
        deliveredQty: true,
        docstatus: true,
        fromVoucherDetailNo: true,
        fromVoucherNo: true,
        fromVoucherType: true,
        hasBatchNo: true,
        hasSerialNo: true,
        id: true,
        idx: true,
        itemCode: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        project: true,
        reservationBasedOn: true,
        reservedQty: true,
        status: true,
        stockUom: true,
        updatedAt: true,
        voucherDetailNo: true,
        voucherNo: true,
        voucherQty: true,
        voucherType: true,
        warehouse: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: StockReservationEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async stockReservationEntry(
    @common.Param() params: StockReservationEntryWhereUniqueInput
  ): Promise<StockReservationEntry | null> {
    const result = await this.service.stockReservationEntry({
      where: params,
      select: {
        amendedFrom: true,
        availableQty: true,
        company: true,
        createdAt: true,
        creation: true,
        deliveredQty: true,
        docstatus: true,
        fromVoucherDetailNo: true,
        fromVoucherNo: true,
        fromVoucherType: true,
        hasBatchNo: true,
        hasSerialNo: true,
        id: true,
        idx: true,
        itemCode: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        project: true,
        reservationBasedOn: true,
        reservedQty: true,
        status: true,
        stockUom: true,
        updatedAt: true,
        voucherDetailNo: true,
        voucherNo: true,
        voucherQty: true,
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
  @swagger.ApiOkResponse({ type: StockReservationEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStockReservationEntry(
    @common.Param() params: StockReservationEntryWhereUniqueInput,
    @common.Body() data: StockReservationEntryUpdateInput
  ): Promise<StockReservationEntry | null> {
    try {
      return await this.service.updateStockReservationEntry({
        where: params,
        data: data,
        select: {
          amendedFrom: true,
          availableQty: true,
          company: true,
          createdAt: true,
          creation: true,
          deliveredQty: true,
          docstatus: true,
          fromVoucherDetailNo: true,
          fromVoucherNo: true,
          fromVoucherType: true,
          hasBatchNo: true,
          hasSerialNo: true,
          id: true,
          idx: true,
          itemCode: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          project: true,
          reservationBasedOn: true,
          reservedQty: true,
          status: true,
          stockUom: true,
          updatedAt: true,
          voucherDetailNo: true,
          voucherNo: true,
          voucherQty: true,
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
  @swagger.ApiOkResponse({ type: StockReservationEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStockReservationEntry(
    @common.Param() params: StockReservationEntryWhereUniqueInput
  ): Promise<StockReservationEntry | null> {
    try {
      return await this.service.deleteStockReservationEntry({
        where: params,
        select: {
          amendedFrom: true,
          availableQty: true,
          company: true,
          createdAt: true,
          creation: true,
          deliveredQty: true,
          docstatus: true,
          fromVoucherDetailNo: true,
          fromVoucherNo: true,
          fromVoucherType: true,
          hasBatchNo: true,
          hasSerialNo: true,
          id: true,
          idx: true,
          itemCode: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          project: true,
          reservationBasedOn: true,
          reservedQty: true,
          status: true,
          stockUom: true,
          updatedAt: true,
          voucherDetailNo: true,
          voucherNo: true,
          voucherQty: true,
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
