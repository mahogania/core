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
import { PurchaseOrderItemService } from "../purchaseOrderItem.service";
import { PurchaseOrderItemCreateInput } from "./PurchaseOrderItemCreateInput";
import { PurchaseOrderItem } from "./PurchaseOrderItem";
import { PurchaseOrderItemFindManyArgs } from "./PurchaseOrderItemFindManyArgs";
import { PurchaseOrderItemWhereUniqueInput } from "./PurchaseOrderItemWhereUniqueInput";
import { PurchaseOrderItemUpdateInput } from "./PurchaseOrderItemUpdateInput";

export class PurchaseOrderItemControllerBase {
  constructor(protected readonly service: PurchaseOrderItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PurchaseOrderItem })
  async createPurchaseOrderItem(
    @common.Body() data: PurchaseOrderItemCreateInput
  ): Promise<PurchaseOrderItem> {
    return await this.service.createPurchaseOrderItem({
      data: data,
      select: {
        actualQty: true,
        againstBlanketOrder: true,
        amount: true,
        applyTds: true,
        baseAmount: true,
        baseNetAmount: true,
        baseNetRate: true,
        basePriceListRate: true,
        baseRate: true,
        baseRateWithMargin: true,
        billedAmt: true,
        blanketOrder: true,
        blanketOrderRate: true,
        bom: true,
        brand: true,
        companyTotalStock: true,
        conversionFactor: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        deliveredBySupplier: true,
        description: true,
        discountAmount: true,
        discountPercentage: true,
        docstatus: true,
        expectedDeliveryDate: true,
        expenseAccount: true,
        fgItem: true,
        fgItemQty: true,
        fromWarehouse: true,
        id: true,
        idx: true,
        image: true,
        includeExplodedItems: true,
        isFixedAsset: true,
        isFreeItem: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        itemTaxRate: true,
        itemTaxTemplate: true,
        lastPurchaseRate: true,
        manufacturer: true,
        manufacturerPartNo: true,
        marginRateOrAmount: true,
        marginType: true,
        materialRequest: true,
        materialRequestItem: true,
        modified: true,
        modifiedBy: true,
        name: true,
        netAmount: true,
        netRate: true,
        owner: true,
        pageBreak: true,
        parent: true,
        parentField: true,
        parentType: true,
        priceListRate: true,
        pricingRules: true,
        productBundle: true,
        productionPlan: true,
        productionPlanItem: true,
        productionPlanSubAssemblyItem: true,
        project: true,
        qty: true,
        rate: true,
        rateWithMargin: true,
        receivedQty: true,
        returnedQty: true,
        salesOrder: true,
        salesOrderItem: true,
        salesOrderPackedItem: true,
        scheduleDate: true,
        stockQty: true,
        stockUom: true,
        stockUomRate: true,
        supplierPartNo: true,
        supplierQuotation: true,
        supplierQuotationItem: true,
        totalWeight: true,
        uom: true,
        updatedAt: true,
        warehouse: true,
        weightPerUnit: true,
        weightUom: true,
        wipCompositeAsset: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PurchaseOrderItem] })
  @ApiNestedQuery(PurchaseOrderItemFindManyArgs)
  async purchaseOrderItems(
    @common.Req() request: Request
  ): Promise<PurchaseOrderItem[]> {
    const args = plainToClass(PurchaseOrderItemFindManyArgs, request.query);
    return this.service.purchaseOrderItems({
      ...args,
      select: {
        actualQty: true,
        againstBlanketOrder: true,
        amount: true,
        applyTds: true,
        baseAmount: true,
        baseNetAmount: true,
        baseNetRate: true,
        basePriceListRate: true,
        baseRate: true,
        baseRateWithMargin: true,
        billedAmt: true,
        blanketOrder: true,
        blanketOrderRate: true,
        bom: true,
        brand: true,
        companyTotalStock: true,
        conversionFactor: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        deliveredBySupplier: true,
        description: true,
        discountAmount: true,
        discountPercentage: true,
        docstatus: true,
        expectedDeliveryDate: true,
        expenseAccount: true,
        fgItem: true,
        fgItemQty: true,
        fromWarehouse: true,
        id: true,
        idx: true,
        image: true,
        includeExplodedItems: true,
        isFixedAsset: true,
        isFreeItem: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        itemTaxRate: true,
        itemTaxTemplate: true,
        lastPurchaseRate: true,
        manufacturer: true,
        manufacturerPartNo: true,
        marginRateOrAmount: true,
        marginType: true,
        materialRequest: true,
        materialRequestItem: true,
        modified: true,
        modifiedBy: true,
        name: true,
        netAmount: true,
        netRate: true,
        owner: true,
        pageBreak: true,
        parent: true,
        parentField: true,
        parentType: true,
        priceListRate: true,
        pricingRules: true,
        productBundle: true,
        productionPlan: true,
        productionPlanItem: true,
        productionPlanSubAssemblyItem: true,
        project: true,
        qty: true,
        rate: true,
        rateWithMargin: true,
        receivedQty: true,
        returnedQty: true,
        salesOrder: true,
        salesOrderItem: true,
        salesOrderPackedItem: true,
        scheduleDate: true,
        stockQty: true,
        stockUom: true,
        stockUomRate: true,
        supplierPartNo: true,
        supplierQuotation: true,
        supplierQuotationItem: true,
        totalWeight: true,
        uom: true,
        updatedAt: true,
        warehouse: true,
        weightPerUnit: true,
        weightUom: true,
        wipCompositeAsset: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PurchaseOrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async purchaseOrderItem(
    @common.Param() params: PurchaseOrderItemWhereUniqueInput
  ): Promise<PurchaseOrderItem | null> {
    const result = await this.service.purchaseOrderItem({
      where: params,
      select: {
        actualQty: true,
        againstBlanketOrder: true,
        amount: true,
        applyTds: true,
        baseAmount: true,
        baseNetAmount: true,
        baseNetRate: true,
        basePriceListRate: true,
        baseRate: true,
        baseRateWithMargin: true,
        billedAmt: true,
        blanketOrder: true,
        blanketOrderRate: true,
        bom: true,
        brand: true,
        companyTotalStock: true,
        conversionFactor: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        deliveredBySupplier: true,
        description: true,
        discountAmount: true,
        discountPercentage: true,
        docstatus: true,
        expectedDeliveryDate: true,
        expenseAccount: true,
        fgItem: true,
        fgItemQty: true,
        fromWarehouse: true,
        id: true,
        idx: true,
        image: true,
        includeExplodedItems: true,
        isFixedAsset: true,
        isFreeItem: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        itemTaxRate: true,
        itemTaxTemplate: true,
        lastPurchaseRate: true,
        manufacturer: true,
        manufacturerPartNo: true,
        marginRateOrAmount: true,
        marginType: true,
        materialRequest: true,
        materialRequestItem: true,
        modified: true,
        modifiedBy: true,
        name: true,
        netAmount: true,
        netRate: true,
        owner: true,
        pageBreak: true,
        parent: true,
        parentField: true,
        parentType: true,
        priceListRate: true,
        pricingRules: true,
        productBundle: true,
        productionPlan: true,
        productionPlanItem: true,
        productionPlanSubAssemblyItem: true,
        project: true,
        qty: true,
        rate: true,
        rateWithMargin: true,
        receivedQty: true,
        returnedQty: true,
        salesOrder: true,
        salesOrderItem: true,
        salesOrderPackedItem: true,
        scheduleDate: true,
        stockQty: true,
        stockUom: true,
        stockUomRate: true,
        supplierPartNo: true,
        supplierQuotation: true,
        supplierQuotationItem: true,
        totalWeight: true,
        uom: true,
        updatedAt: true,
        warehouse: true,
        weightPerUnit: true,
        weightUom: true,
        wipCompositeAsset: true,
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
  @swagger.ApiOkResponse({ type: PurchaseOrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePurchaseOrderItem(
    @common.Param() params: PurchaseOrderItemWhereUniqueInput,
    @common.Body() data: PurchaseOrderItemUpdateInput
  ): Promise<PurchaseOrderItem | null> {
    try {
      return await this.service.updatePurchaseOrderItem({
        where: params,
        data: data,
        select: {
          actualQty: true,
          againstBlanketOrder: true,
          amount: true,
          applyTds: true,
          baseAmount: true,
          baseNetAmount: true,
          baseNetRate: true,
          basePriceListRate: true,
          baseRate: true,
          baseRateWithMargin: true,
          billedAmt: true,
          blanketOrder: true,
          blanketOrderRate: true,
          bom: true,
          brand: true,
          companyTotalStock: true,
          conversionFactor: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          deliveredBySupplier: true,
          description: true,
          discountAmount: true,
          discountPercentage: true,
          docstatus: true,
          expectedDeliveryDate: true,
          expenseAccount: true,
          fgItem: true,
          fgItemQty: true,
          fromWarehouse: true,
          id: true,
          idx: true,
          image: true,
          includeExplodedItems: true,
          isFixedAsset: true,
          isFreeItem: true,
          itemCode: true,
          itemGroup: true,
          itemName: true,
          itemTaxRate: true,
          itemTaxTemplate: true,
          lastPurchaseRate: true,
          manufacturer: true,
          manufacturerPartNo: true,
          marginRateOrAmount: true,
          marginType: true,
          materialRequest: true,
          materialRequestItem: true,
          modified: true,
          modifiedBy: true,
          name: true,
          netAmount: true,
          netRate: true,
          owner: true,
          pageBreak: true,
          parent: true,
          parentField: true,
          parentType: true,
          priceListRate: true,
          pricingRules: true,
          productBundle: true,
          productionPlan: true,
          productionPlanItem: true,
          productionPlanSubAssemblyItem: true,
          project: true,
          qty: true,
          rate: true,
          rateWithMargin: true,
          receivedQty: true,
          returnedQty: true,
          salesOrder: true,
          salesOrderItem: true,
          salesOrderPackedItem: true,
          scheduleDate: true,
          stockQty: true,
          stockUom: true,
          stockUomRate: true,
          supplierPartNo: true,
          supplierQuotation: true,
          supplierQuotationItem: true,
          totalWeight: true,
          uom: true,
          updatedAt: true,
          warehouse: true,
          weightPerUnit: true,
          weightUom: true,
          wipCompositeAsset: true,
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
  @swagger.ApiOkResponse({ type: PurchaseOrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePurchaseOrderItem(
    @common.Param() params: PurchaseOrderItemWhereUniqueInput
  ): Promise<PurchaseOrderItem | null> {
    try {
      return await this.service.deletePurchaseOrderItem({
        where: params,
        select: {
          actualQty: true,
          againstBlanketOrder: true,
          amount: true,
          applyTds: true,
          baseAmount: true,
          baseNetAmount: true,
          baseNetRate: true,
          basePriceListRate: true,
          baseRate: true,
          baseRateWithMargin: true,
          billedAmt: true,
          blanketOrder: true,
          blanketOrderRate: true,
          bom: true,
          brand: true,
          companyTotalStock: true,
          conversionFactor: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          deliveredBySupplier: true,
          description: true,
          discountAmount: true,
          discountPercentage: true,
          docstatus: true,
          expectedDeliveryDate: true,
          expenseAccount: true,
          fgItem: true,
          fgItemQty: true,
          fromWarehouse: true,
          id: true,
          idx: true,
          image: true,
          includeExplodedItems: true,
          isFixedAsset: true,
          isFreeItem: true,
          itemCode: true,
          itemGroup: true,
          itemName: true,
          itemTaxRate: true,
          itemTaxTemplate: true,
          lastPurchaseRate: true,
          manufacturer: true,
          manufacturerPartNo: true,
          marginRateOrAmount: true,
          marginType: true,
          materialRequest: true,
          materialRequestItem: true,
          modified: true,
          modifiedBy: true,
          name: true,
          netAmount: true,
          netRate: true,
          owner: true,
          pageBreak: true,
          parent: true,
          parentField: true,
          parentType: true,
          priceListRate: true,
          pricingRules: true,
          productBundle: true,
          productionPlan: true,
          productionPlanItem: true,
          productionPlanSubAssemblyItem: true,
          project: true,
          qty: true,
          rate: true,
          rateWithMargin: true,
          receivedQty: true,
          returnedQty: true,
          salesOrder: true,
          salesOrderItem: true,
          salesOrderPackedItem: true,
          scheduleDate: true,
          stockQty: true,
          stockUom: true,
          stockUomRate: true,
          supplierPartNo: true,
          supplierQuotation: true,
          supplierQuotationItem: true,
          totalWeight: true,
          uom: true,
          updatedAt: true,
          warehouse: true,
          weightPerUnit: true,
          weightUom: true,
          wipCompositeAsset: true,
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