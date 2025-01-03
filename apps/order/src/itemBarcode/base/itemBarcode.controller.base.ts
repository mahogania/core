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
import { ItemBarcodeService } from "../itemBarcode.service";
import { ItemBarcodeCreateInput } from "./ItemBarcodeCreateInput";
import { ItemBarcode } from "./ItemBarcode";
import { ItemBarcodeFindManyArgs } from "./ItemBarcodeFindManyArgs";
import { ItemBarcodeWhereUniqueInput } from "./ItemBarcodeWhereUniqueInput";
import { ItemBarcodeUpdateInput } from "./ItemBarcodeUpdateInput";

export class ItemBarcodeControllerBase {
  constructor(protected readonly service: ItemBarcodeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ItemBarcode })
  async createItemBarcode(
    @common.Body() data: ItemBarcodeCreateInput
  ): Promise<ItemBarcode> {
    return await this.service.createItemBarcode({
      data: data,
      select: {
        barcode: true,
        barcodeType: true,
        createdAt: true,
        docstatus: true,
        id: true,
        idx: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        uom: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ItemBarcode] })
  @ApiNestedQuery(ItemBarcodeFindManyArgs)
  async itemBarcodes(@common.Req() request: Request): Promise<ItemBarcode[]> {
    const args = plainToClass(ItemBarcodeFindManyArgs, request.query);
    return this.service.itemBarcodes({
      ...args,
      select: {
        barcode: true,
        barcodeType: true,
        createdAt: true,
        docstatus: true,
        id: true,
        idx: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        uom: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ItemBarcode })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async itemBarcode(
    @common.Param() params: ItemBarcodeWhereUniqueInput
  ): Promise<ItemBarcode | null> {
    const result = await this.service.itemBarcode({
      where: params,
      select: {
        barcode: true,
        barcodeType: true,
        createdAt: true,
        docstatus: true,
        id: true,
        idx: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        uom: true,
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
  @swagger.ApiOkResponse({ type: ItemBarcode })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateItemBarcode(
    @common.Param() params: ItemBarcodeWhereUniqueInput,
    @common.Body() data: ItemBarcodeUpdateInput
  ): Promise<ItemBarcode | null> {
    try {
      return await this.service.updateItemBarcode({
        where: params,
        data: data,
        select: {
          barcode: true,
          barcodeType: true,
          createdAt: true,
          docstatus: true,
          id: true,
          idx: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          uom: true,
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
  @swagger.ApiOkResponse({ type: ItemBarcode })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteItemBarcode(
    @common.Param() params: ItemBarcodeWhereUniqueInput
  ): Promise<ItemBarcode | null> {
    try {
      return await this.service.deleteItemBarcode({
        where: params,
        select: {
          barcode: true,
          barcodeType: true,
          createdAt: true,
          docstatus: true,
          id: true,
          idx: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          uom: true,
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
