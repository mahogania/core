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
import { PurchaseOrderItemSuppliedService } from "../purchaseOrderItemSupplied.service";
import { PurchaseOrderItemSuppliedCreateInput } from "./PurchaseOrderItemSuppliedCreateInput";
import { PurchaseOrderItemSupplied } from "./PurchaseOrderItemSupplied";
import { PurchaseOrderItemSuppliedFindManyArgs } from "./PurchaseOrderItemSuppliedFindManyArgs";
import { PurchaseOrderItemSuppliedWhereUniqueInput } from "./PurchaseOrderItemSuppliedWhereUniqueInput";
import { PurchaseOrderItemSuppliedUpdateInput } from "./PurchaseOrderItemSuppliedUpdateInput";

export class PurchaseOrderItemSuppliedControllerBase {
  constructor(protected readonly service: PurchaseOrderItemSuppliedService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PurchaseOrderItemSupplied })
  async createPurchaseOrderItemSupplied(
    @common.Body() data: PurchaseOrderItemSuppliedCreateInput
  ): Promise<PurchaseOrderItemSupplied> {
    return await this.service.createPurchaseOrderItemSupplied({
      data: data,
      select: {
        amount: true,
        bomDetailNo: true,
        consumedQty: true,
        conversionFactor: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        mainItemCode: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        rate: true,
        referenceName: true,
        requiredQty: true,
        reserveWarehouse: true,
        returnedQty: true,
        rmItemCode: true,
        stockUom: true,
        suppliedQty: true,
        totalSuppliedQty: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PurchaseOrderItemSupplied] })
  @ApiNestedQuery(PurchaseOrderItemSuppliedFindManyArgs)
  async purchaseOrderItemSupplieds(
    @common.Req() request: Request
  ): Promise<PurchaseOrderItemSupplied[]> {
    const args = plainToClass(
      PurchaseOrderItemSuppliedFindManyArgs,
      request.query
    );
    return this.service.purchaseOrderItemSupplieds({
      ...args,
      select: {
        amount: true,
        bomDetailNo: true,
        consumedQty: true,
        conversionFactor: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        mainItemCode: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        rate: true,
        referenceName: true,
        requiredQty: true,
        reserveWarehouse: true,
        returnedQty: true,
        rmItemCode: true,
        stockUom: true,
        suppliedQty: true,
        totalSuppliedQty: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PurchaseOrderItemSupplied })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async purchaseOrderItemSupplied(
    @common.Param() params: PurchaseOrderItemSuppliedWhereUniqueInput
  ): Promise<PurchaseOrderItemSupplied | null> {
    const result = await this.service.purchaseOrderItemSupplied({
      where: params,
      select: {
        amount: true,
        bomDetailNo: true,
        consumedQty: true,
        conversionFactor: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        mainItemCode: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        rate: true,
        referenceName: true,
        requiredQty: true,
        reserveWarehouse: true,
        returnedQty: true,
        rmItemCode: true,
        stockUom: true,
        suppliedQty: true,
        totalSuppliedQty: true,
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
  @swagger.ApiOkResponse({ type: PurchaseOrderItemSupplied })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePurchaseOrderItemSupplied(
    @common.Param() params: PurchaseOrderItemSuppliedWhereUniqueInput,
    @common.Body() data: PurchaseOrderItemSuppliedUpdateInput
  ): Promise<PurchaseOrderItemSupplied | null> {
    try {
      return await this.service.updatePurchaseOrderItemSupplied({
        where: params,
        data: data,
        select: {
          amount: true,
          bomDetailNo: true,
          consumedQty: true,
          conversionFactor: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          mainItemCode: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentField: true,
          parentType: true,
          rate: true,
          referenceName: true,
          requiredQty: true,
          reserveWarehouse: true,
          returnedQty: true,
          rmItemCode: true,
          stockUom: true,
          suppliedQty: true,
          totalSuppliedQty: true,
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
  @swagger.ApiOkResponse({ type: PurchaseOrderItemSupplied })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePurchaseOrderItemSupplied(
    @common.Param() params: PurchaseOrderItemSuppliedWhereUniqueInput
  ): Promise<PurchaseOrderItemSupplied | null> {
    try {
      return await this.service.deletePurchaseOrderItemSupplied({
        where: params,
        select: {
          amount: true,
          bomDetailNo: true,
          consumedQty: true,
          conversionFactor: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          mainItemCode: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentField: true,
          parentType: true,
          rate: true,
          referenceName: true,
          requiredQty: true,
          reserveWarehouse: true,
          returnedQty: true,
          rmItemCode: true,
          stockUom: true,
          suppliedQty: true,
          totalSuppliedQty: true,
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