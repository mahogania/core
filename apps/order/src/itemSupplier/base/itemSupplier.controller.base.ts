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
import { ItemSupplierService } from "../itemSupplier.service";
import { ItemSupplierCreateInput } from "./ItemSupplierCreateInput";
import { ItemSupplier } from "./ItemSupplier";
import { ItemSupplierFindManyArgs } from "./ItemSupplierFindManyArgs";
import { ItemSupplierWhereUniqueInput } from "./ItemSupplierWhereUniqueInput";
import { ItemSupplierUpdateInput } from "./ItemSupplierUpdateInput";

export class ItemSupplierControllerBase {
  constructor(protected readonly service: ItemSupplierService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ItemSupplier })
  async createItemSupplier(
    @common.Body() data: ItemSupplierCreateInput
  ): Promise<ItemSupplier> {
    return await this.service.createItemSupplier({
      data: data,
      select: {
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
        supplier: true,
        supplierPartNo: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ItemSupplier] })
  @ApiNestedQuery(ItemSupplierFindManyArgs)
  async itemSuppliers(@common.Req() request: Request): Promise<ItemSupplier[]> {
    const args = plainToClass(ItemSupplierFindManyArgs, request.query);
    return this.service.itemSuppliers({
      ...args,
      select: {
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
        supplier: true,
        supplierPartNo: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ItemSupplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async itemSupplier(
    @common.Param() params: ItemSupplierWhereUniqueInput
  ): Promise<ItemSupplier | null> {
    const result = await this.service.itemSupplier({
      where: params,
      select: {
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
        supplier: true,
        supplierPartNo: true,
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
  @swagger.ApiOkResponse({ type: ItemSupplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateItemSupplier(
    @common.Param() params: ItemSupplierWhereUniqueInput,
    @common.Body() data: ItemSupplierUpdateInput
  ): Promise<ItemSupplier | null> {
    try {
      return await this.service.updateItemSupplier({
        where: params,
        data: data,
        select: {
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
          supplier: true,
          supplierPartNo: true,
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
  @swagger.ApiOkResponse({ type: ItemSupplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteItemSupplier(
    @common.Param() params: ItemSupplierWhereUniqueInput
  ): Promise<ItemSupplier | null> {
    try {
      return await this.service.deleteItemSupplier({
        where: params,
        select: {
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
          supplier: true,
          supplierPartNo: true,
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