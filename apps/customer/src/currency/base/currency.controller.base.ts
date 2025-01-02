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
import { CurrencyService } from "../currency.service";
import { CurrencyCreateInput } from "./CurrencyCreateInput";
import { Currency } from "./Currency";
import { CurrencyFindManyArgs } from "./CurrencyFindManyArgs";
import { CurrencyWhereUniqueInput } from "./CurrencyWhereUniqueInput";
import { CurrencyUpdateInput } from "./CurrencyUpdateInput";

export class CurrencyControllerBase {
  constructor(protected readonly service: CurrencyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Currency })
  async createCurrency(
    @common.Body() data: CurrencyCreateInput
  ): Promise<Currency> {
    return await this.service.createCurrency({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        currencyName: true,
        docstatus: true,
        enabled: true,
        fraction: true,
        fractionUnits: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        numberFormat: true,
        owner: true,
        smallestCurrencyFractionValue: true,
        symbolField: true,
        symbolOnRight: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Currency] })
  @ApiNestedQuery(CurrencyFindManyArgs)
  async currencies(@common.Req() request: Request): Promise<Currency[]> {
    const args = plainToClass(CurrencyFindManyArgs, request.query);
    return this.service.currencies({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        currencyName: true,
        docstatus: true,
        enabled: true,
        fraction: true,
        fractionUnits: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        numberFormat: true,
        owner: true,
        smallestCurrencyFractionValue: true,
        symbolField: true,
        symbolOnRight: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async currency(
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Currency | null> {
    const result = await this.service.currency({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        currencyName: true,
        docstatus: true,
        enabled: true,
        fraction: true,
        fractionUnits: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        numberFormat: true,
        owner: true,
        smallestCurrencyFractionValue: true,
        symbolField: true,
        symbolOnRight: true,
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
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCurrency(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() data: CurrencyUpdateInput
  ): Promise<Currency | null> {
    try {
      return await this.service.updateCurrency({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          currencyName: true,
          docstatus: true,
          enabled: true,
          fraction: true,
          fractionUnits: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          numberFormat: true,
          owner: true,
          smallestCurrencyFractionValue: true,
          symbolField: true,
          symbolOnRight: true,
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
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCurrency(
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Currency | null> {
    try {
      return await this.service.deleteCurrency({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          currencyName: true,
          docstatus: true,
          enabled: true,
          fraction: true,
          fractionUnits: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          numberFormat: true,
          owner: true,
          smallestCurrencyFractionValue: true,
          symbolField: true,
          symbolOnRight: true,
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