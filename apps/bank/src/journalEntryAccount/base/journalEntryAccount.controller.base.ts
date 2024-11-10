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
import { JournalEntryAccountService } from "../journalEntryAccount.service";
import { JournalEntryAccountCreateInput } from "./JournalEntryAccountCreateInput";
import { JournalEntryAccount } from "./JournalEntryAccount";
import { JournalEntryAccountFindManyArgs } from "./JournalEntryAccountFindManyArgs";
import { JournalEntryAccountWhereUniqueInput } from "./JournalEntryAccountWhereUniqueInput";
import { JournalEntryAccountUpdateInput } from "./JournalEntryAccountUpdateInput";

export class JournalEntryAccountControllerBase {
  constructor(protected readonly service: JournalEntryAccountService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: JournalEntryAccount })
  async createJournalEntryAccount(
    @common.Body() data: JournalEntryAccountCreateInput
  ): Promise<JournalEntryAccount> {
    return await this.service.createJournalEntryAccount({
      data: data,
      select: {
        account: true,
        accountCurrency: true,
        accountType: true,
        againstAccount: true,
        bankAccount: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        credit: true,
        creditInAccountCurrency: true,
        debit: true,
        debitInAccountCurrency: true,
        docstatus: true,
        exchangeRate: true,
        id: true,
        idx: true,
        isAdvance: true,
        modified: true,
        modifiedBy: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        party: true,
        partyType: true,
        project: true,
        referenceDetailNo: true,
        referenceDueDate: true,
        referenceName: true,
        referenceType: true,
        updatedAt: true,
        userRemark: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [JournalEntryAccount] })
  @ApiNestedQuery(JournalEntryAccountFindManyArgs)
  async journalEntryAccounts(
    @common.Req() request: Request
  ): Promise<JournalEntryAccount[]> {
    const args = plainToClass(JournalEntryAccountFindManyArgs, request.query);
    return this.service.journalEntryAccounts({
      ...args,
      select: {
        account: true,
        accountCurrency: true,
        accountType: true,
        againstAccount: true,
        bankAccount: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        credit: true,
        creditInAccountCurrency: true,
        debit: true,
        debitInAccountCurrency: true,
        docstatus: true,
        exchangeRate: true,
        id: true,
        idx: true,
        isAdvance: true,
        modified: true,
        modifiedBy: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        party: true,
        partyType: true,
        project: true,
        referenceDetailNo: true,
        referenceDueDate: true,
        referenceName: true,
        referenceType: true,
        updatedAt: true,
        userRemark: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: JournalEntryAccount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async journalEntryAccount(
    @common.Param() params: JournalEntryAccountWhereUniqueInput
  ): Promise<JournalEntryAccount | null> {
    const result = await this.service.journalEntryAccount({
      where: params,
      select: {
        account: true,
        accountCurrency: true,
        accountType: true,
        againstAccount: true,
        bankAccount: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        credit: true,
        creditInAccountCurrency: true,
        debit: true,
        debitInAccountCurrency: true,
        docstatus: true,
        exchangeRate: true,
        id: true,
        idx: true,
        isAdvance: true,
        modified: true,
        modifiedBy: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        party: true,
        partyType: true,
        project: true,
        referenceDetailNo: true,
        referenceDueDate: true,
        referenceName: true,
        referenceType: true,
        updatedAt: true,
        userRemark: true,
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
  @swagger.ApiOkResponse({ type: JournalEntryAccount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateJournalEntryAccount(
    @common.Param() params: JournalEntryAccountWhereUniqueInput,
    @common.Body() data: JournalEntryAccountUpdateInput
  ): Promise<JournalEntryAccount | null> {
    try {
      return await this.service.updateJournalEntryAccount({
        where: params,
        data: data,
        select: {
          account: true,
          accountCurrency: true,
          accountType: true,
          againstAccount: true,
          bankAccount: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          credit: true,
          creditInAccountCurrency: true,
          debit: true,
          debitInAccountCurrency: true,
          docstatus: true,
          exchangeRate: true,
          id: true,
          idx: true,
          isAdvance: true,
          modified: true,
          modifiedBy: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          party: true,
          partyType: true,
          project: true,
          referenceDetailNo: true,
          referenceDueDate: true,
          referenceName: true,
          referenceType: true,
          updatedAt: true,
          userRemark: true,
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
  @swagger.ApiOkResponse({ type: JournalEntryAccount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteJournalEntryAccount(
    @common.Param() params: JournalEntryAccountWhereUniqueInput
  ): Promise<JournalEntryAccount | null> {
    try {
      return await this.service.deleteJournalEntryAccount({
        where: params,
        select: {
          account: true,
          accountCurrency: true,
          accountType: true,
          againstAccount: true,
          bankAccount: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          credit: true,
          creditInAccountCurrency: true,
          debit: true,
          debitInAccountCurrency: true,
          docstatus: true,
          exchangeRate: true,
          id: true,
          idx: true,
          isAdvance: true,
          modified: true,
          modifiedBy: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          party: true,
          partyType: true,
          project: true,
          referenceDetailNo: true,
          referenceDueDate: true,
          referenceName: true,
          referenceType: true,
          updatedAt: true,
          userRemark: true,
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