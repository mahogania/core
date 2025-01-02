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
import { DeliveryNoteItemService } from "../deliveryNoteItem.service";
import { DeliveryNoteItemCreateInput } from "./DeliveryNoteItemCreateInput";
import { DeliveryNoteItem } from "./DeliveryNoteItem";
import { DeliveryNoteItemFindManyArgs } from "./DeliveryNoteItemFindManyArgs";
import { DeliveryNoteItemWhereUniqueInput } from "./DeliveryNoteItemWhereUniqueInput";
import { DeliveryNoteItemUpdateInput } from "./DeliveryNoteItemUpdateInput";

export class DeliveryNoteItemControllerBase {
  constructor(protected readonly service: DeliveryNoteItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DeliveryNoteItem })
  async createDeliveryNoteItem(
    @common.Body() data: DeliveryNoteItemCreateInput
  ): Promise<DeliveryNoteItem> {
    return await this.service.createDeliveryNoteItem({
      data: data,
      select: {
        actualBatchQty: true,
        actualQty: true,
        againstSalesInvoice: true,
        againstSalesOrder: true,
        allowZeroValuationRate: true,
        amount: true,
        barcode: true,
        baseAmount: true,
        baseNetAmount: true,
        baseNetRate: true,
        basePriceListRate: true,
        baseRate: true,
        baseRateWithMargin: true,
        batchNo: true,
        billedAmt: true,
        brand: true,
        conversionFactor: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        customerItemCode: true,
        description: true,
        discountAmount: true,
        discountPercentage: true,
        dnDetail: true,
        docstatus: true,
        expenseAccount: true,
        grantCommission: true,
        hasItemScanned: true,
        id: true,
        idx: true,
        image: true,
        incomingRate: true,
        installedQty: true,
        isFreeItem: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        itemTaxRate: true,
        itemTaxTemplate: true,
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
        packedQty: true,
        pageBreak: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        pickListItem: true,
        priceListRate: true,
        pricingRules: true,
        project: true,
        purchaseOrder: true,
        purchaseOrderItem: true,
        qty: true,
        qualityInspection: true,
        rate: true,
        rateWithMargin: true,
        receivedQty: true,
        returnedQty: true,
        serialAndBatchBundle: true,
        serialNo: true,
        siDetail: true,
        soDetail: true,
        stockQty: true,
        stockUom: true,
        stockUomRate: true,
        targetWarehouse: true,
        totalWeight: true,
        uom: true,
        updatedAt: true,
        useSerialBatchFields: true,
        warehouse: true,
        weightPerUnit: true,
        weightUom: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DeliveryNoteItem] })
  @ApiNestedQuery(DeliveryNoteItemFindManyArgs)
  async deliveryNoteItems(
    @common.Req() request: Request
  ): Promise<DeliveryNoteItem[]> {
    const args = plainToClass(DeliveryNoteItemFindManyArgs, request.query);
    return this.service.deliveryNoteItems({
      ...args,
      select: {
        actualBatchQty: true,
        actualQty: true,
        againstSalesInvoice: true,
        againstSalesOrder: true,
        allowZeroValuationRate: true,
        amount: true,
        barcode: true,
        baseAmount: true,
        baseNetAmount: true,
        baseNetRate: true,
        basePriceListRate: true,
        baseRate: true,
        baseRateWithMargin: true,
        batchNo: true,
        billedAmt: true,
        brand: true,
        conversionFactor: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        customerItemCode: true,
        description: true,
        discountAmount: true,
        discountPercentage: true,
        dnDetail: true,
        docstatus: true,
        expenseAccount: true,
        grantCommission: true,
        hasItemScanned: true,
        id: true,
        idx: true,
        image: true,
        incomingRate: true,
        installedQty: true,
        isFreeItem: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        itemTaxRate: true,
        itemTaxTemplate: true,
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
        packedQty: true,
        pageBreak: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        pickListItem: true,
        priceListRate: true,
        pricingRules: true,
        project: true,
        purchaseOrder: true,
        purchaseOrderItem: true,
        qty: true,
        qualityInspection: true,
        rate: true,
        rateWithMargin: true,
        receivedQty: true,
        returnedQty: true,
        serialAndBatchBundle: true,
        serialNo: true,
        siDetail: true,
        soDetail: true,
        stockQty: true,
        stockUom: true,
        stockUomRate: true,
        targetWarehouse: true,
        totalWeight: true,
        uom: true,
        updatedAt: true,
        useSerialBatchFields: true,
        warehouse: true,
        weightPerUnit: true,
        weightUom: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DeliveryNoteItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deliveryNoteItem(
    @common.Param() params: DeliveryNoteItemWhereUniqueInput
  ): Promise<DeliveryNoteItem | null> {
    const result = await this.service.deliveryNoteItem({
      where: params,
      select: {
        actualBatchQty: true,
        actualQty: true,
        againstSalesInvoice: true,
        againstSalesOrder: true,
        allowZeroValuationRate: true,
        amount: true,
        barcode: true,
        baseAmount: true,
        baseNetAmount: true,
        baseNetRate: true,
        basePriceListRate: true,
        baseRate: true,
        baseRateWithMargin: true,
        batchNo: true,
        billedAmt: true,
        brand: true,
        conversionFactor: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        customerItemCode: true,
        description: true,
        discountAmount: true,
        discountPercentage: true,
        dnDetail: true,
        docstatus: true,
        expenseAccount: true,
        grantCommission: true,
        hasItemScanned: true,
        id: true,
        idx: true,
        image: true,
        incomingRate: true,
        installedQty: true,
        isFreeItem: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        itemTaxRate: true,
        itemTaxTemplate: true,
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
        packedQty: true,
        pageBreak: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        pickListItem: true,
        priceListRate: true,
        pricingRules: true,
        project: true,
        purchaseOrder: true,
        purchaseOrderItem: true,
        qty: true,
        qualityInspection: true,
        rate: true,
        rateWithMargin: true,
        receivedQty: true,
        returnedQty: true,
        serialAndBatchBundle: true,
        serialNo: true,
        siDetail: true,
        soDetail: true,
        stockQty: true,
        stockUom: true,
        stockUomRate: true,
        targetWarehouse: true,
        totalWeight: true,
        uom: true,
        updatedAt: true,
        useSerialBatchFields: true,
        warehouse: true,
        weightPerUnit: true,
        weightUom: true,
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
  @swagger.ApiOkResponse({ type: DeliveryNoteItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDeliveryNoteItem(
    @common.Param() params: DeliveryNoteItemWhereUniqueInput,
    @common.Body() data: DeliveryNoteItemUpdateInput
  ): Promise<DeliveryNoteItem | null> {
    try {
      return await this.service.updateDeliveryNoteItem({
        where: params,
        data: data,
        select: {
          actualBatchQty: true,
          actualQty: true,
          againstSalesInvoice: true,
          againstSalesOrder: true,
          allowZeroValuationRate: true,
          amount: true,
          barcode: true,
          baseAmount: true,
          baseNetAmount: true,
          baseNetRate: true,
          basePriceListRate: true,
          baseRate: true,
          baseRateWithMargin: true,
          batchNo: true,
          billedAmt: true,
          brand: true,
          conversionFactor: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          customerItemCode: true,
          description: true,
          discountAmount: true,
          discountPercentage: true,
          dnDetail: true,
          docstatus: true,
          expenseAccount: true,
          grantCommission: true,
          hasItemScanned: true,
          id: true,
          idx: true,
          image: true,
          incomingRate: true,
          installedQty: true,
          isFreeItem: true,
          itemCode: true,
          itemGroup: true,
          itemName: true,
          itemTaxRate: true,
          itemTaxTemplate: true,
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
          packedQty: true,
          pageBreak: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          pickListItem: true,
          priceListRate: true,
          pricingRules: true,
          project: true,
          purchaseOrder: true,
          purchaseOrderItem: true,
          qty: true,
          qualityInspection: true,
          rate: true,
          rateWithMargin: true,
          receivedQty: true,
          returnedQty: true,
          serialAndBatchBundle: true,
          serialNo: true,
          siDetail: true,
          soDetail: true,
          stockQty: true,
          stockUom: true,
          stockUomRate: true,
          targetWarehouse: true,
          totalWeight: true,
          uom: true,
          updatedAt: true,
          useSerialBatchFields: true,
          warehouse: true,
          weightPerUnit: true,
          weightUom: true,
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
  @swagger.ApiOkResponse({ type: DeliveryNoteItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDeliveryNoteItem(
    @common.Param() params: DeliveryNoteItemWhereUniqueInput
  ): Promise<DeliveryNoteItem | null> {
    try {
      return await this.service.deleteDeliveryNoteItem({
        where: params,
        select: {
          actualBatchQty: true,
          actualQty: true,
          againstSalesInvoice: true,
          againstSalesOrder: true,
          allowZeroValuationRate: true,
          amount: true,
          barcode: true,
          baseAmount: true,
          baseNetAmount: true,
          baseNetRate: true,
          basePriceListRate: true,
          baseRate: true,
          baseRateWithMargin: true,
          batchNo: true,
          billedAmt: true,
          brand: true,
          conversionFactor: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          customerItemCode: true,
          description: true,
          discountAmount: true,
          discountPercentage: true,
          dnDetail: true,
          docstatus: true,
          expenseAccount: true,
          grantCommission: true,
          hasItemScanned: true,
          id: true,
          idx: true,
          image: true,
          incomingRate: true,
          installedQty: true,
          isFreeItem: true,
          itemCode: true,
          itemGroup: true,
          itemName: true,
          itemTaxRate: true,
          itemTaxTemplate: true,
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
          packedQty: true,
          pageBreak: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          pickListItem: true,
          priceListRate: true,
          pricingRules: true,
          project: true,
          purchaseOrder: true,
          purchaseOrderItem: true,
          qty: true,
          qualityInspection: true,
          rate: true,
          rateWithMargin: true,
          receivedQty: true,
          returnedQty: true,
          serialAndBatchBundle: true,
          serialNo: true,
          siDetail: true,
          soDetail: true,
          stockQty: true,
          stockUom: true,
          stockUomRate: true,
          targetWarehouse: true,
          totalWeight: true,
          uom: true,
          updatedAt: true,
          useSerialBatchFields: true,
          warehouse: true,
          weightPerUnit: true,
          weightUom: true,
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