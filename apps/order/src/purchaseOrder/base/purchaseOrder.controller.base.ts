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
import { PurchaseOrderService } from "../purchaseOrder.service";
import { PurchaseOrderCreateInput } from "./PurchaseOrderCreateInput";
import { PurchaseOrder } from "./PurchaseOrder";
import { PurchaseOrderFindManyArgs } from "./PurchaseOrderFindManyArgs";
import { PurchaseOrderWhereUniqueInput } from "./PurchaseOrderWhereUniqueInput";
import { PurchaseOrderUpdateInput } from "./PurchaseOrderUpdateInput";

export class PurchaseOrderControllerBase {
  constructor(protected readonly service: PurchaseOrderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PurchaseOrder })
  async createPurchaseOrder(
    @common.Body() data: PurchaseOrderCreateInput
  ): Promise<PurchaseOrder> {
    return await this.service.createPurchaseOrder({
      data: data,
      select: {
        additionalDiscountPercentage: true,
        addressDisplay: true,
        advancePaid: true,
        amendedFrom: true,
        applyDiscountOn: true,
        applyTds: true,
        autoRepeat: true,
        baseDiscountAmount: true,
        baseGrandTotal: true,
        baseInWords: true,
        baseNetTotal: true,
        baseRoundedTotal: true,
        baseRoundingAdjustment: true,
        baseTaxWithholdingNetTotal: true,
        baseTaxesAndChargesAdded: true,
        baseTaxesAndChargesDeducted: true,
        baseTotal: true,
        baseTotalTaxesAndCharges: true,
        billingAddress: true,
        billingAddressDisplay: true,
        buyingPriceList: true,
        company: true,
        contactDisplay: true,
        contactEmail: true,
        contactMobile: true,
        contactPerson: true,
        conversionRate: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        currency: true,
        customer: true,
        customerContactDisplay: true,
        customerContactEmail: true,
        customerContactMobile: true,
        customerContactPerson: true,
        customerName: true,
        disableRoundedTotal: true,
        discountAmount: true,
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
        isInternalSupplier: true,
        isOldSubcontractingFlow: true,
        isSubcontracted: true,
        language: true,
        letterHead: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namedPlace: true,
        namingSeries: true,
        netTotal: true,
        orderConfirmationDate: true,
        orderConfirmationNo: true,
        otherChargesCalculation: true,
        owner: true,
        partyAccountCurrency: true,
        paymentTermsTemplate: true,
        perBilled: true,
        perReceived: true,
        plcConversionRate: true,
        priceListCurrency: true,
        project: true,
        refSq: true,
        representsCompany: true,
        roundedTotal: true,
        roundingAdjustment: true,
        scanBarcode: true,
        scheduleDate: true,
        selectPrintHeading: true,
        setFromWarehouse: true,
        setReserveWarehouse: true,
        setWarehouse: true,
        shippingAddress: true,
        shippingAddressDisplay: true,
        shippingRule: true,
        status: true,
        supplier: true,
        supplierAddress: true,
        supplierName: true,
        supplierWarehouse: true,
        taxCategory: true,
        taxWithholdingCategory: true,
        taxWithholdingNetTotal: true,
        taxesAndCharges: true,
        taxesAndChargesAdded: true,
        taxesAndChargesDeducted: true,
        tcName: true,
        terms: true,
        title: true,
        toDate: true,
        total: true,
        totalNetWeight: true,
        totalQty: true,
        totalTaxesAndCharges: true,
        transactionDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PurchaseOrder] })
  @ApiNestedQuery(PurchaseOrderFindManyArgs)
  async purchaseOrders(
    @common.Req() request: Request
  ): Promise<PurchaseOrder[]> {
    const args = plainToClass(PurchaseOrderFindManyArgs, request.query);
    return this.service.purchaseOrders({
      ...args,
      select: {
        additionalDiscountPercentage: true,
        addressDisplay: true,
        advancePaid: true,
        amendedFrom: true,
        applyDiscountOn: true,
        applyTds: true,
        autoRepeat: true,
        baseDiscountAmount: true,
        baseGrandTotal: true,
        baseInWords: true,
        baseNetTotal: true,
        baseRoundedTotal: true,
        baseRoundingAdjustment: true,
        baseTaxWithholdingNetTotal: true,
        baseTaxesAndChargesAdded: true,
        baseTaxesAndChargesDeducted: true,
        baseTotal: true,
        baseTotalTaxesAndCharges: true,
        billingAddress: true,
        billingAddressDisplay: true,
        buyingPriceList: true,
        company: true,
        contactDisplay: true,
        contactEmail: true,
        contactMobile: true,
        contactPerson: true,
        conversionRate: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        currency: true,
        customer: true,
        customerContactDisplay: true,
        customerContactEmail: true,
        customerContactMobile: true,
        customerContactPerson: true,
        customerName: true,
        disableRoundedTotal: true,
        discountAmount: true,
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
        isInternalSupplier: true,
        isOldSubcontractingFlow: true,
        isSubcontracted: true,
        language: true,
        letterHead: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namedPlace: true,
        namingSeries: true,
        netTotal: true,
        orderConfirmationDate: true,
        orderConfirmationNo: true,
        otherChargesCalculation: true,
        owner: true,
        partyAccountCurrency: true,
        paymentTermsTemplate: true,
        perBilled: true,
        perReceived: true,
        plcConversionRate: true,
        priceListCurrency: true,
        project: true,
        refSq: true,
        representsCompany: true,
        roundedTotal: true,
        roundingAdjustment: true,
        scanBarcode: true,
        scheduleDate: true,
        selectPrintHeading: true,
        setFromWarehouse: true,
        setReserveWarehouse: true,
        setWarehouse: true,
        shippingAddress: true,
        shippingAddressDisplay: true,
        shippingRule: true,
        status: true,
        supplier: true,
        supplierAddress: true,
        supplierName: true,
        supplierWarehouse: true,
        taxCategory: true,
        taxWithholdingCategory: true,
        taxWithholdingNetTotal: true,
        taxesAndCharges: true,
        taxesAndChargesAdded: true,
        taxesAndChargesDeducted: true,
        tcName: true,
        terms: true,
        title: true,
        toDate: true,
        total: true,
        totalNetWeight: true,
        totalQty: true,
        totalTaxesAndCharges: true,
        transactionDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PurchaseOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async purchaseOrder(
    @common.Param() params: PurchaseOrderWhereUniqueInput
  ): Promise<PurchaseOrder | null> {
    const result = await this.service.purchaseOrder({
      where: params,
      select: {
        additionalDiscountPercentage: true,
        addressDisplay: true,
        advancePaid: true,
        amendedFrom: true,
        applyDiscountOn: true,
        applyTds: true,
        autoRepeat: true,
        baseDiscountAmount: true,
        baseGrandTotal: true,
        baseInWords: true,
        baseNetTotal: true,
        baseRoundedTotal: true,
        baseRoundingAdjustment: true,
        baseTaxWithholdingNetTotal: true,
        baseTaxesAndChargesAdded: true,
        baseTaxesAndChargesDeducted: true,
        baseTotal: true,
        baseTotalTaxesAndCharges: true,
        billingAddress: true,
        billingAddressDisplay: true,
        buyingPriceList: true,
        company: true,
        contactDisplay: true,
        contactEmail: true,
        contactMobile: true,
        contactPerson: true,
        conversionRate: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        currency: true,
        customer: true,
        customerContactDisplay: true,
        customerContactEmail: true,
        customerContactMobile: true,
        customerContactPerson: true,
        customerName: true,
        disableRoundedTotal: true,
        discountAmount: true,
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
        isInternalSupplier: true,
        isOldSubcontractingFlow: true,
        isSubcontracted: true,
        language: true,
        letterHead: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namedPlace: true,
        namingSeries: true,
        netTotal: true,
        orderConfirmationDate: true,
        orderConfirmationNo: true,
        otherChargesCalculation: true,
        owner: true,
        partyAccountCurrency: true,
        paymentTermsTemplate: true,
        perBilled: true,
        perReceived: true,
        plcConversionRate: true,
        priceListCurrency: true,
        project: true,
        refSq: true,
        representsCompany: true,
        roundedTotal: true,
        roundingAdjustment: true,
        scanBarcode: true,
        scheduleDate: true,
        selectPrintHeading: true,
        setFromWarehouse: true,
        setReserveWarehouse: true,
        setWarehouse: true,
        shippingAddress: true,
        shippingAddressDisplay: true,
        shippingRule: true,
        status: true,
        supplier: true,
        supplierAddress: true,
        supplierName: true,
        supplierWarehouse: true,
        taxCategory: true,
        taxWithholdingCategory: true,
        taxWithholdingNetTotal: true,
        taxesAndCharges: true,
        taxesAndChargesAdded: true,
        taxesAndChargesDeducted: true,
        tcName: true,
        terms: true,
        title: true,
        toDate: true,
        total: true,
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
  @swagger.ApiOkResponse({ type: PurchaseOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePurchaseOrder(
    @common.Param() params: PurchaseOrderWhereUniqueInput,
    @common.Body() data: PurchaseOrderUpdateInput
  ): Promise<PurchaseOrder | null> {
    try {
      return await this.service.updatePurchaseOrder({
        where: params,
        data: data,
        select: {
          additionalDiscountPercentage: true,
          addressDisplay: true,
          advancePaid: true,
          amendedFrom: true,
          applyDiscountOn: true,
          applyTds: true,
          autoRepeat: true,
          baseDiscountAmount: true,
          baseGrandTotal: true,
          baseInWords: true,
          baseNetTotal: true,
          baseRoundedTotal: true,
          baseRoundingAdjustment: true,
          baseTaxWithholdingNetTotal: true,
          baseTaxesAndChargesAdded: true,
          baseTaxesAndChargesDeducted: true,
          baseTotal: true,
          baseTotalTaxesAndCharges: true,
          billingAddress: true,
          billingAddressDisplay: true,
          buyingPriceList: true,
          company: true,
          contactDisplay: true,
          contactEmail: true,
          contactMobile: true,
          contactPerson: true,
          conversionRate: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          currency: true,
          customer: true,
          customerContactDisplay: true,
          customerContactEmail: true,
          customerContactMobile: true,
          customerContactPerson: true,
          customerName: true,
          disableRoundedTotal: true,
          discountAmount: true,
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
          isInternalSupplier: true,
          isOldSubcontractingFlow: true,
          isSubcontracted: true,
          language: true,
          letterHead: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namedPlace: true,
          namingSeries: true,
          netTotal: true,
          orderConfirmationDate: true,
          orderConfirmationNo: true,
          otherChargesCalculation: true,
          owner: true,
          partyAccountCurrency: true,
          paymentTermsTemplate: true,
          perBilled: true,
          perReceived: true,
          plcConversionRate: true,
          priceListCurrency: true,
          project: true,
          refSq: true,
          representsCompany: true,
          roundedTotal: true,
          roundingAdjustment: true,
          scanBarcode: true,
          scheduleDate: true,
          selectPrintHeading: true,
          setFromWarehouse: true,
          setReserveWarehouse: true,
          setWarehouse: true,
          shippingAddress: true,
          shippingAddressDisplay: true,
          shippingRule: true,
          status: true,
          supplier: true,
          supplierAddress: true,
          supplierName: true,
          supplierWarehouse: true,
          taxCategory: true,
          taxWithholdingCategory: true,
          taxWithholdingNetTotal: true,
          taxesAndCharges: true,
          taxesAndChargesAdded: true,
          taxesAndChargesDeducted: true,
          tcName: true,
          terms: true,
          title: true,
          toDate: true,
          total: true,
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
  @swagger.ApiOkResponse({ type: PurchaseOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePurchaseOrder(
    @common.Param() params: PurchaseOrderWhereUniqueInput
  ): Promise<PurchaseOrder | null> {
    try {
      return await this.service.deletePurchaseOrder({
        where: params,
        select: {
          additionalDiscountPercentage: true,
          addressDisplay: true,
          advancePaid: true,
          amendedFrom: true,
          applyDiscountOn: true,
          applyTds: true,
          autoRepeat: true,
          baseDiscountAmount: true,
          baseGrandTotal: true,
          baseInWords: true,
          baseNetTotal: true,
          baseRoundedTotal: true,
          baseRoundingAdjustment: true,
          baseTaxWithholdingNetTotal: true,
          baseTaxesAndChargesAdded: true,
          baseTaxesAndChargesDeducted: true,
          baseTotal: true,
          baseTotalTaxesAndCharges: true,
          billingAddress: true,
          billingAddressDisplay: true,
          buyingPriceList: true,
          company: true,
          contactDisplay: true,
          contactEmail: true,
          contactMobile: true,
          contactPerson: true,
          conversionRate: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          currency: true,
          customer: true,
          customerContactDisplay: true,
          customerContactEmail: true,
          customerContactMobile: true,
          customerContactPerson: true,
          customerName: true,
          disableRoundedTotal: true,
          discountAmount: true,
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
          isInternalSupplier: true,
          isOldSubcontractingFlow: true,
          isSubcontracted: true,
          language: true,
          letterHead: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namedPlace: true,
          namingSeries: true,
          netTotal: true,
          orderConfirmationDate: true,
          orderConfirmationNo: true,
          otherChargesCalculation: true,
          owner: true,
          partyAccountCurrency: true,
          paymentTermsTemplate: true,
          perBilled: true,
          perReceived: true,
          plcConversionRate: true,
          priceListCurrency: true,
          project: true,
          refSq: true,
          representsCompany: true,
          roundedTotal: true,
          roundingAdjustment: true,
          scanBarcode: true,
          scheduleDate: true,
          selectPrintHeading: true,
          setFromWarehouse: true,
          setReserveWarehouse: true,
          setWarehouse: true,
          shippingAddress: true,
          shippingAddressDisplay: true,
          shippingRule: true,
          status: true,
          supplier: true,
          supplierAddress: true,
          supplierName: true,
          supplierWarehouse: true,
          taxCategory: true,
          taxWithholdingCategory: true,
          taxWithholdingNetTotal: true,
          taxesAndCharges: true,
          taxesAndChargesAdded: true,
          taxesAndChargesDeducted: true,
          tcName: true,
          terms: true,
          title: true,
          toDate: true,
          total: true,
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
