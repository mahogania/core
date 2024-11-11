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
import { PaymentRequestService } from "../paymentRequest.service";
import { PaymentRequestCreateInput } from "./PaymentRequestCreateInput";
import { PaymentRequest } from "./PaymentRequest";
import { PaymentRequestFindManyArgs } from "./PaymentRequestFindManyArgs";
import { PaymentRequestWhereUniqueInput } from "./PaymentRequestWhereUniqueInput";
import { PaymentRequestUpdateInput } from "./PaymentRequestUpdateInput";

export class PaymentRequestControllerBase {
  constructor(protected readonly service: PaymentRequestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentRequest })
  async createPaymentRequest(
    @common.Body() data: PaymentRequestCreateInput
  ): Promise<PaymentRequest> {
    return await this.service.createPaymentRequest({
      data: data,
      select: {
        account: true,
        amendedFrom: true,
        bank: true,
        bankAccount: true,
        bankAccountNo: true,
        branchCode: true,
        company: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        currency: true,
        docstatus: true,
        emailTo: true,
        grandTotal: true,
        iban: true,
        id: true,
        idx: true,
        isASubscription: true,
        makeSalesInvoice: true,
        message: true,
        modeOfPayment: true,
        modified: true,
        modifiedBy: true,
        muteEmail: true,
        name: true,
        namingSeries: true,
        owner: true,
        party: true,
        partyType: true,
        paymentAccount: true,
        paymentChannel: true,
        paymentGateway: true,
        paymentGatewayAccount: true,
        paymentOrder: true,
        paymentRequestType: true,
        paymentUrl: true,
        printFormat: true,
        project: true,
        referenceDoctype: true,
        referenceName: true,
        status: true,
        subject: true,
        swiftNumber: true,
        transactionDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentRequest] })
  @ApiNestedQuery(PaymentRequestFindManyArgs)
  async paymentRequests(
    @common.Req() request: Request
  ): Promise<PaymentRequest[]> {
    const args = plainToClass(PaymentRequestFindManyArgs, request.query);
    return this.service.paymentRequests({
      ...args,
      select: {
        account: true,
        amendedFrom: true,
        bank: true,
        bankAccount: true,
        bankAccountNo: true,
        branchCode: true,
        company: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        currency: true,
        docstatus: true,
        emailTo: true,
        grandTotal: true,
        iban: true,
        id: true,
        idx: true,
        isASubscription: true,
        makeSalesInvoice: true,
        message: true,
        modeOfPayment: true,
        modified: true,
        modifiedBy: true,
        muteEmail: true,
        name: true,
        namingSeries: true,
        owner: true,
        party: true,
        partyType: true,
        paymentAccount: true,
        paymentChannel: true,
        paymentGateway: true,
        paymentGatewayAccount: true,
        paymentOrder: true,
        paymentRequestType: true,
        paymentUrl: true,
        printFormat: true,
        project: true,
        referenceDoctype: true,
        referenceName: true,
        status: true,
        subject: true,
        swiftNumber: true,
        transactionDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async paymentRequest(
    @common.Param() params: PaymentRequestWhereUniqueInput
  ): Promise<PaymentRequest | null> {
    const result = await this.service.paymentRequest({
      where: params,
      select: {
        account: true,
        amendedFrom: true,
        bank: true,
        bankAccount: true,
        bankAccountNo: true,
        branchCode: true,
        company: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        currency: true,
        docstatus: true,
        emailTo: true,
        grandTotal: true,
        iban: true,
        id: true,
        idx: true,
        isASubscription: true,
        makeSalesInvoice: true,
        message: true,
        modeOfPayment: true,
        modified: true,
        modifiedBy: true,
        muteEmail: true,
        name: true,
        namingSeries: true,
        owner: true,
        party: true,
        partyType: true,
        paymentAccount: true,
        paymentChannel: true,
        paymentGateway: true,
        paymentGatewayAccount: true,
        paymentOrder: true,
        paymentRequestType: true,
        paymentUrl: true,
        printFormat: true,
        project: true,
        referenceDoctype: true,
        referenceName: true,
        status: true,
        subject: true,
        swiftNumber: true,
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
  @swagger.ApiOkResponse({ type: PaymentRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePaymentRequest(
    @common.Param() params: PaymentRequestWhereUniqueInput,
    @common.Body() data: PaymentRequestUpdateInput
  ): Promise<PaymentRequest | null> {
    try {
      return await this.service.updatePaymentRequest({
        where: params,
        data: data,
        select: {
          account: true,
          amendedFrom: true,
          bank: true,
          bankAccount: true,
          bankAccountNo: true,
          branchCode: true,
          company: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          currency: true,
          docstatus: true,
          emailTo: true,
          grandTotal: true,
          iban: true,
          id: true,
          idx: true,
          isASubscription: true,
          makeSalesInvoice: true,
          message: true,
          modeOfPayment: true,
          modified: true,
          modifiedBy: true,
          muteEmail: true,
          name: true,
          namingSeries: true,
          owner: true,
          party: true,
          partyType: true,
          paymentAccount: true,
          paymentChannel: true,
          paymentGateway: true,
          paymentGatewayAccount: true,
          paymentOrder: true,
          paymentRequestType: true,
          paymentUrl: true,
          printFormat: true,
          project: true,
          referenceDoctype: true,
          referenceName: true,
          status: true,
          subject: true,
          swiftNumber: true,
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
  @swagger.ApiOkResponse({ type: PaymentRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePaymentRequest(
    @common.Param() params: PaymentRequestWhereUniqueInput
  ): Promise<PaymentRequest | null> {
    try {
      return await this.service.deletePaymentRequest({
        where: params,
        select: {
          account: true,
          amendedFrom: true,
          bank: true,
          bankAccount: true,
          bankAccountNo: true,
          branchCode: true,
          company: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          currency: true,
          docstatus: true,
          emailTo: true,
          grandTotal: true,
          iban: true,
          id: true,
          idx: true,
          isASubscription: true,
          makeSalesInvoice: true,
          message: true,
          modeOfPayment: true,
          modified: true,
          modifiedBy: true,
          muteEmail: true,
          name: true,
          namingSeries: true,
          owner: true,
          party: true,
          partyType: true,
          paymentAccount: true,
          paymentChannel: true,
          paymentGateway: true,
          paymentGatewayAccount: true,
          paymentOrder: true,
          paymentRequestType: true,
          paymentUrl: true,
          printFormat: true,
          project: true,
          referenceDoctype: true,
          referenceName: true,
          status: true,
          subject: true,
          swiftNumber: true,
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