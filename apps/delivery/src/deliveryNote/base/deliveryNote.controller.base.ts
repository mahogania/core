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
import { DeliveryNoteService } from "../deliveryNote.service";
import { DeliveryNoteCreateInput } from "./DeliveryNoteCreateInput";
import { DeliveryNote } from "./DeliveryNote";
import { DeliveryNoteFindManyArgs } from "./DeliveryNoteFindManyArgs";
import { DeliveryNoteWhereUniqueInput } from "./DeliveryNoteWhereUniqueInput";
import { DeliveryNoteUpdateInput } from "./DeliveryNoteUpdateInput";

export class DeliveryNoteControllerBase {
  constructor(protected readonly service: DeliveryNoteService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DeliveryNote })
  async createDeliveryNote(
    @common.Body() data: DeliveryNoteCreateInput
  ): Promise<DeliveryNote> {
    return await this.service.createDeliveryNote({
      data: data,
      select: {
        additionalDiscountPercentage: true,
        addressDisplay: true,
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
        campaign: true,
        commissionRate: true,
        company: true,
        companyAddress: true,
        companyAddressDisplay: true,
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
        customerAddress: true,
        customerGroup: true,
        customerName: true,
        disableRoundedTotal: true,
        discountAmount: true,
        dispatchAddress: true,
        dispatchAddressName: true,
        docstatus: true,
        driver: true,
        driverName: true,
        excisePage: true,
        grandTotal: true,
        groupSameItems: true,
        id: true,
        idx: true,
        ignorePricingRule: true,
        inWords: true,
        incoterm: true,
        installationStatus: true,
        instructions: true,
        interCompanyReference: true,
        isInternalCustomer: true,
        isReturn: true,
        issueCreditNote: true,
        language: true,
        letterHead: true,
        lrDate: true,
        lrNo: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namedPlace: true,
        namingSeries: true,
        netTotal: true,
        otherChargesCalculation: true,
        owner: true,
        perBilled: true,
        perInstalled: true,
        perReturned: true,
        pickList: true,
        plcConversionRate: true,
        poDate: true,
        poNo: true,
        postingDate: true,
        postingTime: true,
        priceListCurrency: true,
        printWithoutAmount: true,
        project: true,
        representsCompany: true,
        returnAgainst: true,
        roundedTotal: true,
        roundingAdjustment: true,
        salesPartner: true,
        scanBarcode: true,
        selectPrintHeading: true,
        sellingPriceList: true,
        setPostingTime: true,
        setTargetWarehouse: true,
        setWarehouse: true,
        shippingAddress: true,
        shippingAddressName: true,
        shippingRule: true,
        source: true,
        status: true,
        taxCategory: true,
        taxId: true,
        taxesAndCharges: true,
        tcName: true,
        terms: true,
        territory: true,
        title: true,
        total: true,
        totalCommission: true,
        totalNetWeight: true,
        totalQty: true,
        totalTaxesAndCharges: true,
        transporter: true,
        transporterName: true,
        updatedAt: true,
        vehicleNo: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DeliveryNote] })
  @ApiNestedQuery(DeliveryNoteFindManyArgs)
  async deliveryNotes(@common.Req() request: Request): Promise<DeliveryNote[]> {
    const args = plainToClass(DeliveryNoteFindManyArgs, request.query);
    return this.service.deliveryNotes({
      ...args,
      select: {
        additionalDiscountPercentage: true,
        addressDisplay: true,
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
        campaign: true,
        commissionRate: true,
        company: true,
        companyAddress: true,
        companyAddressDisplay: true,
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
        customerAddress: true,
        customerGroup: true,
        customerName: true,
        disableRoundedTotal: true,
        discountAmount: true,
        dispatchAddress: true,
        dispatchAddressName: true,
        docstatus: true,
        driver: true,
        driverName: true,
        excisePage: true,
        grandTotal: true,
        groupSameItems: true,
        id: true,
        idx: true,
        ignorePricingRule: true,
        inWords: true,
        incoterm: true,
        installationStatus: true,
        instructions: true,
        interCompanyReference: true,
        isInternalCustomer: true,
        isReturn: true,
        issueCreditNote: true,
        language: true,
        letterHead: true,
        lrDate: true,
        lrNo: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namedPlace: true,
        namingSeries: true,
        netTotal: true,
        otherChargesCalculation: true,
        owner: true,
        perBilled: true,
        perInstalled: true,
        perReturned: true,
        pickList: true,
        plcConversionRate: true,
        poDate: true,
        poNo: true,
        postingDate: true,
        postingTime: true,
        priceListCurrency: true,
        printWithoutAmount: true,
        project: true,
        representsCompany: true,
        returnAgainst: true,
        roundedTotal: true,
        roundingAdjustment: true,
        salesPartner: true,
        scanBarcode: true,
        selectPrintHeading: true,
        sellingPriceList: true,
        setPostingTime: true,
        setTargetWarehouse: true,
        setWarehouse: true,
        shippingAddress: true,
        shippingAddressName: true,
        shippingRule: true,
        source: true,
        status: true,
        taxCategory: true,
        taxId: true,
        taxesAndCharges: true,
        tcName: true,
        terms: true,
        territory: true,
        title: true,
        total: true,
        totalCommission: true,
        totalNetWeight: true,
        totalQty: true,
        totalTaxesAndCharges: true,
        transporter: true,
        transporterName: true,
        updatedAt: true,
        vehicleNo: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DeliveryNote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deliveryNote(
    @common.Param() params: DeliveryNoteWhereUniqueInput
  ): Promise<DeliveryNote | null> {
    const result = await this.service.deliveryNote({
      where: params,
      select: {
        additionalDiscountPercentage: true,
        addressDisplay: true,
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
        campaign: true,
        commissionRate: true,
        company: true,
        companyAddress: true,
        companyAddressDisplay: true,
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
        customerAddress: true,
        customerGroup: true,
        customerName: true,
        disableRoundedTotal: true,
        discountAmount: true,
        dispatchAddress: true,
        dispatchAddressName: true,
        docstatus: true,
        driver: true,
        driverName: true,
        excisePage: true,
        grandTotal: true,
        groupSameItems: true,
        id: true,
        idx: true,
        ignorePricingRule: true,
        inWords: true,
        incoterm: true,
        installationStatus: true,
        instructions: true,
        interCompanyReference: true,
        isInternalCustomer: true,
        isReturn: true,
        issueCreditNote: true,
        language: true,
        letterHead: true,
        lrDate: true,
        lrNo: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namedPlace: true,
        namingSeries: true,
        netTotal: true,
        otherChargesCalculation: true,
        owner: true,
        perBilled: true,
        perInstalled: true,
        perReturned: true,
        pickList: true,
        plcConversionRate: true,
        poDate: true,
        poNo: true,
        postingDate: true,
        postingTime: true,
        priceListCurrency: true,
        printWithoutAmount: true,
        project: true,
        representsCompany: true,
        returnAgainst: true,
        roundedTotal: true,
        roundingAdjustment: true,
        salesPartner: true,
        scanBarcode: true,
        selectPrintHeading: true,
        sellingPriceList: true,
        setPostingTime: true,
        setTargetWarehouse: true,
        setWarehouse: true,
        shippingAddress: true,
        shippingAddressName: true,
        shippingRule: true,
        source: true,
        status: true,
        taxCategory: true,
        taxId: true,
        taxesAndCharges: true,
        tcName: true,
        terms: true,
        territory: true,
        title: true,
        total: true,
        totalCommission: true,
        totalNetWeight: true,
        totalQty: true,
        totalTaxesAndCharges: true,
        transporter: true,
        transporterName: true,
        updatedAt: true,
        vehicleNo: true,
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
  @swagger.ApiOkResponse({ type: DeliveryNote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDeliveryNote(
    @common.Param() params: DeliveryNoteWhereUniqueInput,
    @common.Body() data: DeliveryNoteUpdateInput
  ): Promise<DeliveryNote | null> {
    try {
      return await this.service.updateDeliveryNote({
        where: params,
        data: data,
        select: {
          additionalDiscountPercentage: true,
          addressDisplay: true,
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
          campaign: true,
          commissionRate: true,
          company: true,
          companyAddress: true,
          companyAddressDisplay: true,
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
          customerAddress: true,
          customerGroup: true,
          customerName: true,
          disableRoundedTotal: true,
          discountAmount: true,
          dispatchAddress: true,
          dispatchAddressName: true,
          docstatus: true,
          driver: true,
          driverName: true,
          excisePage: true,
          grandTotal: true,
          groupSameItems: true,
          id: true,
          idx: true,
          ignorePricingRule: true,
          inWords: true,
          incoterm: true,
          installationStatus: true,
          instructions: true,
          interCompanyReference: true,
          isInternalCustomer: true,
          isReturn: true,
          issueCreditNote: true,
          language: true,
          letterHead: true,
          lrDate: true,
          lrNo: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namedPlace: true,
          namingSeries: true,
          netTotal: true,
          otherChargesCalculation: true,
          owner: true,
          perBilled: true,
          perInstalled: true,
          perReturned: true,
          pickList: true,
          plcConversionRate: true,
          poDate: true,
          poNo: true,
          postingDate: true,
          postingTime: true,
          priceListCurrency: true,
          printWithoutAmount: true,
          project: true,
          representsCompany: true,
          returnAgainst: true,
          roundedTotal: true,
          roundingAdjustment: true,
          salesPartner: true,
          scanBarcode: true,
          selectPrintHeading: true,
          sellingPriceList: true,
          setPostingTime: true,
          setTargetWarehouse: true,
          setWarehouse: true,
          shippingAddress: true,
          shippingAddressName: true,
          shippingRule: true,
          source: true,
          status: true,
          taxCategory: true,
          taxId: true,
          taxesAndCharges: true,
          tcName: true,
          terms: true,
          territory: true,
          title: true,
          total: true,
          totalCommission: true,
          totalNetWeight: true,
          totalQty: true,
          totalTaxesAndCharges: true,
          transporter: true,
          transporterName: true,
          updatedAt: true,
          vehicleNo: true,
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
  @swagger.ApiOkResponse({ type: DeliveryNote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDeliveryNote(
    @common.Param() params: DeliveryNoteWhereUniqueInput
  ): Promise<DeliveryNote | null> {
    try {
      return await this.service.deleteDeliveryNote({
        where: params,
        select: {
          additionalDiscountPercentage: true,
          addressDisplay: true,
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
          campaign: true,
          commissionRate: true,
          company: true,
          companyAddress: true,
          companyAddressDisplay: true,
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
          customerAddress: true,
          customerGroup: true,
          customerName: true,
          disableRoundedTotal: true,
          discountAmount: true,
          dispatchAddress: true,
          dispatchAddressName: true,
          docstatus: true,
          driver: true,
          driverName: true,
          excisePage: true,
          grandTotal: true,
          groupSameItems: true,
          id: true,
          idx: true,
          ignorePricingRule: true,
          inWords: true,
          incoterm: true,
          installationStatus: true,
          instructions: true,
          interCompanyReference: true,
          isInternalCustomer: true,
          isReturn: true,
          issueCreditNote: true,
          language: true,
          letterHead: true,
          lrDate: true,
          lrNo: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namedPlace: true,
          namingSeries: true,
          netTotal: true,
          otherChargesCalculation: true,
          owner: true,
          perBilled: true,
          perInstalled: true,
          perReturned: true,
          pickList: true,
          plcConversionRate: true,
          poDate: true,
          poNo: true,
          postingDate: true,
          postingTime: true,
          priceListCurrency: true,
          printWithoutAmount: true,
          project: true,
          representsCompany: true,
          returnAgainst: true,
          roundedTotal: true,
          roundingAdjustment: true,
          salesPartner: true,
          scanBarcode: true,
          selectPrintHeading: true,
          sellingPriceList: true,
          setPostingTime: true,
          setTargetWarehouse: true,
          setWarehouse: true,
          shippingAddress: true,
          shippingAddressName: true,
          shippingRule: true,
          source: true,
          status: true,
          taxCategory: true,
          taxId: true,
          taxesAndCharges: true,
          tcName: true,
          terms: true,
          territory: true,
          title: true,
          total: true,
          totalCommission: true,
          totalNetWeight: true,
          totalQty: true,
          totalTaxesAndCharges: true,
          transporter: true,
          transporterName: true,
          updatedAt: true,
          vehicleNo: true,
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
