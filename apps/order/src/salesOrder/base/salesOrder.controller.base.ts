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
import { SalesOrderService } from "../salesOrder.service";
import { SalesOrderCreateInput } from "./SalesOrderCreateInput";
import { SalesOrder } from "./SalesOrder";
import { SalesOrderFindManyArgs } from "./SalesOrderFindManyArgs";
import { SalesOrderWhereUniqueInput } from "./SalesOrderWhereUniqueInput";
import { SalesOrderUpdateInput } from "./SalesOrderUpdateInput";

export class SalesOrderControllerBase {
  constructor(protected readonly service: SalesOrderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SalesOrder })
  async createSalesOrder(
    @common.Body() data: SalesOrderCreateInput
  ): Promise<SalesOrder> {
    return await this.service.createSalesOrder({
      data: data,
      select: {
        additionalDiscountPercentage: true,
        addressDisplay: true,
        advancePaid: true,
        amendedFrom: true,
        amountEligibleForCommission: true,
        applyDiscountOn: true,
        autoRepeat: true,
        baseDiscountAmount: true,
        baseGrandTotal: true,
        baseInWords: true,
        baseNetTotal: true,
        baseRoundedTotal: true,
        baseRoundingAdjustment: true,
        baseTotal: true,
        baseTotalTaxesAndCharges: true,
        billingStatus: true,
        campaign: true,
        commissionRate: true,
        company: true,
        companyAddress: true,
        companyAddressDisplay: true,
        contactDisplay: true,
        contactEmail: true,
        contactMobile: true,
        contactPerson: true,
        contactPhone: true,
        conversionRate: true,
        costCenter: true,
        couponCode: true,
        createdAt: true,
        creation: true,
        currency: true,
        customer: true,
        customerAddress: true,
        customerGroup: true,
        customerName: true,
        deliveryDate: true,
        deliveryStatus: true,
        disableRoundedTotal: true,
        discountAmount: true,
        dispatchAddress: true,
        dispatchAddressName: true,
        docstatus: true,
        fromDate: true,
        grandTotal: true,
        groupSameItems: true,
        id: true,
        idx: true,
        ignorePricingRule: true,
        inWords: true,
        incoterm: true,
        interCompanyOrderReference: true,
        isInternalCustomer: true,
        language: true,
        letterHead: true,
        loyaltyAmount: true,
        loyaltyPoints: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namedPlace: true,
        namingSeries: true,
        netTotal: true,
        orderType: true,
        otherChargesCalculation: true,
        owner: true,
        partyAccountCurrency: true,
        paymentTermsTemplate: true,
        perBilled: true,
        perDelivered: true,
        perPicked: true,
        plcConversionRate: true,
        poDate: true,
        poNo: true,
        priceListCurrency: true,
        project: true,
        representsCompany: true,
        reserveStock: true,
        roundedTotal: true,
        roundingAdjustment: true,
        salesPartner: true,
        scanBarcode: true,
        selectPrintHeading: true,
        sellingPriceList: true,
        setWarehouse: true,
        shippingAddress: true,
        shippingAddressName: true,
        shippingRule: true,
        skipDeliveryNote: true,
        source: true,
        status: true,
        taxCategory: true,
        taxId: true,
        taxesAndCharges: true,
        tcName: true,
        terms: true,
        territory: true,
        title: true,
        toDate: true,
        total: true,
        totalCommission: true,
        totalNetWeight: true,
        totalQty: true,
        totalTaxesAndCharges: true,
        transactionDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SalesOrder] })
  @ApiNestedQuery(SalesOrderFindManyArgs)
  async salesOrders(@common.Req() request: Request): Promise<SalesOrder[]> {
    const args = plainToClass(SalesOrderFindManyArgs, request.query);
    return this.service.salesOrders({
      ...args,
      select: {
        additionalDiscountPercentage: true,
        addressDisplay: true,
        advancePaid: true,
        amendedFrom: true,
        amountEligibleForCommission: true,
        applyDiscountOn: true,
        autoRepeat: true,
        baseDiscountAmount: true,
        baseGrandTotal: true,
        baseInWords: true,
        baseNetTotal: true,
        baseRoundedTotal: true,
        baseRoundingAdjustment: true,
        baseTotal: true,
        baseTotalTaxesAndCharges: true,
        billingStatus: true,
        campaign: true,
        commissionRate: true,
        company: true,
        companyAddress: true,
        companyAddressDisplay: true,
        contactDisplay: true,
        contactEmail: true,
        contactMobile: true,
        contactPerson: true,
        contactPhone: true,
        conversionRate: true,
        costCenter: true,
        couponCode: true,
        createdAt: true,
        creation: true,
        currency: true,
        customer: true,
        customerAddress: true,
        customerGroup: true,
        customerName: true,
        deliveryDate: true,
        deliveryStatus: true,
        disableRoundedTotal: true,
        discountAmount: true,
        dispatchAddress: true,
        dispatchAddressName: true,
        docstatus: true,
        fromDate: true,
        grandTotal: true,
        groupSameItems: true,
        id: true,
        idx: true,
        ignorePricingRule: true,
        inWords: true,
        incoterm: true,
        interCompanyOrderReference: true,
        isInternalCustomer: true,
        language: true,
        letterHead: true,
        loyaltyAmount: true,
        loyaltyPoints: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namedPlace: true,
        namingSeries: true,
        netTotal: true,
        orderType: true,
        otherChargesCalculation: true,
        owner: true,
        partyAccountCurrency: true,
        paymentTermsTemplate: true,
        perBilled: true,
        perDelivered: true,
        perPicked: true,
        plcConversionRate: true,
        poDate: true,
        poNo: true,
        priceListCurrency: true,
        project: true,
        representsCompany: true,
        reserveStock: true,
        roundedTotal: true,
        roundingAdjustment: true,
        salesPartner: true,
        scanBarcode: true,
        selectPrintHeading: true,
        sellingPriceList: true,
        setWarehouse: true,
        shippingAddress: true,
        shippingAddressName: true,
        shippingRule: true,
        skipDeliveryNote: true,
        source: true,
        status: true,
        taxCategory: true,
        taxId: true,
        taxesAndCharges: true,
        tcName: true,
        terms: true,
        territory: true,
        title: true,
        toDate: true,
        total: true,
        totalCommission: true,
        totalNetWeight: true,
        totalQty: true,
        totalTaxesAndCharges: true,
        transactionDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SalesOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async salesOrder(
    @common.Param() params: SalesOrderWhereUniqueInput
  ): Promise<SalesOrder | null> {
    const result = await this.service.salesOrder({
      where: params,
      select: {
        additionalDiscountPercentage: true,
        addressDisplay: true,
        advancePaid: true,
        amendedFrom: true,
        amountEligibleForCommission: true,
        applyDiscountOn: true,
        autoRepeat: true,
        baseDiscountAmount: true,
        baseGrandTotal: true,
        baseInWords: true,
        baseNetTotal: true,
        baseRoundedTotal: true,
        baseRoundingAdjustment: true,
        baseTotal: true,
        baseTotalTaxesAndCharges: true,
        billingStatus: true,
        campaign: true,
        commissionRate: true,
        company: true,
        companyAddress: true,
        companyAddressDisplay: true,
        contactDisplay: true,
        contactEmail: true,
        contactMobile: true,
        contactPerson: true,
        contactPhone: true,
        conversionRate: true,
        costCenter: true,
        couponCode: true,
        createdAt: true,
        creation: true,
        currency: true,
        customer: true,
        customerAddress: true,
        customerGroup: true,
        customerName: true,
        deliveryDate: true,
        deliveryStatus: true,
        disableRoundedTotal: true,
        discountAmount: true,
        dispatchAddress: true,
        dispatchAddressName: true,
        docstatus: true,
        fromDate: true,
        grandTotal: true,
        groupSameItems: true,
        id: true,
        idx: true,
        ignorePricingRule: true,
        inWords: true,
        incoterm: true,
        interCompanyOrderReference: true,
        isInternalCustomer: true,
        language: true,
        letterHead: true,
        loyaltyAmount: true,
        loyaltyPoints: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namedPlace: true,
        namingSeries: true,
        netTotal: true,
        orderType: true,
        otherChargesCalculation: true,
        owner: true,
        partyAccountCurrency: true,
        paymentTermsTemplate: true,
        perBilled: true,
        perDelivered: true,
        perPicked: true,
        plcConversionRate: true,
        poDate: true,
        poNo: true,
        priceListCurrency: true,
        project: true,
        representsCompany: true,
        reserveStock: true,
        roundedTotal: true,
        roundingAdjustment: true,
        salesPartner: true,
        scanBarcode: true,
        selectPrintHeading: true,
        sellingPriceList: true,
        setWarehouse: true,
        shippingAddress: true,
        shippingAddressName: true,
        shippingRule: true,
        skipDeliveryNote: true,
        source: true,
        status: true,
        taxCategory: true,
        taxId: true,
        taxesAndCharges: true,
        tcName: true,
        terms: true,
        territory: true,
        title: true,
        toDate: true,
        total: true,
        totalCommission: true,
        totalNetWeight: true,
        totalQty: true,
        totalTaxesAndCharges: true,
        transactionDate: true,
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
  @swagger.ApiOkResponse({ type: SalesOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSalesOrder(
    @common.Param() params: SalesOrderWhereUniqueInput,
    @common.Body() data: SalesOrderUpdateInput
  ): Promise<SalesOrder | null> {
    try {
      return await this.service.updateSalesOrder({
        where: params,
        data: data,
        select: {
          additionalDiscountPercentage: true,
          addressDisplay: true,
          advancePaid: true,
          amendedFrom: true,
          amountEligibleForCommission: true,
          applyDiscountOn: true,
          autoRepeat: true,
          baseDiscountAmount: true,
          baseGrandTotal: true,
          baseInWords: true,
          baseNetTotal: true,
          baseRoundedTotal: true,
          baseRoundingAdjustment: true,
          baseTotal: true,
          baseTotalTaxesAndCharges: true,
          billingStatus: true,
          campaign: true,
          commissionRate: true,
          company: true,
          companyAddress: true,
          companyAddressDisplay: true,
          contactDisplay: true,
          contactEmail: true,
          contactMobile: true,
          contactPerson: true,
          contactPhone: true,
          conversionRate: true,
          costCenter: true,
          couponCode: true,
          createdAt: true,
          creation: true,
          currency: true,
          customer: true,
          customerAddress: true,
          customerGroup: true,
          customerName: true,
          deliveryDate: true,
          deliveryStatus: true,
          disableRoundedTotal: true,
          discountAmount: true,
          dispatchAddress: true,
          dispatchAddressName: true,
          docstatus: true,
          fromDate: true,
          grandTotal: true,
          groupSameItems: true,
          id: true,
          idx: true,
          ignorePricingRule: true,
          inWords: true,
          incoterm: true,
          interCompanyOrderReference: true,
          isInternalCustomer: true,
          language: true,
          letterHead: true,
          loyaltyAmount: true,
          loyaltyPoints: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namedPlace: true,
          namingSeries: true,
          netTotal: true,
          orderType: true,
          otherChargesCalculation: true,
          owner: true,
          partyAccountCurrency: true,
          paymentTermsTemplate: true,
          perBilled: true,
          perDelivered: true,
          perPicked: true,
          plcConversionRate: true,
          poDate: true,
          poNo: true,
          priceListCurrency: true,
          project: true,
          representsCompany: true,
          reserveStock: true,
          roundedTotal: true,
          roundingAdjustment: true,
          salesPartner: true,
          scanBarcode: true,
          selectPrintHeading: true,
          sellingPriceList: true,
          setWarehouse: true,
          shippingAddress: true,
          shippingAddressName: true,
          shippingRule: true,
          skipDeliveryNote: true,
          source: true,
          status: true,
          taxCategory: true,
          taxId: true,
          taxesAndCharges: true,
          tcName: true,
          terms: true,
          territory: true,
          title: true,
          toDate: true,
          total: true,
          totalCommission: true,
          totalNetWeight: true,
          totalQty: true,
          totalTaxesAndCharges: true,
          transactionDate: true,
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
  @swagger.ApiOkResponse({ type: SalesOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSalesOrder(
    @common.Param() params: SalesOrderWhereUniqueInput
  ): Promise<SalesOrder | null> {
    try {
      return await this.service.deleteSalesOrder({
        where: params,
        select: {
          additionalDiscountPercentage: true,
          addressDisplay: true,
          advancePaid: true,
          amendedFrom: true,
          amountEligibleForCommission: true,
          applyDiscountOn: true,
          autoRepeat: true,
          baseDiscountAmount: true,
          baseGrandTotal: true,
          baseInWords: true,
          baseNetTotal: true,
          baseRoundedTotal: true,
          baseRoundingAdjustment: true,
          baseTotal: true,
          baseTotalTaxesAndCharges: true,
          billingStatus: true,
          campaign: true,
          commissionRate: true,
          company: true,
          companyAddress: true,
          companyAddressDisplay: true,
          contactDisplay: true,
          contactEmail: true,
          contactMobile: true,
          contactPerson: true,
          contactPhone: true,
          conversionRate: true,
          costCenter: true,
          couponCode: true,
          createdAt: true,
          creation: true,
          currency: true,
          customer: true,
          customerAddress: true,
          customerGroup: true,
          customerName: true,
          deliveryDate: true,
          deliveryStatus: true,
          disableRoundedTotal: true,
          discountAmount: true,
          dispatchAddress: true,
          dispatchAddressName: true,
          docstatus: true,
          fromDate: true,
          grandTotal: true,
          groupSameItems: true,
          id: true,
          idx: true,
          ignorePricingRule: true,
          inWords: true,
          incoterm: true,
          interCompanyOrderReference: true,
          isInternalCustomer: true,
          language: true,
          letterHead: true,
          loyaltyAmount: true,
          loyaltyPoints: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namedPlace: true,
          namingSeries: true,
          netTotal: true,
          orderType: true,
          otherChargesCalculation: true,
          owner: true,
          partyAccountCurrency: true,
          paymentTermsTemplate: true,
          perBilled: true,
          perDelivered: true,
          perPicked: true,
          plcConversionRate: true,
          poDate: true,
          poNo: true,
          priceListCurrency: true,
          project: true,
          representsCompany: true,
          reserveStock: true,
          roundedTotal: true,
          roundingAdjustment: true,
          salesPartner: true,
          scanBarcode: true,
          selectPrintHeading: true,
          sellingPriceList: true,
          setWarehouse: true,
          shippingAddress: true,
          shippingAddressName: true,
          shippingRule: true,
          skipDeliveryNote: true,
          source: true,
          status: true,
          taxCategory: true,
          taxId: true,
          taxesAndCharges: true,
          tcName: true,
          terms: true,
          territory: true,
          title: true,
          toDate: true,
          total: true,
          totalCommission: true,
          totalNetWeight: true,
          totalQty: true,
          totalTaxesAndCharges: true,
          transactionDate: true,
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