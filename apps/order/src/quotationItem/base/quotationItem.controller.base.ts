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
import { QuotationItemService } from "../quotationItem.service";
import { QuotationItemCreateInput } from "./QuotationItemCreateInput";
import { QuotationItem } from "./QuotationItem";
import { QuotationItemFindManyArgs } from "./QuotationItemFindManyArgs";
import { QuotationItemWhereUniqueInput } from "./QuotationItemWhereUniqueInput";
import { QuotationItemUpdateInput } from "./QuotationItemUpdateInput";

export class QuotationItemControllerBase {
  constructor(protected readonly service: QuotationItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuotationItem })
  async createQuotationItem(
    @common.Body() data: QuotationItemCreateInput
  ): Promise<QuotationItem> {
    return await this.service.createQuotationItem({
      data: data,
      select: {
        actualQty: true,
        additionalNotes: true,
        againstBlanketOrder: true,
        amount: true,
        baseAmount: true,
        baseNetAmount: true,
        baseNetRate: true,
        basePriceListRate: true,
        baseRate: true,
        baseRateWithMargin: true,
        blanketOrder: true,
        blanketOrderRate: true,
        brand: true,
        conversionFactor: true,
        createdAt: true,
        creation: true,
        customerItemCode: true,
        description: true,
        discountAmount: true,
        discountPercentage: true,
        docstatus: true,
        grossProfit: true,
        hasAlternativeItem: true,
        id: true,
        idx: true,
        image: true,
        isAlternative: true,
        isFreeItem: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        itemTaxRate: true,
        itemTaxTemplate: true,
        marginRateOrAmount: true,
        marginType: true,
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
        prevdocDocname: true,
        prevdocDoctype: true,
        priceListRate: true,
        pricingRules: true,
        projectedQty: true,
        qty: true,
        rate: true,
        rateWithMargin: true,
        stockQty: true,
        stockUom: true,
        stockUomRate: true,
        totalWeight: true,
        uom: true,
        updatedAt: true,
        valuationRate: true,
        warehouse: true,
        weightPerUnit: true,
        weightUom: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QuotationItem] })
  @ApiNestedQuery(QuotationItemFindManyArgs)
  async quotationItems(
    @common.Req() request: Request
  ): Promise<QuotationItem[]> {
    const args = plainToClass(QuotationItemFindManyArgs, request.query);
    return this.service.quotationItems({
      ...args,
      select: {
        actualQty: true,
        additionalNotes: true,
        againstBlanketOrder: true,
        amount: true,
        baseAmount: true,
        baseNetAmount: true,
        baseNetRate: true,
        basePriceListRate: true,
        baseRate: true,
        baseRateWithMargin: true,
        blanketOrder: true,
        blanketOrderRate: true,
        brand: true,
        conversionFactor: true,
        createdAt: true,
        creation: true,
        customerItemCode: true,
        description: true,
        discountAmount: true,
        discountPercentage: true,
        docstatus: true,
        grossProfit: true,
        hasAlternativeItem: true,
        id: true,
        idx: true,
        image: true,
        isAlternative: true,
        isFreeItem: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        itemTaxRate: true,
        itemTaxTemplate: true,
        marginRateOrAmount: true,
        marginType: true,
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
        prevdocDocname: true,
        prevdocDoctype: true,
        priceListRate: true,
        pricingRules: true,
        projectedQty: true,
        qty: true,
        rate: true,
        rateWithMargin: true,
        stockQty: true,
        stockUom: true,
        stockUomRate: true,
        totalWeight: true,
        uom: true,
        updatedAt: true,
        valuationRate: true,
        warehouse: true,
        weightPerUnit: true,
        weightUom: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuotationItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async quotationItem(
    @common.Param() params: QuotationItemWhereUniqueInput
  ): Promise<QuotationItem | null> {
    const result = await this.service.quotationItem({
      where: params,
      select: {
        actualQty: true,
        additionalNotes: true,
        againstBlanketOrder: true,
        amount: true,
        baseAmount: true,
        baseNetAmount: true,
        baseNetRate: true,
        basePriceListRate: true,
        baseRate: true,
        baseRateWithMargin: true,
        blanketOrder: true,
        blanketOrderRate: true,
        brand: true,
        conversionFactor: true,
        createdAt: true,
        creation: true,
        customerItemCode: true,
        description: true,
        discountAmount: true,
        discountPercentage: true,
        docstatus: true,
        grossProfit: true,
        hasAlternativeItem: true,
        id: true,
        idx: true,
        image: true,
        isAlternative: true,
        isFreeItem: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        itemTaxRate: true,
        itemTaxTemplate: true,
        marginRateOrAmount: true,
        marginType: true,
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
        prevdocDocname: true,
        prevdocDoctype: true,
        priceListRate: true,
        pricingRules: true,
        projectedQty: true,
        qty: true,
        rate: true,
        rateWithMargin: true,
        stockQty: true,
        stockUom: true,
        stockUomRate: true,
        totalWeight: true,
        uom: true,
        updatedAt: true,
        valuationRate: true,
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
  @swagger.ApiOkResponse({ type: QuotationItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateQuotationItem(
    @common.Param() params: QuotationItemWhereUniqueInput,
    @common.Body() data: QuotationItemUpdateInput
  ): Promise<QuotationItem | null> {
    try {
      return await this.service.updateQuotationItem({
        where: params,
        data: data,
        select: {
          actualQty: true,
          additionalNotes: true,
          againstBlanketOrder: true,
          amount: true,
          baseAmount: true,
          baseNetAmount: true,
          baseNetRate: true,
          basePriceListRate: true,
          baseRate: true,
          baseRateWithMargin: true,
          blanketOrder: true,
          blanketOrderRate: true,
          brand: true,
          conversionFactor: true,
          createdAt: true,
          creation: true,
          customerItemCode: true,
          description: true,
          discountAmount: true,
          discountPercentage: true,
          docstatus: true,
          grossProfit: true,
          hasAlternativeItem: true,
          id: true,
          idx: true,
          image: true,
          isAlternative: true,
          isFreeItem: true,
          itemCode: true,
          itemGroup: true,
          itemName: true,
          itemTaxRate: true,
          itemTaxTemplate: true,
          marginRateOrAmount: true,
          marginType: true,
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
          prevdocDocname: true,
          prevdocDoctype: true,
          priceListRate: true,
          pricingRules: true,
          projectedQty: true,
          qty: true,
          rate: true,
          rateWithMargin: true,
          stockQty: true,
          stockUom: true,
          stockUomRate: true,
          totalWeight: true,
          uom: true,
          updatedAt: true,
          valuationRate: true,
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
  @swagger.ApiOkResponse({ type: QuotationItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteQuotationItem(
    @common.Param() params: QuotationItemWhereUniqueInput
  ): Promise<QuotationItem | null> {
    try {
      return await this.service.deleteQuotationItem({
        where: params,
        select: {
          actualQty: true,
          additionalNotes: true,
          againstBlanketOrder: true,
          amount: true,
          baseAmount: true,
          baseNetAmount: true,
          baseNetRate: true,
          basePriceListRate: true,
          baseRate: true,
          baseRateWithMargin: true,
          blanketOrder: true,
          blanketOrderRate: true,
          brand: true,
          conversionFactor: true,
          createdAt: true,
          creation: true,
          customerItemCode: true,
          description: true,
          discountAmount: true,
          discountPercentage: true,
          docstatus: true,
          grossProfit: true,
          hasAlternativeItem: true,
          id: true,
          idx: true,
          image: true,
          isAlternative: true,
          isFreeItem: true,
          itemCode: true,
          itemGroup: true,
          itemName: true,
          itemTaxRate: true,
          itemTaxTemplate: true,
          marginRateOrAmount: true,
          marginType: true,
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
          prevdocDocname: true,
          prevdocDoctype: true,
          priceListRate: true,
          pricingRules: true,
          projectedQty: true,
          qty: true,
          rate: true,
          rateWithMargin: true,
          stockQty: true,
          stockUom: true,
          stockUomRate: true,
          totalWeight: true,
          uom: true,
          updatedAt: true,
          valuationRate: true,
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
