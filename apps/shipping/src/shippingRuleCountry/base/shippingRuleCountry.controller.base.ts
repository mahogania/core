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
import { ShippingRuleCountryService } from "../shippingRuleCountry.service";
import { ShippingRuleCountryCreateInput } from "./ShippingRuleCountryCreateInput";
import { ShippingRuleCountry } from "./ShippingRuleCountry";
import { ShippingRuleCountryFindManyArgs } from "./ShippingRuleCountryFindManyArgs";
import { ShippingRuleCountryWhereUniqueInput } from "./ShippingRuleCountryWhereUniqueInput";
import { ShippingRuleCountryUpdateInput } from "./ShippingRuleCountryUpdateInput";

export class ShippingRuleCountryControllerBase {
  constructor(protected readonly service: ShippingRuleCountryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ShippingRuleCountry })
  @swagger.ApiBody({
    type: ShippingRuleCountryCreateInput,
  })
  async createShippingRuleCountry(
    @common.Body() data: ShippingRuleCountryCreateInput
  ): Promise<ShippingRuleCountry> {
    return await this.service.createShippingRuleCountry({
      data: data,
      select: {
        country: true,
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
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ShippingRuleCountry] })
  @ApiNestedQuery(ShippingRuleCountryFindManyArgs)
  async shippingRuleCountries(
    @common.Req() request: Request
  ): Promise<ShippingRuleCountry[]> {
    const args = plainToClass(ShippingRuleCountryFindManyArgs, request.query);
    return this.service.shippingRuleCountries({
      ...args,
      select: {
        country: true,
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
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ShippingRuleCountry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async shippingRuleCountry(
    @common.Param() params: ShippingRuleCountryWhereUniqueInput
  ): Promise<ShippingRuleCountry | null> {
    const result = await this.service.shippingRuleCountry({
      where: params,
      select: {
        country: true,
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
  @swagger.ApiOkResponse({ type: ShippingRuleCountry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ShippingRuleCountryUpdateInput,
  })
  async updateShippingRuleCountry(
    @common.Param() params: ShippingRuleCountryWhereUniqueInput,
    @common.Body() data: ShippingRuleCountryUpdateInput
  ): Promise<ShippingRuleCountry | null> {
    try {
      return await this.service.updateShippingRuleCountry({
        where: params,
        data: data,
        select: {
          country: true,
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
  @swagger.ApiOkResponse({ type: ShippingRuleCountry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteShippingRuleCountry(
    @common.Param() params: ShippingRuleCountryWhereUniqueInput
  ): Promise<ShippingRuleCountry | null> {
    try {
      return await this.service.deleteShippingRuleCountry({
        where: params,
        select: {
          country: true,
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
