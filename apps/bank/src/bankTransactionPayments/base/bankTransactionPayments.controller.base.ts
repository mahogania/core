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
import { BankTransactionPaymentsService } from "../bankTransactionPayments.service";
import { BankTransactionPaymentsCreateInput } from "./BankTransactionPaymentsCreateInput";
import { BankTransactionPayments } from "./BankTransactionPayments";
import { BankTransactionPaymentsFindManyArgs } from "./BankTransactionPaymentsFindManyArgs";
import { BankTransactionPaymentsWhereUniqueInput } from "./BankTransactionPaymentsWhereUniqueInput";
import { BankTransactionPaymentsUpdateInput } from "./BankTransactionPaymentsUpdateInput";

export class BankTransactionPaymentsControllerBase {
  constructor(protected readonly service: BankTransactionPaymentsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BankTransactionPayments })
  async createBankTransactionPayments(
    @common.Body() data: BankTransactionPaymentsCreateInput
  ): Promise<BankTransactionPayments> {
    return await this.service.createBankTransactionPayments({
      data: data,
      select: {
        allocatedAmount: true,
        clearanceDate: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        paymentDocument: true,
        paymentEntry: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BankTransactionPayments] })
  @ApiNestedQuery(BankTransactionPaymentsFindManyArgs)
  async bankTransactionPaymentsItems(
    @common.Req() request: Request
  ): Promise<BankTransactionPayments[]> {
    const args = plainToClass(
      BankTransactionPaymentsFindManyArgs,
      request.query
    );
    return this.service.bankTransactionPaymentsItems({
      ...args,
      select: {
        allocatedAmount: true,
        clearanceDate: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        paymentDocument: true,
        paymentEntry: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BankTransactionPayments })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async bankTransactionPayments(
    @common.Param() params: BankTransactionPaymentsWhereUniqueInput
  ): Promise<BankTransactionPayments | null> {
    const result = await this.service.bankTransactionPayments({
      where: params,
      select: {
        allocatedAmount: true,
        clearanceDate: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        paymentDocument: true,
        paymentEntry: true,
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
  @swagger.ApiOkResponse({ type: BankTransactionPayments })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBankTransactionPayments(
    @common.Param() params: BankTransactionPaymentsWhereUniqueInput,
    @common.Body() data: BankTransactionPaymentsUpdateInput
  ): Promise<BankTransactionPayments | null> {
    try {
      return await this.service.updateBankTransactionPayments({
        where: params,
        data: data,
        select: {
          allocatedAmount: true,
          clearanceDate: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          paymentDocument: true,
          paymentEntry: true,
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
  @swagger.ApiOkResponse({ type: BankTransactionPayments })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBankTransactionPayments(
    @common.Param() params: BankTransactionPaymentsWhereUniqueInput
  ): Promise<BankTransactionPayments | null> {
    try {
      return await this.service.deleteBankTransactionPayments({
        where: params,
        select: {
          allocatedAmount: true,
          clearanceDate: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          paymentDocument: true,
          paymentEntry: true,
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
