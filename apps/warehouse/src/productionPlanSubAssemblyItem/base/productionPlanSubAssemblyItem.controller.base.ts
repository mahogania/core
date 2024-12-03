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
import { ProductionPlanSubAssemblyItemService } from "../productionPlanSubAssemblyItem.service";
import { ProductionPlanSubAssemblyItemCreateInput } from "./ProductionPlanSubAssemblyItemCreateInput";
import { ProductionPlanSubAssemblyItem } from "./ProductionPlanSubAssemblyItem";
import { ProductionPlanSubAssemblyItemFindManyArgs } from "./ProductionPlanSubAssemblyItemFindManyArgs";
import { ProductionPlanSubAssemblyItemWhereUniqueInput } from "./ProductionPlanSubAssemblyItemWhereUniqueInput";
import { ProductionPlanSubAssemblyItemUpdateInput } from "./ProductionPlanSubAssemblyItemUpdateInput";

export class ProductionPlanSubAssemblyItemControllerBase {
  constructor(
    protected readonly service: ProductionPlanSubAssemblyItemService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProductionPlanSubAssemblyItem })
  async createProductionPlanSubAssemblyItem(
    @common.Body() data: ProductionPlanSubAssemblyItemCreateInput
  ): Promise<ProductionPlanSubAssemblyItem> {
    return await this.service.createProductionPlanSubAssemblyItem({
      data: data,
      select: {
        actualQty: true,
        bomLevel: true,
        bomNo: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        fgWarehouse: true,
        id: true,
        idx: true,
        indent: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentItemCode: true,
        parentfield: true,
        parenttype: true,
        productionItem: true,
        productionPlanItem: true,
        projectedQty: true,
        purchaseOrder: true,
        qty: true,
        receivedQty: true,
        scheduleDate: true,
        stockUom: true,
        supplier: true,
        typeOfManufacturing: true,
        uom: true,
        updatedAt: true,
        woProducedQty: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProductionPlanSubAssemblyItem] })
  @ApiNestedQuery(ProductionPlanSubAssemblyItemFindManyArgs)
  async productionPlanSubAssemblyItems(
    @common.Req() request: Request
  ): Promise<ProductionPlanSubAssemblyItem[]> {
    const args = plainToClass(
      ProductionPlanSubAssemblyItemFindManyArgs,
      request.query
    );
    return this.service.productionPlanSubAssemblyItems({
      ...args,
      select: {
        actualQty: true,
        bomLevel: true,
        bomNo: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        fgWarehouse: true,
        id: true,
        idx: true,
        indent: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentItemCode: true,
        parentfield: true,
        parenttype: true,
        productionItem: true,
        productionPlanItem: true,
        projectedQty: true,
        purchaseOrder: true,
        qty: true,
        receivedQty: true,
        scheduleDate: true,
        stockUom: true,
        supplier: true,
        typeOfManufacturing: true,
        uom: true,
        updatedAt: true,
        woProducedQty: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProductionPlanSubAssemblyItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async productionPlanSubAssemblyItem(
    @common.Param() params: ProductionPlanSubAssemblyItemWhereUniqueInput
  ): Promise<ProductionPlanSubAssemblyItem | null> {
    const result = await this.service.productionPlanSubAssemblyItem({
      where: params,
      select: {
        actualQty: true,
        bomLevel: true,
        bomNo: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        fgWarehouse: true,
        id: true,
        idx: true,
        indent: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentItemCode: true,
        parentfield: true,
        parenttype: true,
        productionItem: true,
        productionPlanItem: true,
        projectedQty: true,
        purchaseOrder: true,
        qty: true,
        receivedQty: true,
        scheduleDate: true,
        stockUom: true,
        supplier: true,
        typeOfManufacturing: true,
        uom: true,
        updatedAt: true,
        woProducedQty: true,
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
  @swagger.ApiOkResponse({ type: ProductionPlanSubAssemblyItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProductionPlanSubAssemblyItem(
    @common.Param() params: ProductionPlanSubAssemblyItemWhereUniqueInput,
    @common.Body() data: ProductionPlanSubAssemblyItemUpdateInput
  ): Promise<ProductionPlanSubAssemblyItem | null> {
    try {
      return await this.service.updateProductionPlanSubAssemblyItem({
        where: params,
        data: data,
        select: {
          actualQty: true,
          bomLevel: true,
          bomNo: true,
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          fgWarehouse: true,
          id: true,
          idx: true,
          indent: true,
          itemName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentItemCode: true,
          parentfield: true,
          parenttype: true,
          productionItem: true,
          productionPlanItem: true,
          projectedQty: true,
          purchaseOrder: true,
          qty: true,
          receivedQty: true,
          scheduleDate: true,
          stockUom: true,
          supplier: true,
          typeOfManufacturing: true,
          uom: true,
          updatedAt: true,
          woProducedQty: true,
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
  @swagger.ApiOkResponse({ type: ProductionPlanSubAssemblyItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProductionPlanSubAssemblyItem(
    @common.Param() params: ProductionPlanSubAssemblyItemWhereUniqueInput
  ): Promise<ProductionPlanSubAssemblyItem | null> {
    try {
      return await this.service.deleteProductionPlanSubAssemblyItem({
        where: params,
        select: {
          actualQty: true,
          bomLevel: true,
          bomNo: true,
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          fgWarehouse: true,
          id: true,
          idx: true,
          indent: true,
          itemName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentItemCode: true,
          parentfield: true,
          parenttype: true,
          productionItem: true,
          productionPlanItem: true,
          projectedQty: true,
          purchaseOrder: true,
          qty: true,
          receivedQty: true,
          scheduleDate: true,
          stockUom: true,
          supplier: true,
          typeOfManufacturing: true,
          uom: true,
          updatedAt: true,
          woProducedQty: true,
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
