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
import { BomExplosionItemService } from "../bomExplosionItem.service";
import { BomExplosionItemCreateInput } from "./BomExplosionItemCreateInput";
import { BomExplosionItem } from "./BomExplosionItem";
import { BomExplosionItemFindManyArgs } from "./BomExplosionItemFindManyArgs";
import { BomExplosionItemWhereUniqueInput } from "./BomExplosionItemWhereUniqueInput";
import { BomExplosionItemUpdateInput } from "./BomExplosionItemUpdateInput";

export class BomExplosionItemControllerBase {
  constructor(protected readonly service: BomExplosionItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BomExplosionItem })
  async createBomExplosionItem(
    @common.Body() data: BomExplosionItemCreateInput
  ): Promise<BomExplosionItem> {
    return await this.service.createBomExplosionItem({
      data: data,
      select: {
        amount: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        id: true,
        idx: true,
        image: true,
        includeItemInManufacturing: true,
        itemCode: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        operation: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        qtyConsumedPerUnit: true,
        rate: true,
        sourceWarehouse: true,
        sourcedBySupplier: true,
        stockQty: true,
        stockUom: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BomExplosionItem] })
  @ApiNestedQuery(BomExplosionItemFindManyArgs)
  async bomExplosionItems(
    @common.Req() request: Request
  ): Promise<BomExplosionItem[]> {
    const args = plainToClass(BomExplosionItemFindManyArgs, request.query);
    return this.service.bomExplosionItems({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        id: true,
        idx: true,
        image: true,
        includeItemInManufacturing: true,
        itemCode: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        operation: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        qtyConsumedPerUnit: true,
        rate: true,
        sourceWarehouse: true,
        sourcedBySupplier: true,
        stockQty: true,
        stockUom: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BomExplosionItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async bomExplosionItem(
    @common.Param() params: BomExplosionItemWhereUniqueInput
  ): Promise<BomExplosionItem | null> {
    const result = await this.service.bomExplosionItem({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        id: true,
        idx: true,
        image: true,
        includeItemInManufacturing: true,
        itemCode: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        operation: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        qtyConsumedPerUnit: true,
        rate: true,
        sourceWarehouse: true,
        sourcedBySupplier: true,
        stockQty: true,
        stockUom: true,
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
  @swagger.ApiOkResponse({ type: BomExplosionItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBomExplosionItem(
    @common.Param() params: BomExplosionItemWhereUniqueInput,
    @common.Body() data: BomExplosionItemUpdateInput
  ): Promise<BomExplosionItem | null> {
    try {
      return await this.service.updateBomExplosionItem({
        where: params,
        data: data,
        select: {
          amount: true,
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          id: true,
          idx: true,
          image: true,
          includeItemInManufacturing: true,
          itemCode: true,
          itemName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          operation: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          qtyConsumedPerUnit: true,
          rate: true,
          sourceWarehouse: true,
          sourcedBySupplier: true,
          stockQty: true,
          stockUom: true,
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
  @swagger.ApiOkResponse({ type: BomExplosionItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBomExplosionItem(
    @common.Param() params: BomExplosionItemWhereUniqueInput
  ): Promise<BomExplosionItem | null> {
    try {
      return await this.service.deleteBomExplosionItem({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          id: true,
          idx: true,
          image: true,
          includeItemInManufacturing: true,
          itemCode: true,
          itemName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          operation: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          qtyConsumedPerUnit: true,
          rate: true,
          sourceWarehouse: true,
          sourcedBySupplier: true,
          stockQty: true,
          stockUom: true,
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
