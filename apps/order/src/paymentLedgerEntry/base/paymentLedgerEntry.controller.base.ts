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
import { PaymentLedgerEntryService } from "../paymentLedgerEntry.service";
import { PaymentLedgerEntryCreateInput } from "./PaymentLedgerEntryCreateInput";
import { PaymentLedgerEntry } from "./PaymentLedgerEntry";
import { PaymentLedgerEntryFindManyArgs } from "./PaymentLedgerEntryFindManyArgs";
import { PaymentLedgerEntryWhereUniqueInput } from "./PaymentLedgerEntryWhereUniqueInput";
import { PaymentLedgerEntryUpdateInput } from "./PaymentLedgerEntryUpdateInput";

export class PaymentLedgerEntryControllerBase {
  constructor(protected readonly service: PaymentLedgerEntryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentLedgerEntry })
  async createPaymentLedgerEntry(
    @common.Body() data: PaymentLedgerEntryCreateInput
  ): Promise<PaymentLedgerEntry> {
    return await this.service.createPaymentLedgerEntry({
      data: data,
      select: {
        account: true,
        accountCurrency: true,
        accountType: true,
        againstVoucherNo: true,
        againstVoucherType: true,
        amount: true,
        amountInAccountCurrency: true,
        company: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        delinked: true,
        docstatus: true,
        dueDate: true,
        financeBook: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        party: true,
        partyType: true,
        postingDate: true,
        remarks: true,
        updatedAt: true,
        voucherDetailNo: true,
        voucherNo: true,
        voucherType: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentLedgerEntry] })
  @ApiNestedQuery(PaymentLedgerEntryFindManyArgs)
  async paymentLedgerEntries(
    @common.Req() request: Request
  ): Promise<PaymentLedgerEntry[]> {
    const args = plainToClass(PaymentLedgerEntryFindManyArgs, request.query);
    return this.service.paymentLedgerEntries({
      ...args,
      select: {
        account: true,
        accountCurrency: true,
        accountType: true,
        againstVoucherNo: true,
        againstVoucherType: true,
        amount: true,
        amountInAccountCurrency: true,
        company: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        delinked: true,
        docstatus: true,
        dueDate: true,
        financeBook: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        party: true,
        partyType: true,
        postingDate: true,
        remarks: true,
        updatedAt: true,
        voucherDetailNo: true,
        voucherNo: true,
        voucherType: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentLedgerEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async paymentLedgerEntry(
    @common.Param() params: PaymentLedgerEntryWhereUniqueInput
  ): Promise<PaymentLedgerEntry | null> {
    const result = await this.service.paymentLedgerEntry({
      where: params,
      select: {
        account: true,
        accountCurrency: true,
        accountType: true,
        againstVoucherNo: true,
        againstVoucherType: true,
        amount: true,
        amountInAccountCurrency: true,
        company: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        delinked: true,
        docstatus: true,
        dueDate: true,
        financeBook: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        party: true,
        partyType: true,
        postingDate: true,
        remarks: true,
        updatedAt: true,
        voucherDetailNo: true,
        voucherNo: true,
        voucherType: true,
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
  @swagger.ApiOkResponse({ type: PaymentLedgerEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePaymentLedgerEntry(
    @common.Param() params: PaymentLedgerEntryWhereUniqueInput,
    @common.Body() data: PaymentLedgerEntryUpdateInput
  ): Promise<PaymentLedgerEntry | null> {
    try {
      return await this.service.updatePaymentLedgerEntry({
        where: params,
        data: data,
        select: {
          account: true,
          accountCurrency: true,
          accountType: true,
          againstVoucherNo: true,
          againstVoucherType: true,
          amount: true,
          amountInAccountCurrency: true,
          company: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          delinked: true,
          docstatus: true,
          dueDate: true,
          financeBook: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          party: true,
          partyType: true,
          postingDate: true,
          remarks: true,
          updatedAt: true,
          voucherDetailNo: true,
          voucherNo: true,
          voucherType: true,
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
  @swagger.ApiOkResponse({ type: PaymentLedgerEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePaymentLedgerEntry(
    @common.Param() params: PaymentLedgerEntryWhereUniqueInput
  ): Promise<PaymentLedgerEntry | null> {
    try {
      return await this.service.deletePaymentLedgerEntry({
        where: params,
        select: {
          account: true,
          accountCurrency: true,
          accountType: true,
          againstVoucherNo: true,
          againstVoucherType: true,
          amount: true,
          amountInAccountCurrency: true,
          company: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          delinked: true,
          docstatus: true,
          dueDate: true,
          financeBook: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          party: true,
          partyType: true,
          postingDate: true,
          remarks: true,
          updatedAt: true,
          voucherDetailNo: true,
          voucherNo: true,
          voucherType: true,
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
