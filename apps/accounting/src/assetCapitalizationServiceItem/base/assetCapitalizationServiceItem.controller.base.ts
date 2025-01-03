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
import { AssetCapitalizationServiceItemService } from "../assetCapitalizationServiceItem.service";
import { AssetCapitalizationServiceItemCreateInput } from "./AssetCapitalizationServiceItemCreateInput";
import { AssetCapitalizationServiceItem } from "./AssetCapitalizationServiceItem";
import { AssetCapitalizationServiceItemFindManyArgs } from "./AssetCapitalizationServiceItemFindManyArgs";
import { AssetCapitalizationServiceItemWhereUniqueInput } from "./AssetCapitalizationServiceItemWhereUniqueInput";
import { AssetCapitalizationServiceItemUpdateInput } from "./AssetCapitalizationServiceItemUpdateInput";

export class AssetCapitalizationServiceItemControllerBase {
  constructor(
    protected readonly service: AssetCapitalizationServiceItemService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AssetCapitalizationServiceItem })
  async createAssetCapitalizationServiceItem(
    @common.Body() data: AssetCapitalizationServiceItemCreateInput
  ): Promise<AssetCapitalizationServiceItem> {
    return await this.service.createAssetCapitalizationServiceItem({
      data: data,
      select: {
        actualQty: true,
        amount: true,
        batchNo: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        expenseAccount: true,
        id: true,
        idx: true,
        itemCode: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        parentfield: true,
        parenttype: true,
        qty: true,
        rate: true,
        serialAndBatchBundle: true,
        serialNo: true,
        stockQty: true,
        stockUom: true,
        uom: true,
        updatedAt: true,
        useSerialBatchFields: true,
        valuationRate: true,
        warehouse: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AssetCapitalizationServiceItem] })
  @ApiNestedQuery(AssetCapitalizationServiceItemFindManyArgs)
  async assetCapitalizationServiceItems(
    @common.Req() request: Request
  ): Promise<AssetCapitalizationServiceItem[]> {
    const args = plainToClass(
      AssetCapitalizationServiceItemFindManyArgs,
      request.query
    );
    return this.service.assetCapitalizationServiceItems({
      ...args,
      select: {
        actualQty: true,
        amount: true,
        batchNo: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        expenseAccount: true,
        id: true,
        idx: true,
        itemCode: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        parentfield: true,
        parenttype: true,
        qty: true,
        rate: true,
        serialAndBatchBundle: true,
        serialNo: true,
        stockQty: true,
        stockUom: true,
        uom: true,
        updatedAt: true,
        useSerialBatchFields: true,
        valuationRate: true,
        warehouse: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AssetCapitalizationServiceItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async assetCapitalizationServiceItem(
    @common.Param() params: AssetCapitalizationServiceItemWhereUniqueInput
  ): Promise<AssetCapitalizationServiceItem | null> {
    const result = await this.service.assetCapitalizationServiceItem({
      where: params,
      select: {
        actualQty: true,
        amount: true,
        batchNo: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        expenseAccount: true,
        id: true,
        idx: true,
        itemCode: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        parentfield: true,
        parenttype: true,
        qty: true,
        rate: true,
        serialAndBatchBundle: true,
        serialNo: true,
        stockQty: true,
        stockUom: true,
        uom: true,
        updatedAt: true,
        useSerialBatchFields: true,
        valuationRate: true,
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
  @swagger.ApiOkResponse({ type: AssetCapitalizationServiceItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAssetCapitalizationServiceItem(
    @common.Param() params: AssetCapitalizationServiceItemWhereUniqueInput,
    @common.Body() data: AssetCapitalizationServiceItemUpdateInput
  ): Promise<AssetCapitalizationServiceItem | null> {
    try {
      return await this.service.updateAssetCapitalizationServiceItem({
        where: params,
        data: data,
        select: {
          actualQty: true,
          amount: true,
          batchNo: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          expenseAccount: true,
          id: true,
          idx: true,
          itemCode: true,
          itemName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentField: true,
          parentType: true,
          parentfield: true,
          parenttype: true,
          qty: true,
          rate: true,
          serialAndBatchBundle: true,
          serialNo: true,
          stockQty: true,
          stockUom: true,
          uom: true,
          updatedAt: true,
          useSerialBatchFields: true,
          valuationRate: true,
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
  @swagger.ApiOkResponse({ type: AssetCapitalizationServiceItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAssetCapitalizationServiceItem(
    @common.Param() params: AssetCapitalizationServiceItemWhereUniqueInput
  ): Promise<AssetCapitalizationServiceItem | null> {
    try {
      return await this.service.deleteAssetCapitalizationServiceItem({
        where: params,
        select: {
          actualQty: true,
          amount: true,
          batchNo: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          expenseAccount: true,
          id: true,
          idx: true,
          itemCode: true,
          itemName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentField: true,
          parentType: true,
          parentfield: true,
          parenttype: true,
          qty: true,
          rate: true,
          serialAndBatchBundle: true,
          serialNo: true,
          stockQty: true,
          stockUom: true,
          uom: true,
          updatedAt: true,
          useSerialBatchFields: true,
          valuationRate: true,
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
