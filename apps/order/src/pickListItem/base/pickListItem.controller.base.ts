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
import { PickListItemService } from "../pickListItem.service";
import { PickListItemCreateInput } from "./PickListItemCreateInput";
import { PickListItem } from "./PickListItem";
import { PickListItemFindManyArgs } from "./PickListItemFindManyArgs";
import { PickListItemWhereUniqueInput } from "./PickListItemWhereUniqueInput";
import { PickListItemUpdateInput } from "./PickListItemUpdateInput";

export class PickListItemControllerBase {
  constructor(protected readonly service: PickListItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PickListItem })
  async createPickListItem(
    @common.Body() data: PickListItemCreateInput
  ): Promise<PickListItem> {
    return await this.service.createPickListItem({
      data: data,
      select: {
        batchNo: true,
        conversionFactor: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        id: true,
        idx: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        materialRequest: true,
        materialRequestItem: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        pickedQty: true,
        productBundleItem: true,
        qty: true,
        salesOrder: true,
        salesOrderItem: true,
        serialAndBatchBundle: true,
        serialNo: true,
        stockQty: true,
        stockReservedQty: true,
        stockUom: true,
        uom: true,
        updatedAt: true,
        useSerialBatchFields: true,
        warehouse: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PickListItem] })
  @ApiNestedQuery(PickListItemFindManyArgs)
  async pickListItems(@common.Req() request: Request): Promise<PickListItem[]> {
    const args = plainToClass(PickListItemFindManyArgs, request.query);
    return this.service.pickListItems({
      ...args,
      select: {
        batchNo: true,
        conversionFactor: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        id: true,
        idx: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        materialRequest: true,
        materialRequestItem: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        pickedQty: true,
        productBundleItem: true,
        qty: true,
        salesOrder: true,
        salesOrderItem: true,
        serialAndBatchBundle: true,
        serialNo: true,
        stockQty: true,
        stockReservedQty: true,
        stockUom: true,
        uom: true,
        updatedAt: true,
        useSerialBatchFields: true,
        warehouse: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PickListItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async pickListItem(
    @common.Param() params: PickListItemWhereUniqueInput
  ): Promise<PickListItem | null> {
    const result = await this.service.pickListItem({
      where: params,
      select: {
        batchNo: true,
        conversionFactor: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        id: true,
        idx: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        materialRequest: true,
        materialRequestItem: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        pickedQty: true,
        productBundleItem: true,
        qty: true,
        salesOrder: true,
        salesOrderItem: true,
        serialAndBatchBundle: true,
        serialNo: true,
        stockQty: true,
        stockReservedQty: true,
        stockUom: true,
        uom: true,
        updatedAt: true,
        useSerialBatchFields: true,
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
  @swagger.ApiOkResponse({ type: PickListItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePickListItem(
    @common.Param() params: PickListItemWhereUniqueInput,
    @common.Body() data: PickListItemUpdateInput
  ): Promise<PickListItem | null> {
    try {
      return await this.service.updatePickListItem({
        where: params,
        data: data,
        select: {
          batchNo: true,
          conversionFactor: true,
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          id: true,
          idx: true,
          itemCode: true,
          itemGroup: true,
          itemName: true,
          materialRequest: true,
          materialRequestItem: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          pickedQty: true,
          productBundleItem: true,
          qty: true,
          salesOrder: true,
          salesOrderItem: true,
          serialAndBatchBundle: true,
          serialNo: true,
          stockQty: true,
          stockReservedQty: true,
          stockUom: true,
          uom: true,
          updatedAt: true,
          useSerialBatchFields: true,
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
  @swagger.ApiOkResponse({ type: PickListItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePickListItem(
    @common.Param() params: PickListItemWhereUniqueInput
  ): Promise<PickListItem | null> {
    try {
      return await this.service.deletePickListItem({
        where: params,
        select: {
          batchNo: true,
          conversionFactor: true,
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          id: true,
          idx: true,
          itemCode: true,
          itemGroup: true,
          itemName: true,
          materialRequest: true,
          materialRequestItem: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          pickedQty: true,
          productBundleItem: true,
          qty: true,
          salesOrder: true,
          salesOrderItem: true,
          serialAndBatchBundle: true,
          serialNo: true,
          stockQty: true,
          stockReservedQty: true,
          stockUom: true,
          uom: true,
          updatedAt: true,
          useSerialBatchFields: true,
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
