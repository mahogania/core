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
import { BankTransactionService } from "../bankTransaction.service";
import { BankTransactionCreateInput } from "./BankTransactionCreateInput";
import { BankTransaction } from "./BankTransaction";
import { BankTransactionFindManyArgs } from "./BankTransactionFindManyArgs";
import { BankTransactionWhereUniqueInput } from "./BankTransactionWhereUniqueInput";
import { BankTransactionUpdateInput } from "./BankTransactionUpdateInput";

export class BankTransactionControllerBase {
  constructor(protected readonly service: BankTransactionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BankTransaction })
  async createBankTransaction(
    @common.Body() data: BankTransactionCreateInput
  ): Promise<BankTransaction> {
    return await this.service.createBankTransaction({
      data: data,
      select: {
        allocatedAmount: true,
        amendedFrom: true,
        bankAccount: true,
        bankPartyAccountNumber: true,
        bankPartyIban: true,
        bankPartyName: true,
        company: true,
        createdAt: true,
        creation: true,
        currency: true,
        date: true,
        deposit: true,
        description: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        party: true,
        partyType: true,
        referenceNumber: true,
        status: true,
        transactionId: true,
        transactionType: true,
        unallocatedAmount: true,
        updatedAt: true,
        withdrawal: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BankTransaction] })
  @ApiNestedQuery(BankTransactionFindManyArgs)
  async bankTransactions(
    @common.Req() request: Request
  ): Promise<BankTransaction[]> {
    const args = plainToClass(BankTransactionFindManyArgs, request.query);
    return this.service.bankTransactions({
      ...args,
      select: {
        allocatedAmount: true,
        amendedFrom: true,
        bankAccount: true,
        bankPartyAccountNumber: true,
        bankPartyIban: true,
        bankPartyName: true,
        company: true,
        createdAt: true,
        creation: true,
        currency: true,
        date: true,
        deposit: true,
        description: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        party: true,
        partyType: true,
        referenceNumber: true,
        status: true,
        transactionId: true,
        transactionType: true,
        unallocatedAmount: true,
        updatedAt: true,
        withdrawal: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BankTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async bankTransaction(
    @common.Param() params: BankTransactionWhereUniqueInput
  ): Promise<BankTransaction | null> {
    const result = await this.service.bankTransaction({
      where: params,
      select: {
        allocatedAmount: true,
        amendedFrom: true,
        bankAccount: true,
        bankPartyAccountNumber: true,
        bankPartyIban: true,
        bankPartyName: true,
        company: true,
        createdAt: true,
        creation: true,
        currency: true,
        date: true,
        deposit: true,
        description: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        party: true,
        partyType: true,
        referenceNumber: true,
        status: true,
        transactionId: true,
        transactionType: true,
        unallocatedAmount: true,
        updatedAt: true,
        withdrawal: true,
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
  @swagger.ApiOkResponse({ type: BankTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBankTransaction(
    @common.Param() params: BankTransactionWhereUniqueInput,
    @common.Body() data: BankTransactionUpdateInput
  ): Promise<BankTransaction | null> {
    try {
      return await this.service.updateBankTransaction({
        where: params,
        data: data,
        select: {
          allocatedAmount: true,
          amendedFrom: true,
          bankAccount: true,
          bankPartyAccountNumber: true,
          bankPartyIban: true,
          bankPartyName: true,
          company: true,
          createdAt: true,
          creation: true,
          currency: true,
          date: true,
          deposit: true,
          description: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namingSeries: true,
          owner: true,
          party: true,
          partyType: true,
          referenceNumber: true,
          status: true,
          transactionId: true,
          transactionType: true,
          unallocatedAmount: true,
          updatedAt: true,
          withdrawal: true,
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
  @swagger.ApiOkResponse({ type: BankTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBankTransaction(
    @common.Param() params: BankTransactionWhereUniqueInput
  ): Promise<BankTransaction | null> {
    try {
      return await this.service.deleteBankTransaction({
        where: params,
        select: {
          allocatedAmount: true,
          amendedFrom: true,
          bankAccount: true,
          bankPartyAccountNumber: true,
          bankPartyIban: true,
          bankPartyName: true,
          company: true,
          createdAt: true,
          creation: true,
          currency: true,
          date: true,
          deposit: true,
          description: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namingSeries: true,
          owner: true,
          party: true,
          partyType: true,
          referenceNumber: true,
          status: true,
          transactionId: true,
          transactionType: true,
          unallocatedAmount: true,
          updatedAt: true,
          withdrawal: true,
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
