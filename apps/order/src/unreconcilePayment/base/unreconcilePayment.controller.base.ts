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
import { UnreconcilePaymentService } from "../unreconcilePayment.service";
import { UnreconcilePaymentCreateInput } from "./UnreconcilePaymentCreateInput";
import { UnreconcilePayment } from "./UnreconcilePayment";
import { UnreconcilePaymentFindManyArgs } from "./UnreconcilePaymentFindManyArgs";
import { UnreconcilePaymentWhereUniqueInput } from "./UnreconcilePaymentWhereUniqueInput";
import { UnreconcilePaymentUpdateInput } from "./UnreconcilePaymentUpdateInput";

export class UnreconcilePaymentControllerBase {
  constructor(protected readonly service: UnreconcilePaymentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UnreconcilePayment })
  async createUnreconcilePayment(
    @common.Body() data: UnreconcilePaymentCreateInput
  ): Promise<UnreconcilePayment> {
    return await this.service.createUnreconcilePayment({
      data: data,
      select: {
        amendedFrom: true,
        company: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        updatedAt: true,
        voucherNo: true,
        voucherType: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UnreconcilePayment] })
  @ApiNestedQuery(UnreconcilePaymentFindManyArgs)
  async unreconcilePayments(
    @common.Req() request: Request
  ): Promise<UnreconcilePayment[]> {
    const args = plainToClass(UnreconcilePaymentFindManyArgs, request.query);
    return this.service.unreconcilePayments({
      ...args,
      select: {
        amendedFrom: true,
        company: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        updatedAt: true,
        voucherNo: true,
        voucherType: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UnreconcilePayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async unreconcilePayment(
    @common.Param() params: UnreconcilePaymentWhereUniqueInput
  ): Promise<UnreconcilePayment | null> {
    const result = await this.service.unreconcilePayment({
      where: params,
      select: {
        amendedFrom: true,
        company: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: UnreconcilePayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUnreconcilePayment(
    @common.Param() params: UnreconcilePaymentWhereUniqueInput,
    @common.Body() data: UnreconcilePaymentUpdateInput
  ): Promise<UnreconcilePayment | null> {
    try {
      return await this.service.updateUnreconcilePayment({
        where: params,
        data: data,
        select: {
          amendedFrom: true,
          company: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: UnreconcilePayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUnreconcilePayment(
    @common.Param() params: UnreconcilePaymentWhereUniqueInput
  ): Promise<UnreconcilePayment | null> {
    try {
      return await this.service.deleteUnreconcilePayment({
        where: params,
        select: {
          amendedFrom: true,
          company: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          updatedAt: true,
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
