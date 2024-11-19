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
import { BomCreatorService } from "../bomCreator.service";
import { BomCreatorCreateInput } from "./BomCreatorCreateInput";
import { BomCreator } from "./BomCreator";
import { BomCreatorFindManyArgs } from "./BomCreatorFindManyArgs";
import { BomCreatorWhereUniqueInput } from "./BomCreatorWhereUniqueInput";
import { BomCreatorUpdateInput } from "./BomCreatorUpdateInput";

export class BomCreatorControllerBase {
  constructor(protected readonly service: BomCreatorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BomCreator })
  async createBomCreator(
    @common.Body() data: BomCreatorCreateInput
  ): Promise<BomCreator> {
    return await this.service.createBomCreator({
      data: data,
      select: {
        amendedFrom: true,
        buyingPriceList: true,
        company: true,
        conversionRate: true,
        createdAt: true,
        creation: true,
        currency: true,
        defaultWarehouse: true,
        docstatus: true,
        errorLog: true,
        id: true,
        idx: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        plcConversionRate: true,
        priceListCurrency: true,
        project: true,
        qty: true,
        rawMaterialCost: true,
        remarks: true,
        rmCostAsPer: true,
        setRateBasedOnWarehouse: true,
        status: true,
        uom: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BomCreator] })
  @ApiNestedQuery(BomCreatorFindManyArgs)
  async bomCreators(@common.Req() request: Request): Promise<BomCreator[]> {
    const args = plainToClass(BomCreatorFindManyArgs, request.query);
    return this.service.bomCreators({
      ...args,
      select: {
        amendedFrom: true,
        buyingPriceList: true,
        company: true,
        conversionRate: true,
        createdAt: true,
        creation: true,
        currency: true,
        defaultWarehouse: true,
        docstatus: true,
        errorLog: true,
        id: true,
        idx: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        plcConversionRate: true,
        priceListCurrency: true,
        project: true,
        qty: true,
        rawMaterialCost: true,
        remarks: true,
        rmCostAsPer: true,
        setRateBasedOnWarehouse: true,
        status: true,
        uom: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BomCreator })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async bomCreator(
    @common.Param() params: BomCreatorWhereUniqueInput
  ): Promise<BomCreator | null> {
    const result = await this.service.bomCreator({
      where: params,
      select: {
        amendedFrom: true,
        buyingPriceList: true,
        company: true,
        conversionRate: true,
        createdAt: true,
        creation: true,
        currency: true,
        defaultWarehouse: true,
        docstatus: true,
        errorLog: true,
        id: true,
        idx: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        plcConversionRate: true,
        priceListCurrency: true,
        project: true,
        qty: true,
        rawMaterialCost: true,
        remarks: true,
        rmCostAsPer: true,
        setRateBasedOnWarehouse: true,
        status: true,
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
  @swagger.ApiOkResponse({ type: BomCreator })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBomCreator(
    @common.Param() params: BomCreatorWhereUniqueInput,
    @common.Body() data: BomCreatorUpdateInput
  ): Promise<BomCreator | null> {
    try {
      return await this.service.updateBomCreator({
        where: params,
        data: data,
        select: {
          amendedFrom: true,
          buyingPriceList: true,
          company: true,
          conversionRate: true,
          createdAt: true,
          creation: true,
          currency: true,
          defaultWarehouse: true,
          docstatus: true,
          errorLog: true,
          id: true,
          idx: true,
          itemCode: true,
          itemGroup: true,
          itemName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          plcConversionRate: true,
          priceListCurrency: true,
          project: true,
          qty: true,
          rawMaterialCost: true,
          remarks: true,
          rmCostAsPer: true,
          setRateBasedOnWarehouse: true,
          status: true,
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
  @swagger.ApiOkResponse({ type: BomCreator })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBomCreator(
    @common.Param() params: BomCreatorWhereUniqueInput
  ): Promise<BomCreator | null> {
    try {
      return await this.service.deleteBomCreator({
        where: params,
        select: {
          amendedFrom: true,
          buyingPriceList: true,
          company: true,
          conversionRate: true,
          createdAt: true,
          creation: true,
          currency: true,
          defaultWarehouse: true,
          docstatus: true,
          errorLog: true,
          id: true,
          idx: true,
          itemCode: true,
          itemGroup: true,
          itemName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          plcConversionRate: true,
          priceListCurrency: true,
          project: true,
          qty: true,
          rawMaterialCost: true,
          remarks: true,
          rmCostAsPer: true,
          setRateBasedOnWarehouse: true,
          status: true,
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
