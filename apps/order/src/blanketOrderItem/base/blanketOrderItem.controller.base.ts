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
import { BlanketOrderItemService } from "../blanketOrderItem.service";
import { BlanketOrderItemCreateInput } from "./BlanketOrderItemCreateInput";
import { BlanketOrderItem } from "./BlanketOrderItem";
import { BlanketOrderItemFindManyArgs } from "./BlanketOrderItemFindManyArgs";
import { BlanketOrderItemWhereUniqueInput } from "./BlanketOrderItemWhereUniqueInput";
import { BlanketOrderItemUpdateInput } from "./BlanketOrderItemUpdateInput";

export class BlanketOrderItemControllerBase {
  constructor(protected readonly service: BlanketOrderItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BlanketOrderItem })
  async createBlanketOrderItem(
    @common.Body() data: BlanketOrderItemCreateInput
  ): Promise<BlanketOrderItem> {
    return await this.service.createBlanketOrderItem({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        itemCode: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        orderedQty: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        partyItemCode: true,
        qty: true,
        rate: true,
        termsAndConditions: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BlanketOrderItem] })
  @ApiNestedQuery(BlanketOrderItemFindManyArgs)
  async blanketOrderItems(
    @common.Req() request: Request
  ): Promise<BlanketOrderItem[]> {
    const args = plainToClass(BlanketOrderItemFindManyArgs, request.query);
    return this.service.blanketOrderItems({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        itemCode: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        orderedQty: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        partyItemCode: true,
        qty: true,
        rate: true,
        termsAndConditions: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BlanketOrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async blanketOrderItem(
    @common.Param() params: BlanketOrderItemWhereUniqueInput
  ): Promise<BlanketOrderItem | null> {
    const result = await this.service.blanketOrderItem({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        itemCode: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        orderedQty: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        partyItemCode: true,
        qty: true,
        rate: true,
        termsAndConditions: true,
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
  @swagger.ApiOkResponse({ type: BlanketOrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBlanketOrderItem(
    @common.Param() params: BlanketOrderItemWhereUniqueInput,
    @common.Body() data: BlanketOrderItemUpdateInput
  ): Promise<BlanketOrderItem | null> {
    try {
      return await this.service.updateBlanketOrderItem({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          itemCode: true,
          itemName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          orderedQty: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          partyItemCode: true,
          qty: true,
          rate: true,
          termsAndConditions: true,
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
  @swagger.ApiOkResponse({ type: BlanketOrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBlanketOrderItem(
    @common.Param() params: BlanketOrderItemWhereUniqueInput
  ): Promise<BlanketOrderItem | null> {
    try {
      return await this.service.deleteBlanketOrderItem({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          itemCode: true,
          itemName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          orderedQty: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          partyItemCode: true,
          qty: true,
          rate: true,
          termsAndConditions: true,
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