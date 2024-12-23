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
import { AssetCapitalizationStockItemService } from "../assetCapitalizationStockItem.service";
import { AssetCapitalizationStockItemCreateInput } from "./AssetCapitalizationStockItemCreateInput";
import { AssetCapitalizationStockItem } from "./AssetCapitalizationStockItem";
import { AssetCapitalizationStockItemFindManyArgs } from "./AssetCapitalizationStockItemFindManyArgs";
import { AssetCapitalizationStockItemWhereUniqueInput } from "./AssetCapitalizationStockItemWhereUniqueInput";
import { AssetCapitalizationStockItemUpdateInput } from "./AssetCapitalizationStockItemUpdateInput";

export class AssetCapitalizationStockItemControllerBase {
  constructor(
    protected readonly service: AssetCapitalizationStockItemService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AssetCapitalizationStockItem })
  async createAssetCapitalizationStockItem(
    @common.Body() data: AssetCapitalizationStockItemCreateInput
  ): Promise<AssetCapitalizationStockItem> {
    return await this.service.createAssetCapitalizationStockItem({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AssetCapitalizationStockItem] })
  @ApiNestedQuery(AssetCapitalizationStockItemFindManyArgs)
  async assetCapitalizationStockItems(
    @common.Req() request: Request
  ): Promise<AssetCapitalizationStockItem[]> {
    const args = plainToClass(
      AssetCapitalizationStockItemFindManyArgs,
      request.query
    );
    return this.service.assetCapitalizationStockItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AssetCapitalizationStockItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async assetCapitalizationStockItem(
    @common.Param() params: AssetCapitalizationStockItemWhereUniqueInput
  ): Promise<AssetCapitalizationStockItem | null> {
    const result = await this.service.assetCapitalizationStockItem({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: AssetCapitalizationStockItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAssetCapitalizationStockItem(
    @common.Param() params: AssetCapitalizationStockItemWhereUniqueInput,
    @common.Body() data: AssetCapitalizationStockItemUpdateInput
  ): Promise<AssetCapitalizationStockItem | null> {
    try {
      return await this.service.updateAssetCapitalizationStockItem({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: AssetCapitalizationStockItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAssetCapitalizationStockItem(
    @common.Param() params: AssetCapitalizationStockItemWhereUniqueInput
  ): Promise<AssetCapitalizationStockItem | null> {
    try {
      return await this.service.deleteAssetCapitalizationStockItem({
        where: params,
        select: {
          createdAt: true,
          id: true,
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
