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
import { ShippingRuleConditionService } from "../shippingRuleCondition.service";
import { ShippingRuleConditionCreateInput } from "./ShippingRuleConditionCreateInput";
import { ShippingRuleCondition } from "./ShippingRuleCondition";
import { ShippingRuleConditionFindManyArgs } from "./ShippingRuleConditionFindManyArgs";
import { ShippingRuleConditionWhereUniqueInput } from "./ShippingRuleConditionWhereUniqueInput";
import { ShippingRuleConditionUpdateInput } from "./ShippingRuleConditionUpdateInput";

export class ShippingRuleConditionControllerBase {
  constructor(protected readonly service: ShippingRuleConditionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ShippingRuleCondition })
  @swagger.ApiBody({
    type: ShippingRuleConditionCreateInput,
  })
  async createShippingRuleCondition(
    @common.Body() data: ShippingRuleConditionCreateInput
  ): Promise<ShippingRuleCondition> {
    return await this.service.createShippingRuleCondition({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        fromValue: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        shippingAmount: true,
        toValue: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ShippingRuleCondition] })
  @ApiNestedQuery(ShippingRuleConditionFindManyArgs)
  async shippingRuleConditions(
    @common.Req() request: Request
  ): Promise<ShippingRuleCondition[]> {
    const args = plainToClass(ShippingRuleConditionFindManyArgs, request.query);
    return this.service.shippingRuleConditions({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        fromValue: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        shippingAmount: true,
        toValue: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ShippingRuleCondition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async shippingRuleCondition(
    @common.Param() params: ShippingRuleConditionWhereUniqueInput
  ): Promise<ShippingRuleCondition | null> {
    const result = await this.service.shippingRuleCondition({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        fromValue: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        shippingAmount: true,
        toValue: true,
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
  @swagger.ApiOkResponse({ type: ShippingRuleCondition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ShippingRuleConditionUpdateInput,
  })
  async updateShippingRuleCondition(
    @common.Param() params: ShippingRuleConditionWhereUniqueInput,
    @common.Body() data: ShippingRuleConditionUpdateInput
  ): Promise<ShippingRuleCondition | null> {
    try {
      return await this.service.updateShippingRuleCondition({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          fromValue: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          shippingAmount: true,
          toValue: true,
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
  @swagger.ApiOkResponse({ type: ShippingRuleCondition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteShippingRuleCondition(
    @common.Param() params: ShippingRuleConditionWhereUniqueInput
  ): Promise<ShippingRuleCondition | null> {
    try {
      return await this.service.deleteShippingRuleCondition({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          fromValue: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          shippingAmount: true,
          toValue: true,
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