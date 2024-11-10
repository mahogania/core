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
import { CashierClosingService } from "../cashierClosing.service";
import { CashierClosingCreateInput } from "./CashierClosingCreateInput";
import { CashierClosing } from "./CashierClosing";
import { CashierClosingFindManyArgs } from "./CashierClosingFindManyArgs";
import { CashierClosingWhereUniqueInput } from "./CashierClosingWhereUniqueInput";
import { CashierClosingUpdateInput } from "./CashierClosingUpdateInput";

export class CashierClosingControllerBase {
  constructor(protected readonly service: CashierClosingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CashierClosing })
  async createCashierClosing(
    @common.Body() data: CashierClosingCreateInput
  ): Promise<CashierClosing> {
    return await this.service.createCashierClosing({
      data: data,
      select: {
        amendedFrom: true,
        createdAt: true,
        creation: true,
        custody: true,
        date: true,
        docstatus: true,
        expense: true,
        fromTime: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        namingSeries: true,
        netAmount: true,
        outstandingAmount: true,
        owner: true,
        returns: true,
        time: true,
        updatedAt: true,
        user: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CashierClosing] })
  @ApiNestedQuery(CashierClosingFindManyArgs)
  async cashierClosings(
    @common.Req() request: Request
  ): Promise<CashierClosing[]> {
    const args = plainToClass(CashierClosingFindManyArgs, request.query);
    return this.service.cashierClosings({
      ...args,
      select: {
        amendedFrom: true,
        createdAt: true,
        creation: true,
        custody: true,
        date: true,
        docstatus: true,
        expense: true,
        fromTime: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        namingSeries: true,
        netAmount: true,
        outstandingAmount: true,
        owner: true,
        returns: true,
        time: true,
        updatedAt: true,
        user: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CashierClosing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async cashierClosing(
    @common.Param() params: CashierClosingWhereUniqueInput
  ): Promise<CashierClosing | null> {
    const result = await this.service.cashierClosing({
      where: params,
      select: {
        amendedFrom: true,
        createdAt: true,
        creation: true,
        custody: true,
        date: true,
        docstatus: true,
        expense: true,
        fromTime: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        namingSeries: true,
        netAmount: true,
        outstandingAmount: true,
        owner: true,
        returns: true,
        time: true,
        updatedAt: true,
        user: true,
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
  @swagger.ApiOkResponse({ type: CashierClosing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCashierClosing(
    @common.Param() params: CashierClosingWhereUniqueInput,
    @common.Body() data: CashierClosingUpdateInput
  ): Promise<CashierClosing | null> {
    try {
      return await this.service.updateCashierClosing({
        where: params,
        data: data,
        select: {
          amendedFrom: true,
          createdAt: true,
          creation: true,
          custody: true,
          date: true,
          docstatus: true,
          expense: true,
          fromTime: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          namingSeries: true,
          netAmount: true,
          outstandingAmount: true,
          owner: true,
          returns: true,
          time: true,
          updatedAt: true,
          user: true,
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
  @swagger.ApiOkResponse({ type: CashierClosing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCashierClosing(
    @common.Param() params: CashierClosingWhereUniqueInput
  ): Promise<CashierClosing | null> {
    try {
      return await this.service.deleteCashierClosing({
        where: params,
        select: {
          amendedFrom: true,
          createdAt: true,
          creation: true,
          custody: true,
          date: true,
          docstatus: true,
          expense: true,
          fromTime: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          namingSeries: true,
          netAmount: true,
          outstandingAmount: true,
          owner: true,
          returns: true,
          time: true,
          updatedAt: true,
          user: true,
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
