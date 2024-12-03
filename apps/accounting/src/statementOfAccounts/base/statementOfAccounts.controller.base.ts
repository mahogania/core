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
import { StatementOfAccountsService } from "../statementOfAccounts.service";
import { StatementOfAccountsCreateInput } from "./StatementOfAccountsCreateInput";
import { StatementOfAccounts } from "./StatementOfAccounts";
import { StatementOfAccountsFindManyArgs } from "./StatementOfAccountsFindManyArgs";
import { StatementOfAccountsWhereUniqueInput } from "./StatementOfAccountsWhereUniqueInput";
import { StatementOfAccountsUpdateInput } from "./StatementOfAccountsUpdateInput";

export class StatementOfAccountsControllerBase {
  constructor(protected readonly service: StatementOfAccountsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StatementOfAccounts })
  async createStatementOfAccounts(
    @common.Body() data: StatementOfAccountsCreateInput
  ): Promise<StatementOfAccounts> {
    return await this.service.createStatementOfAccounts({
      data: data,
      select: {
        account: true,
        ageingBasedOn: true,
        basedOnPaymentTerms: true,
        body: true,
        ccTo: true,
        collectionName: true,
        company: true,
        createdAt: true,
        currency: true,
        customerCollection: true,
        docstatus: true,
        enableAutoEmail: true,
        filterDuration: true,
        financeBook: true,
        frequency: true,
        fromDate: true,
        groupBy: true,
        id: true,
        idx: true,
        ignoreCrDrNotes: true,
        ignoreExchangeRateRevaluationJournals: true,
        includeAgeing: true,
        includeBreak: true,
        letterHead: true,
        modifiedBy: true,
        name: true,
        orientation: true,
        owner: true,
        paymentTermsTemplate: true,
        pdfName: true,
        postingDate: true,
        primaryMandatory: true,
        report: true,
        salesPartner: true,
        salesPerson: true,
        sender: true,
        showNetValuesInPartyAccount: true,
        startDate: true,
        subject: true,
        termsAndConditions: true,
        territory: true,
        toDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [StatementOfAccounts] })
  @ApiNestedQuery(StatementOfAccountsFindManyArgs)
  async statementOfAccountsItems(
    @common.Req() request: Request
  ): Promise<StatementOfAccounts[]> {
    const args = plainToClass(StatementOfAccountsFindManyArgs, request.query);
    return this.service.statementOfAccountsItems({
      ...args,
      select: {
        account: true,
        ageingBasedOn: true,
        basedOnPaymentTerms: true,
        body: true,
        ccTo: true,
        collectionName: true,
        company: true,
        createdAt: true,
        currency: true,
        customerCollection: true,
        docstatus: true,
        enableAutoEmail: true,
        filterDuration: true,
        financeBook: true,
        frequency: true,
        fromDate: true,
        groupBy: true,
        id: true,
        idx: true,
        ignoreCrDrNotes: true,
        ignoreExchangeRateRevaluationJournals: true,
        includeAgeing: true,
        includeBreak: true,
        letterHead: true,
        modifiedBy: true,
        name: true,
        orientation: true,
        owner: true,
        paymentTermsTemplate: true,
        pdfName: true,
        postingDate: true,
        primaryMandatory: true,
        report: true,
        salesPartner: true,
        salesPerson: true,
        sender: true,
        showNetValuesInPartyAccount: true,
        startDate: true,
        subject: true,
        termsAndConditions: true,
        territory: true,
        toDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: StatementOfAccounts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async statementOfAccounts(
    @common.Param() params: StatementOfAccountsWhereUniqueInput
  ): Promise<StatementOfAccounts | null> {
    const result = await this.service.statementOfAccounts({
      where: params,
      select: {
        account: true,
        ageingBasedOn: true,
        basedOnPaymentTerms: true,
        body: true,
        ccTo: true,
        collectionName: true,
        company: true,
        createdAt: true,
        currency: true,
        customerCollection: true,
        docstatus: true,
        enableAutoEmail: true,
        filterDuration: true,
        financeBook: true,
        frequency: true,
        fromDate: true,
        groupBy: true,
        id: true,
        idx: true,
        ignoreCrDrNotes: true,
        ignoreExchangeRateRevaluationJournals: true,
        includeAgeing: true,
        includeBreak: true,
        letterHead: true,
        modifiedBy: true,
        name: true,
        orientation: true,
        owner: true,
        paymentTermsTemplate: true,
        pdfName: true,
        postingDate: true,
        primaryMandatory: true,
        report: true,
        salesPartner: true,
        salesPerson: true,
        sender: true,
        showNetValuesInPartyAccount: true,
        startDate: true,
        subject: true,
        termsAndConditions: true,
        territory: true,
        toDate: true,
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
  @swagger.ApiOkResponse({ type: StatementOfAccounts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStatementOfAccounts(
    @common.Param() params: StatementOfAccountsWhereUniqueInput,
    @common.Body() data: StatementOfAccountsUpdateInput
  ): Promise<StatementOfAccounts | null> {
    try {
      return await this.service.updateStatementOfAccounts({
        where: params,
        data: data,
        select: {
          account: true,
          ageingBasedOn: true,
          basedOnPaymentTerms: true,
          body: true,
          ccTo: true,
          collectionName: true,
          company: true,
          createdAt: true,
          currency: true,
          customerCollection: true,
          docstatus: true,
          enableAutoEmail: true,
          filterDuration: true,
          financeBook: true,
          frequency: true,
          fromDate: true,
          groupBy: true,
          id: true,
          idx: true,
          ignoreCrDrNotes: true,
          ignoreExchangeRateRevaluationJournals: true,
          includeAgeing: true,
          includeBreak: true,
          letterHead: true,
          modifiedBy: true,
          name: true,
          orientation: true,
          owner: true,
          paymentTermsTemplate: true,
          pdfName: true,
          postingDate: true,
          primaryMandatory: true,
          report: true,
          salesPartner: true,
          salesPerson: true,
          sender: true,
          showNetValuesInPartyAccount: true,
          startDate: true,
          subject: true,
          termsAndConditions: true,
          territory: true,
          toDate: true,
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
  @swagger.ApiOkResponse({ type: StatementOfAccounts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStatementOfAccounts(
    @common.Param() params: StatementOfAccountsWhereUniqueInput
  ): Promise<StatementOfAccounts | null> {
    try {
      return await this.service.deleteStatementOfAccounts({
        where: params,
        select: {
          account: true,
          ageingBasedOn: true,
          basedOnPaymentTerms: true,
          body: true,
          ccTo: true,
          collectionName: true,
          company: true,
          createdAt: true,
          currency: true,
          customerCollection: true,
          docstatus: true,
          enableAutoEmail: true,
          filterDuration: true,
          financeBook: true,
          frequency: true,
          fromDate: true,
          groupBy: true,
          id: true,
          idx: true,
          ignoreCrDrNotes: true,
          ignoreExchangeRateRevaluationJournals: true,
          includeAgeing: true,
          includeBreak: true,
          letterHead: true,
          modifiedBy: true,
          name: true,
          orientation: true,
          owner: true,
          paymentTermsTemplate: true,
          pdfName: true,
          postingDate: true,
          primaryMandatory: true,
          report: true,
          salesPartner: true,
          salesPerson: true,
          sender: true,
          showNetValuesInPartyAccount: true,
          startDate: true,
          subject: true,
          termsAndConditions: true,
          territory: true,
          toDate: true,
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
