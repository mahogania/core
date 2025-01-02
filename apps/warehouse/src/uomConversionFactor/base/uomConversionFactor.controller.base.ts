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
import { UomConversionFactorService } from "../uomConversionFactor.service";
import { UomConversionFactorCreateInput } from "./UomConversionFactorCreateInput";
import { UomConversionFactor } from "./UomConversionFactor";
import { UomConversionFactorFindManyArgs } from "./UomConversionFactorFindManyArgs";
import { UomConversionFactorWhereUniqueInput } from "./UomConversionFactorWhereUniqueInput";
import { UomConversionFactorUpdateInput } from "./UomConversionFactorUpdateInput";

export class UomConversionFactorControllerBase {
  constructor(protected readonly service: UomConversionFactorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UomConversionFactor })
  async createUomConversionFactor(
    @common.Body() data: UomConversionFactorCreateInput
  ): Promise<UomConversionFactor> {
    return await this.service.createUomConversionFactor({
      data: data,
      select: {
        category: true,
        createdAt: true,
        docstatus: true,
        fromUom: true,
        id: true,
        idx: true,
        modifiedBy: true,
        name: true,
        owner: true,
        toUom: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UomConversionFactor] })
  @ApiNestedQuery(UomConversionFactorFindManyArgs)
  async uomConversionFactors(
    @common.Req() request: Request
  ): Promise<UomConversionFactor[]> {
    const args = plainToClass(UomConversionFactorFindManyArgs, request.query);
    return this.service.uomConversionFactors({
      ...args,
      select: {
        category: true,
        createdAt: true,
        docstatus: true,
        fromUom: true,
        id: true,
        idx: true,
        modifiedBy: true,
        name: true,
        owner: true,
        toUom: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UomConversionFactor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async uomConversionFactor(
    @common.Param() params: UomConversionFactorWhereUniqueInput
  ): Promise<UomConversionFactor | null> {
    const result = await this.service.uomConversionFactor({
      where: params,
      select: {
        category: true,
        createdAt: true,
        docstatus: true,
        fromUom: true,
        id: true,
        idx: true,
        modifiedBy: true,
        name: true,
        owner: true,
        toUom: true,
        updatedAt: true,
        value: true,
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
  @swagger.ApiOkResponse({ type: UomConversionFactor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUomConversionFactor(
    @common.Param() params: UomConversionFactorWhereUniqueInput,
    @common.Body() data: UomConversionFactorUpdateInput
  ): Promise<UomConversionFactor | null> {
    try {
      return await this.service.updateUomConversionFactor({
        where: params,
        data: data,
        select: {
          category: true,
          createdAt: true,
          docstatus: true,
          fromUom: true,
          id: true,
          idx: true,
          modifiedBy: true,
          name: true,
          owner: true,
          toUom: true,
          updatedAt: true,
          value: true,
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
  @swagger.ApiOkResponse({ type: UomConversionFactor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUomConversionFactor(
    @common.Param() params: UomConversionFactorWhereUniqueInput
  ): Promise<UomConversionFactor | null> {
    try {
      return await this.service.deleteUomConversionFactor({
        where: params,
        select: {
          category: true,
          createdAt: true,
          docstatus: true,
          fromUom: true,
          id: true,
          idx: true,
          modifiedBy: true,
          name: true,
          owner: true,
          toUom: true,
          updatedAt: true,
          value: true,
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