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
import { CurrencyExchangeSettingsResultService } from "../currencyExchangeSettingsResult.service";
import { CurrencyExchangeSettingsResultCreateInput } from "./CurrencyExchangeSettingsResultCreateInput";
import { CurrencyExchangeSettingsResult } from "./CurrencyExchangeSettingsResult";
import { CurrencyExchangeSettingsResultFindManyArgs } from "./CurrencyExchangeSettingsResultFindManyArgs";
import { CurrencyExchangeSettingsResultWhereUniqueInput } from "./CurrencyExchangeSettingsResultWhereUniqueInput";
import { CurrencyExchangeSettingsResultUpdateInput } from "./CurrencyExchangeSettingsResultUpdateInput";

export class CurrencyExchangeSettingsResultControllerBase {
  constructor(
    protected readonly service: CurrencyExchangeSettingsResultService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CurrencyExchangeSettingsResult })
  async createCurrencyExchangeSettingsResult(
    @common.Body() data: CurrencyExchangeSettingsResultCreateInput
  ): Promise<CurrencyExchangeSettingsResult> {
    return await this.service.createCurrencyExchangeSettingsResult({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        key: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CurrencyExchangeSettingsResult] })
  @ApiNestedQuery(CurrencyExchangeSettingsResultFindManyArgs)
  async currencyExchangeSettingsResults(
    @common.Req() request: Request
  ): Promise<CurrencyExchangeSettingsResult[]> {
    const args = plainToClass(
      CurrencyExchangeSettingsResultFindManyArgs,
      request.query
    );
    return this.service.currencyExchangeSettingsResults({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        key: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CurrencyExchangeSettingsResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async currencyExchangeSettingsResult(
    @common.Param() params: CurrencyExchangeSettingsResultWhereUniqueInput
  ): Promise<CurrencyExchangeSettingsResult | null> {
    const result = await this.service.currencyExchangeSettingsResult({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        key: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
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
  @swagger.ApiOkResponse({ type: CurrencyExchangeSettingsResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCurrencyExchangeSettingsResult(
    @common.Param() params: CurrencyExchangeSettingsResultWhereUniqueInput,
    @common.Body() data: CurrencyExchangeSettingsResultUpdateInput
  ): Promise<CurrencyExchangeSettingsResult | null> {
    try {
      return await this.service.updateCurrencyExchangeSettingsResult({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          key: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
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
  @swagger.ApiOkResponse({ type: CurrencyExchangeSettingsResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCurrencyExchangeSettingsResult(
    @common.Param() params: CurrencyExchangeSettingsResultWhereUniqueInput
  ): Promise<CurrencyExchangeSettingsResult | null> {
    try {
      return await this.service.deleteCurrencyExchangeSettingsResult({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          key: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
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
