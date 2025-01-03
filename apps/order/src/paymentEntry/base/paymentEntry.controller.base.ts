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
import { PaymentEntryService } from "../paymentEntry.service";
import { PaymentEntryCreateInput } from "./PaymentEntryCreateInput";
import { PaymentEntry } from "./PaymentEntry";
import { PaymentEntryFindManyArgs } from "./PaymentEntryFindManyArgs";
import { PaymentEntryWhereUniqueInput } from "./PaymentEntryWhereUniqueInput";
import { PaymentEntryUpdateInput } from "./PaymentEntryUpdateInput";

export class PaymentEntryControllerBase {
  constructor(protected readonly service: PaymentEntryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentEntry })
  async createPaymentEntry(
    @common.Body() data: PaymentEntryCreateInput
  ): Promise<PaymentEntry> {
    return await this.service.createPaymentEntry({
      data: data,
      select: {
        amendedFrom: true,
        applyTaxWithholdingAmount: true,
        autoRepeat: true,
        bank: true,
        bankAccount: true,
        bankAccountNo: true,
        baseInWords: true,
        basePaidAmount: true,
        basePaidAmountAfterTax: true,
        baseReceivedAmount: true,
        baseReceivedAmountAfterTax: true,
        baseTotalAllocatedAmount: true,
        baseTotalTaxesAndCharges: true,
        bookAdvancePaymentsInSeparatePartyAccount: true,
        clearanceDate: true,
        company: true,
        contactEmail: true,
        contactPerson: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        customRemarks: true,
        differenceAmount: true,
        docstatus: true,
        id: true,
        idx: true,
        inWords: true,
        isOpening: true,
        letterHead: true,
        modeOfPayment: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        paidAmount: true,
        paidAmountAfterTax: true,
        paidFrom: true,
        paidFromAccountBalance: true,
        paidFromAccountCurrency: true,
        paidFromAccountType: true,
        paidTo: true,
        paidToAccountBalance: true,
        paidToAccountCurrency: true,
        paidToAccountType: true,
        party: true,
        partyBalance: true,
        partyBankAccount: true,
        partyName: true,
        partyType: true,
        paymentOrder: true,
        paymentOrderStatus: true,
        paymentType: true,
        postingDate: true,
        printHeading: true,
        project: true,
        purchaseTaxesAndChargesTemplate: true,
        receivedAmount: true,
        receivedAmountAfterTax: true,
        reconcileOnAdvancePaymentDate: true,
        referenceDate: true,
        referenceNo: true,
        remarks: true,
        salesTaxesAndChargesTemplate: true,
        sourceExchangeRate: true,
        status: true,
        targetExchangeRate: true,
        taxWithholdingCategory: true,
        title: true,
        totalAllocatedAmount: true,
        totalTaxesAndCharges: true,
        unallocatedAmount: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentEntry] })
  @ApiNestedQuery(PaymentEntryFindManyArgs)
  async paymentEntries(
    @common.Req() request: Request
  ): Promise<PaymentEntry[]> {
    const args = plainToClass(PaymentEntryFindManyArgs, request.query);
    return this.service.paymentEntries({
      ...args,
      select: {
        amendedFrom: true,
        applyTaxWithholdingAmount: true,
        autoRepeat: true,
        bank: true,
        bankAccount: true,
        bankAccountNo: true,
        baseInWords: true,
        basePaidAmount: true,
        basePaidAmountAfterTax: true,
        baseReceivedAmount: true,
        baseReceivedAmountAfterTax: true,
        baseTotalAllocatedAmount: true,
        baseTotalTaxesAndCharges: true,
        bookAdvancePaymentsInSeparatePartyAccount: true,
        clearanceDate: true,
        company: true,
        contactEmail: true,
        contactPerson: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        customRemarks: true,
        differenceAmount: true,
        docstatus: true,
        id: true,
        idx: true,
        inWords: true,
        isOpening: true,
        letterHead: true,
        modeOfPayment: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        paidAmount: true,
        paidAmountAfterTax: true,
        paidFrom: true,
        paidFromAccountBalance: true,
        paidFromAccountCurrency: true,
        paidFromAccountType: true,
        paidTo: true,
        paidToAccountBalance: true,
        paidToAccountCurrency: true,
        paidToAccountType: true,
        party: true,
        partyBalance: true,
        partyBankAccount: true,
        partyName: true,
        partyType: true,
        paymentOrder: true,
        paymentOrderStatus: true,
        paymentType: true,
        postingDate: true,
        printHeading: true,
        project: true,
        purchaseTaxesAndChargesTemplate: true,
        receivedAmount: true,
        receivedAmountAfterTax: true,
        reconcileOnAdvancePaymentDate: true,
        referenceDate: true,
        referenceNo: true,
        remarks: true,
        salesTaxesAndChargesTemplate: true,
        sourceExchangeRate: true,
        status: true,
        targetExchangeRate: true,
        taxWithholdingCategory: true,
        title: true,
        totalAllocatedAmount: true,
        totalTaxesAndCharges: true,
        unallocatedAmount: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async paymentEntry(
    @common.Param() params: PaymentEntryWhereUniqueInput
  ): Promise<PaymentEntry | null> {
    const result = await this.service.paymentEntry({
      where: params,
      select: {
        amendedFrom: true,
        applyTaxWithholdingAmount: true,
        autoRepeat: true,
        bank: true,
        bankAccount: true,
        bankAccountNo: true,
        baseInWords: true,
        basePaidAmount: true,
        basePaidAmountAfterTax: true,
        baseReceivedAmount: true,
        baseReceivedAmountAfterTax: true,
        baseTotalAllocatedAmount: true,
        baseTotalTaxesAndCharges: true,
        bookAdvancePaymentsInSeparatePartyAccount: true,
        clearanceDate: true,
        company: true,
        contactEmail: true,
        contactPerson: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        customRemarks: true,
        differenceAmount: true,
        docstatus: true,
        id: true,
        idx: true,
        inWords: true,
        isOpening: true,
        letterHead: true,
        modeOfPayment: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        paidAmount: true,
        paidAmountAfterTax: true,
        paidFrom: true,
        paidFromAccountBalance: true,
        paidFromAccountCurrency: true,
        paidFromAccountType: true,
        paidTo: true,
        paidToAccountBalance: true,
        paidToAccountCurrency: true,
        paidToAccountType: true,
        party: true,
        partyBalance: true,
        partyBankAccount: true,
        partyName: true,
        partyType: true,
        paymentOrder: true,
        paymentOrderStatus: true,
        paymentType: true,
        postingDate: true,
        printHeading: true,
        project: true,
        purchaseTaxesAndChargesTemplate: true,
        receivedAmount: true,
        receivedAmountAfterTax: true,
        reconcileOnAdvancePaymentDate: true,
        referenceDate: true,
        referenceNo: true,
        remarks: true,
        salesTaxesAndChargesTemplate: true,
        sourceExchangeRate: true,
        status: true,
        targetExchangeRate: true,
        taxWithholdingCategory: true,
        title: true,
        totalAllocatedAmount: true,
        totalTaxesAndCharges: true,
        unallocatedAmount: true,
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
  @swagger.ApiOkResponse({ type: PaymentEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePaymentEntry(
    @common.Param() params: PaymentEntryWhereUniqueInput,
    @common.Body() data: PaymentEntryUpdateInput
  ): Promise<PaymentEntry | null> {
    try {
      return await this.service.updatePaymentEntry({
        where: params,
        data: data,
        select: {
          amendedFrom: true,
          applyTaxWithholdingAmount: true,
          autoRepeat: true,
          bank: true,
          bankAccount: true,
          bankAccountNo: true,
          baseInWords: true,
          basePaidAmount: true,
          basePaidAmountAfterTax: true,
          baseReceivedAmount: true,
          baseReceivedAmountAfterTax: true,
          baseTotalAllocatedAmount: true,
          baseTotalTaxesAndCharges: true,
          bookAdvancePaymentsInSeparatePartyAccount: true,
          clearanceDate: true,
          company: true,
          contactEmail: true,
          contactPerson: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          customRemarks: true,
          differenceAmount: true,
          docstatus: true,
          id: true,
          idx: true,
          inWords: true,
          isOpening: true,
          letterHead: true,
          modeOfPayment: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namingSeries: true,
          owner: true,
          paidAmount: true,
          paidAmountAfterTax: true,
          paidFrom: true,
          paidFromAccountBalance: true,
          paidFromAccountCurrency: true,
          paidFromAccountType: true,
          paidTo: true,
          paidToAccountBalance: true,
          paidToAccountCurrency: true,
          paidToAccountType: true,
          party: true,
          partyBalance: true,
          partyBankAccount: true,
          partyName: true,
          partyType: true,
          paymentOrder: true,
          paymentOrderStatus: true,
          paymentType: true,
          postingDate: true,
          printHeading: true,
          project: true,
          purchaseTaxesAndChargesTemplate: true,
          receivedAmount: true,
          receivedAmountAfterTax: true,
          reconcileOnAdvancePaymentDate: true,
          referenceDate: true,
          referenceNo: true,
          remarks: true,
          salesTaxesAndChargesTemplate: true,
          sourceExchangeRate: true,
          status: true,
          targetExchangeRate: true,
          taxWithholdingCategory: true,
          title: true,
          totalAllocatedAmount: true,
          totalTaxesAndCharges: true,
          unallocatedAmount: true,
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
  @swagger.ApiOkResponse({ type: PaymentEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePaymentEntry(
    @common.Param() params: PaymentEntryWhereUniqueInput
  ): Promise<PaymentEntry | null> {
    try {
      return await this.service.deletePaymentEntry({
        where: params,
        select: {
          amendedFrom: true,
          applyTaxWithholdingAmount: true,
          autoRepeat: true,
          bank: true,
          bankAccount: true,
          bankAccountNo: true,
          baseInWords: true,
          basePaidAmount: true,
          basePaidAmountAfterTax: true,
          baseReceivedAmount: true,
          baseReceivedAmountAfterTax: true,
          baseTotalAllocatedAmount: true,
          baseTotalTaxesAndCharges: true,
          bookAdvancePaymentsInSeparatePartyAccount: true,
          clearanceDate: true,
          company: true,
          contactEmail: true,
          contactPerson: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          customRemarks: true,
          differenceAmount: true,
          docstatus: true,
          id: true,
          idx: true,
          inWords: true,
          isOpening: true,
          letterHead: true,
          modeOfPayment: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namingSeries: true,
          owner: true,
          paidAmount: true,
          paidAmountAfterTax: true,
          paidFrom: true,
          paidFromAccountBalance: true,
          paidFromAccountCurrency: true,
          paidFromAccountType: true,
          paidTo: true,
          paidToAccountBalance: true,
          paidToAccountCurrency: true,
          paidToAccountType: true,
          party: true,
          partyBalance: true,
          partyBankAccount: true,
          partyName: true,
          partyType: true,
          paymentOrder: true,
          paymentOrderStatus: true,
          paymentType: true,
          postingDate: true,
          printHeading: true,
          project: true,
          purchaseTaxesAndChargesTemplate: true,
          receivedAmount: true,
          receivedAmountAfterTax: true,
          reconcileOnAdvancePaymentDate: true,
          referenceDate: true,
          referenceNo: true,
          remarks: true,
          salesTaxesAndChargesTemplate: true,
          sourceExchangeRate: true,
          status: true,
          targetExchangeRate: true,
          taxWithholdingCategory: true,
          title: true,
          totalAllocatedAmount: true,
          totalTaxesAndCharges: true,
          unallocatedAmount: true,
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
