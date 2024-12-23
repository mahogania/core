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
import { ItemVariantService } from "../itemVariant.service";
import { ItemVariantCreateInput } from "./ItemVariantCreateInput";
import { ItemVariant } from "./ItemVariant";
import { ItemVariantFindManyArgs } from "./ItemVariantFindManyArgs";
import { ItemVariantWhereUniqueInput } from "./ItemVariantWhereUniqueInput";
import { ItemVariantUpdateInput } from "./ItemVariantUpdateInput";

export class ItemVariantControllerBase {
  constructor(protected readonly service: ItemVariantService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ItemVariant })
  async createItemVariant(
    @common.Body() data: ItemVariantCreateInput
  ): Promise<ItemVariant> {
    return await this.service.createItemVariant({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        itemAttribute: true,
        itemAttributeValue: true,
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
  @swagger.ApiOkResponse({ type: [ItemVariant] })
  @ApiNestedQuery(ItemVariantFindManyArgs)
  async itemVariants(@common.Req() request: Request): Promise<ItemVariant[]> {
    const args = plainToClass(ItemVariantFindManyArgs, request.query);
    return this.service.itemVariants({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        itemAttribute: true,
        itemAttributeValue: true,
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
  @swagger.ApiOkResponse({ type: ItemVariant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async itemVariant(
    @common.Param() params: ItemVariantWhereUniqueInput
  ): Promise<ItemVariant | null> {
    const result = await this.service.itemVariant({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        itemAttribute: true,
        itemAttributeValue: true,
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
  @swagger.ApiOkResponse({ type: ItemVariant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateItemVariant(
    @common.Param() params: ItemVariantWhereUniqueInput,
    @common.Body() data: ItemVariantUpdateInput
  ): Promise<ItemVariant | null> {
    try {
      return await this.service.updateItemVariant({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          itemAttribute: true,
          itemAttributeValue: true,
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
  @swagger.ApiOkResponse({ type: ItemVariant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteItemVariant(
    @common.Param() params: ItemVariantWhereUniqueInput
  ): Promise<ItemVariant | null> {
    try {
      return await this.service.deleteItemVariant({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          itemAttribute: true,
          itemAttributeValue: true,
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
