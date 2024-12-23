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
import { AssetCategoryService } from "../assetCategory.service";
import { AssetCategoryCreateInput } from "./AssetCategoryCreateInput";
import { AssetCategory } from "./AssetCategory";
import { AssetCategoryFindManyArgs } from "./AssetCategoryFindManyArgs";
import { AssetCategoryWhereUniqueInput } from "./AssetCategoryWhereUniqueInput";
import { AssetCategoryUpdateInput } from "./AssetCategoryUpdateInput";

export class AssetCategoryControllerBase {
  constructor(protected readonly service: AssetCategoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AssetCategory })
  async createAssetCategory(
    @common.Body() data: AssetCategoryCreateInput
  ): Promise<AssetCategory> {
    return await this.service.createAssetCategory({
      data: data,
      select: {
        assetCategoryName: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        enableCwipAccounting: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AssetCategory] })
  @ApiNestedQuery(AssetCategoryFindManyArgs)
  async assetCategories(
    @common.Req() request: Request
  ): Promise<AssetCategory[]> {
    const args = plainToClass(AssetCategoryFindManyArgs, request.query);
    return this.service.assetCategories({
      ...args,
      select: {
        assetCategoryName: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        enableCwipAccounting: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AssetCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async assetCategory(
    @common.Param() params: AssetCategoryWhereUniqueInput
  ): Promise<AssetCategory | null> {
    const result = await this.service.assetCategory({
      where: params,
      select: {
        assetCategoryName: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        enableCwipAccounting: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
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
  @swagger.ApiOkResponse({ type: AssetCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAssetCategory(
    @common.Param() params: AssetCategoryWhereUniqueInput,
    @common.Body() data: AssetCategoryUpdateInput
  ): Promise<AssetCategory | null> {
    try {
      return await this.service.updateAssetCategory({
        where: params,
        data: data,
        select: {
          assetCategoryName: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          enableCwipAccounting: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
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
  @swagger.ApiOkResponse({ type: AssetCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAssetCategory(
    @common.Param() params: AssetCategoryWhereUniqueInput
  ): Promise<AssetCategory | null> {
    try {
      return await this.service.deleteAssetCategory({
        where: params,
        select: {
          assetCategoryName: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          enableCwipAccounting: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
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
