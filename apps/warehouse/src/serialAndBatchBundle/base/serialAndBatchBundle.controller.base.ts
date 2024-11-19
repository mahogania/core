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
import { SerialAndBatchBundleService } from "../serialAndBatchBundle.service";
import { SerialAndBatchBundleCreateInput } from "./SerialAndBatchBundleCreateInput";
import { SerialAndBatchBundle } from "./SerialAndBatchBundle";
import { SerialAndBatchBundleFindManyArgs } from "./SerialAndBatchBundleFindManyArgs";
import { SerialAndBatchBundleWhereUniqueInput } from "./SerialAndBatchBundleWhereUniqueInput";
import { SerialAndBatchBundleUpdateInput } from "./SerialAndBatchBundleUpdateInput";

export class SerialAndBatchBundleControllerBase {
  constructor(protected readonly service: SerialAndBatchBundleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SerialAndBatchBundle })
  async createSerialAndBatchBundle(
    @common.Body() data: SerialAndBatchBundleCreateInput
  ): Promise<SerialAndBatchBundle> {
    return await this.service.createSerialAndBatchBundle({
      data: data,
      select: {
        amendedFrom: true,
        avgRate: true,
        company: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        hasBatchNo: true,
        hasSerialNo: true,
        id: true,
        idx: true,
        isCancelled: true,
        isRejected: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        postingDate: true,
        postingTime: true,
        returnedAgainst: true,
        totalAmount: true,
        totalQty: true,
        typeOfTransaction: true,
        updatedAt: true,
        voucherDetailNo: true,
        voucherNo: true,
        voucherType: true,
        warehouse: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SerialAndBatchBundle] })
  @ApiNestedQuery(SerialAndBatchBundleFindManyArgs)
  async serialAndBatchBundles(
    @common.Req() request: Request
  ): Promise<SerialAndBatchBundle[]> {
    const args = plainToClass(SerialAndBatchBundleFindManyArgs, request.query);
    return this.service.serialAndBatchBundles({
      ...args,
      select: {
        amendedFrom: true,
        avgRate: true,
        company: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        hasBatchNo: true,
        hasSerialNo: true,
        id: true,
        idx: true,
        isCancelled: true,
        isRejected: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        postingDate: true,
        postingTime: true,
        returnedAgainst: true,
        totalAmount: true,
        totalQty: true,
        typeOfTransaction: true,
        updatedAt: true,
        voucherDetailNo: true,
        voucherNo: true,
        voucherType: true,
        warehouse: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SerialAndBatchBundle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async serialAndBatchBundle(
    @common.Param() params: SerialAndBatchBundleWhereUniqueInput
  ): Promise<SerialAndBatchBundle | null> {
    const result = await this.service.serialAndBatchBundle({
      where: params,
      select: {
        amendedFrom: true,
        avgRate: true,
        company: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        hasBatchNo: true,
        hasSerialNo: true,
        id: true,
        idx: true,
        isCancelled: true,
        isRejected: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        postingDate: true,
        postingTime: true,
        returnedAgainst: true,
        totalAmount: true,
        totalQty: true,
        typeOfTransaction: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: SerialAndBatchBundle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSerialAndBatchBundle(
    @common.Param() params: SerialAndBatchBundleWhereUniqueInput,
    @common.Body() data: SerialAndBatchBundleUpdateInput
  ): Promise<SerialAndBatchBundle | null> {
    try {
      return await this.service.updateSerialAndBatchBundle({
        where: params,
        data: data,
        select: {
          amendedFrom: true,
          avgRate: true,
          company: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          hasBatchNo: true,
          hasSerialNo: true,
          id: true,
          idx: true,
          isCancelled: true,
          isRejected: true,
          itemCode: true,
          itemGroup: true,
          itemName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namingSeries: true,
          owner: true,
          postingDate: true,
          postingTime: true,
          returnedAgainst: true,
          totalAmount: true,
          totalQty: true,
          typeOfTransaction: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: SerialAndBatchBundle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSerialAndBatchBundle(
    @common.Param() params: SerialAndBatchBundleWhereUniqueInput
  ): Promise<SerialAndBatchBundle | null> {
    try {
      return await this.service.deleteSerialAndBatchBundle({
        where: params,
        select: {
          amendedFrom: true,
          avgRate: true,
          company: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          hasBatchNo: true,
          hasSerialNo: true,
          id: true,
          idx: true,
          isCancelled: true,
          isRejected: true,
          itemCode: true,
          itemGroup: true,
          itemName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namingSeries: true,
          owner: true,
          postingDate: true,
          postingTime: true,
          returnedAgainst: true,
          totalAmount: true,
          totalQty: true,
          typeOfTransaction: true,
          updatedAt: true,
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
