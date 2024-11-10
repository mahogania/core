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
import { InventoryDimensionService } from "../inventoryDimension.service";
import { InventoryDimensionCreateInput } from "./InventoryDimensionCreateInput";
import { InventoryDimension } from "./InventoryDimension";
import { InventoryDimensionFindManyArgs } from "./InventoryDimensionFindManyArgs";
import { InventoryDimensionWhereUniqueInput } from "./InventoryDimensionWhereUniqueInput";
import { InventoryDimensionUpdateInput } from "./InventoryDimensionUpdateInput";

export class InventoryDimensionControllerBase {
  constructor(protected readonly service: InventoryDimensionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: InventoryDimension })
  async createInventoryDimension(
    @common.Body() data: InventoryDimensionCreateInput
  ): Promise<InventoryDimension> {
    return await this.service.createInventoryDimension({
      data: data,
      select: {
        applyToAllDoctypes: true,
        condition: true,
        createdAt: true,
        creation: true,
        dimensionName: true,
        disabled: true,
        docstatus: true,
        documentType: true,
        fetchFromParent: true,
        id: true,
        idx: true,
        isttable: true,
        mandatoryDependsOn: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        referenceDocument: true,
        reqd: true,
        sourceFieldname: true,
        targetFieldname: true,
        typeOfTransaction: true,
        updatedAt: true,
        validateNegativeStock: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [InventoryDimension] })
  @ApiNestedQuery(InventoryDimensionFindManyArgs)
  async inventoryDimensions(
    @common.Req() request: Request
  ): Promise<InventoryDimension[]> {
    const args = plainToClass(InventoryDimensionFindManyArgs, request.query);
    return this.service.inventoryDimensions({
      ...args,
      select: {
        applyToAllDoctypes: true,
        condition: true,
        createdAt: true,
        creation: true,
        dimensionName: true,
        disabled: true,
        docstatus: true,
        documentType: true,
        fetchFromParent: true,
        id: true,
        idx: true,
        isttable: true,
        mandatoryDependsOn: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        referenceDocument: true,
        reqd: true,
        sourceFieldname: true,
        targetFieldname: true,
        typeOfTransaction: true,
        updatedAt: true,
        validateNegativeStock: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: InventoryDimension })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async inventoryDimension(
    @common.Param() params: InventoryDimensionWhereUniqueInput
  ): Promise<InventoryDimension | null> {
    const result = await this.service.inventoryDimension({
      where: params,
      select: {
        applyToAllDoctypes: true,
        condition: true,
        createdAt: true,
        creation: true,
        dimensionName: true,
        disabled: true,
        docstatus: true,
        documentType: true,
        fetchFromParent: true,
        id: true,
        idx: true,
        isttable: true,
        mandatoryDependsOn: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        referenceDocument: true,
        reqd: true,
        sourceFieldname: true,
        targetFieldname: true,
        typeOfTransaction: true,
        updatedAt: true,
        validateNegativeStock: true,
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
  @swagger.ApiOkResponse({ type: InventoryDimension })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInventoryDimension(
    @common.Param() params: InventoryDimensionWhereUniqueInput,
    @common.Body() data: InventoryDimensionUpdateInput
  ): Promise<InventoryDimension | null> {
    try {
      return await this.service.updateInventoryDimension({
        where: params,
        data: data,
        select: {
          applyToAllDoctypes: true,
          condition: true,
          createdAt: true,
          creation: true,
          dimensionName: true,
          disabled: true,
          docstatus: true,
          documentType: true,
          fetchFromParent: true,
          id: true,
          idx: true,
          isttable: true,
          mandatoryDependsOn: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          referenceDocument: true,
          reqd: true,
          sourceFieldname: true,
          targetFieldname: true,
          typeOfTransaction: true,
          updatedAt: true,
          validateNegativeStock: true,
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
  @swagger.ApiOkResponse({ type: InventoryDimension })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInventoryDimension(
    @common.Param() params: InventoryDimensionWhereUniqueInput
  ): Promise<InventoryDimension | null> {
    try {
      return await this.service.deleteInventoryDimension({
        where: params,
        select: {
          applyToAllDoctypes: true,
          condition: true,
          createdAt: true,
          creation: true,
          dimensionName: true,
          disabled: true,
          docstatus: true,
          documentType: true,
          fetchFromParent: true,
          id: true,
          idx: true,
          isttable: true,
          mandatoryDependsOn: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          referenceDocument: true,
          reqd: true,
          sourceFieldname: true,
          targetFieldname: true,
          typeOfTransaction: true,
          updatedAt: true,
          validateNegativeStock: true,
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
