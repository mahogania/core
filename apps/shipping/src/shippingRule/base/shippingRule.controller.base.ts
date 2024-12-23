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
import { ShippingRuleService } from "../shippingRule.service";
import { ShippingRuleCreateInput } from "./ShippingRuleCreateInput";
import { ShippingRule } from "./ShippingRule";
import { ShippingRuleFindManyArgs } from "./ShippingRuleFindManyArgs";
import { ShippingRuleWhereUniqueInput } from "./ShippingRuleWhereUniqueInput";
import { ShippingRuleUpdateInput } from "./ShippingRuleUpdateInput";

export class ShippingRuleControllerBase {
  constructor(protected readonly service: ShippingRuleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ShippingRule })
  @swagger.ApiBody({
    type: ShippingRuleCreateInput,
  })
  async createShippingRule(
    @common.Body() data: ShippingRuleCreateInput
  ): Promise<ShippingRule> {
    return await this.service.createShippingRule({
      data: data,
      select: {
        account: true,
        calculateBasedOn: true,
        company: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        disabled: true,
        docstatus: true,
        id: true,
        idx: true,
        label: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        shippingAmount: true,
        shippingRuleType: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ShippingRule] })
  @ApiNestedQuery(ShippingRuleFindManyArgs)
  async shippingRules(@common.Req() request: Request): Promise<ShippingRule[]> {
    const args = plainToClass(ShippingRuleFindManyArgs, request.query);
    return this.service.shippingRules({
      ...args,
      select: {
        account: true,
        calculateBasedOn: true,
        company: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        disabled: true,
        docstatus: true,
        id: true,
        idx: true,
        label: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        shippingAmount: true,
        shippingRuleType: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ShippingRule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async shippingRule(
    @common.Param() params: ShippingRuleWhereUniqueInput
  ): Promise<ShippingRule | null> {
    const result = await this.service.shippingRule({
      where: params,
      select: {
        account: true,
        calculateBasedOn: true,
        company: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        disabled: true,
        docstatus: true,
        id: true,
        idx: true,
        label: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        shippingAmount: true,
        shippingRuleType: true,
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
  @swagger.ApiOkResponse({ type: ShippingRule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ShippingRuleUpdateInput,
  })
  async updateShippingRule(
    @common.Param() params: ShippingRuleWhereUniqueInput,
    @common.Body() data: ShippingRuleUpdateInput
  ): Promise<ShippingRule | null> {
    try {
      return await this.service.updateShippingRule({
        where: params,
        data: data,
        select: {
          account: true,
          calculateBasedOn: true,
          company: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          disabled: true,
          docstatus: true,
          id: true,
          idx: true,
          label: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          shippingAmount: true,
          shippingRuleType: true,
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
  @swagger.ApiOkResponse({ type: ShippingRule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteShippingRule(
    @common.Param() params: ShippingRuleWhereUniqueInput
  ): Promise<ShippingRule | null> {
    try {
      return await this.service.deleteShippingRule({
        where: params,
        select: {
          account: true,
          calculateBasedOn: true,
          company: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          disabled: true,
          docstatus: true,
          id: true,
          idx: true,
          label: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          shippingAmount: true,
          shippingRuleType: true,
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
