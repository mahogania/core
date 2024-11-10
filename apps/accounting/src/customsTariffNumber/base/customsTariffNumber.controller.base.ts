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
import { CustomsTariffNumberService } from "../customsTariffNumber.service";
import { CustomsTariffNumberCreateInput } from "./CustomsTariffNumberCreateInput";
import { CustomsTariffNumber } from "./CustomsTariffNumber";
import { CustomsTariffNumberFindManyArgs } from "./CustomsTariffNumberFindManyArgs";
import { CustomsTariffNumberWhereUniqueInput } from "./CustomsTariffNumberWhereUniqueInput";
import { CustomsTariffNumberUpdateInput } from "./CustomsTariffNumberUpdateInput";

export class CustomsTariffNumberControllerBase {
  constructor(protected readonly service: CustomsTariffNumberService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CustomsTariffNumber })
  async createCustomsTariffNumber(
    @common.Body() data: CustomsTariffNumberCreateInput
  ): Promise<CustomsTariffNumber> {
    return await this.service.createCustomsTariffNumber({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        tariffNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CustomsTariffNumber] })
  @ApiNestedQuery(CustomsTariffNumberFindManyArgs)
  async customsTariffNumbers(
    @common.Req() request: Request
  ): Promise<CustomsTariffNumber[]> {
    const args = plainToClass(CustomsTariffNumberFindManyArgs, request.query);
    return this.service.customsTariffNumbers({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        tariffNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CustomsTariffNumber })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async customsTariffNumber(
    @common.Param() params: CustomsTariffNumberWhereUniqueInput
  ): Promise<CustomsTariffNumber | null> {
    const result = await this.service.customsTariffNumber({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        tariffNumber: true,
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
  @swagger.ApiOkResponse({ type: CustomsTariffNumber })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCustomsTariffNumber(
    @common.Param() params: CustomsTariffNumberWhereUniqueInput,
    @common.Body() data: CustomsTariffNumberUpdateInput
  ): Promise<CustomsTariffNumber | null> {
    try {
      return await this.service.updateCustomsTariffNumber({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          tariffNumber: true,
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
  @swagger.ApiOkResponse({ type: CustomsTariffNumber })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCustomsTariffNumber(
    @common.Param() params: CustomsTariffNumberWhereUniqueInput
  ): Promise<CustomsTariffNumber | null> {
    try {
      return await this.service.deleteCustomsTariffNumber({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          tariffNumber: true,
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
