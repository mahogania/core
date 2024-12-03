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
import { AssetShiftFactorService } from "../assetShiftFactor.service";
import { AssetShiftFactorCreateInput } from "./AssetShiftFactorCreateInput";
import { AssetShiftFactor } from "./AssetShiftFactor";
import { AssetShiftFactorFindManyArgs } from "./AssetShiftFactorFindManyArgs";
import { AssetShiftFactorWhereUniqueInput } from "./AssetShiftFactorWhereUniqueInput";
import { AssetShiftFactorUpdateInput } from "./AssetShiftFactorUpdateInput";

export class AssetShiftFactorControllerBase {
  constructor(protected readonly service: AssetShiftFactorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AssetShiftFactor })
  async createAssetShiftFactor(
    @common.Body() data: AssetShiftFactorCreateInput
  ): Promise<AssetShiftFactor> {
    return await this.service.createAssetShiftFactor({
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
        shiftFactor: true,
        shiftName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AssetShiftFactor] })
  @ApiNestedQuery(AssetShiftFactorFindManyArgs)
  async assetShiftFactors(
    @common.Req() request: Request
  ): Promise<AssetShiftFactor[]> {
    const args = plainToClass(AssetShiftFactorFindManyArgs, request.query);
    return this.service.assetShiftFactors({
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
        shiftFactor: true,
        shiftName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AssetShiftFactor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async assetShiftFactor(
    @common.Param() params: AssetShiftFactorWhereUniqueInput
  ): Promise<AssetShiftFactor | null> {
    const result = await this.service.assetShiftFactor({
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
        shiftFactor: true,
        shiftName: true,
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
  @swagger.ApiOkResponse({ type: AssetShiftFactor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAssetShiftFactor(
    @common.Param() params: AssetShiftFactorWhereUniqueInput,
    @common.Body() data: AssetShiftFactorUpdateInput
  ): Promise<AssetShiftFactor | null> {
    try {
      return await this.service.updateAssetShiftFactor({
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
          shiftFactor: true,
          shiftName: true,
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
  @swagger.ApiOkResponse({ type: AssetShiftFactor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAssetShiftFactor(
    @common.Param() params: AssetShiftFactorWhereUniqueInput
  ): Promise<AssetShiftFactor | null> {
    try {
      return await this.service.deleteAssetShiftFactor({
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
          shiftFactor: true,
          shiftName: true,
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
