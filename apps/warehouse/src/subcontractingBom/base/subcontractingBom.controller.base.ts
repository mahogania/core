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
import { SubcontractingBomService } from "../subcontractingBom.service";
import { SubcontractingBomCreateInput } from "./SubcontractingBomCreateInput";
import { SubcontractingBom } from "./SubcontractingBom";
import { SubcontractingBomFindManyArgs } from "./SubcontractingBomFindManyArgs";
import { SubcontractingBomWhereUniqueInput } from "./SubcontractingBomWhereUniqueInput";
import { SubcontractingBomUpdateInput } from "./SubcontractingBomUpdateInput";

export class SubcontractingBomControllerBase {
  constructor(protected readonly service: SubcontractingBomService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SubcontractingBom })
  async createSubcontractingBom(
    @common.Body() data: SubcontractingBomCreateInput
  ): Promise<SubcontractingBom> {
    return await this.service.createSubcontractingBom({
      data: data,
      select: {
        conversionFactor: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        finishedGood: true,
        finishedGoodBom: true,
        finishedGoodQty: true,
        finishedGoodUom: true,
        id: true,
        idx: true,
        isActive: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        serviceItem: true,
        serviceItemQty: true,
        serviceItemUom: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SubcontractingBom] })
  @ApiNestedQuery(SubcontractingBomFindManyArgs)
  async subcontractingBoms(
    @common.Req() request: Request
  ): Promise<SubcontractingBom[]> {
    const args = plainToClass(SubcontractingBomFindManyArgs, request.query);
    return this.service.subcontractingBoms({
      ...args,
      select: {
        conversionFactor: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        finishedGood: true,
        finishedGoodBom: true,
        finishedGoodQty: true,
        finishedGoodUom: true,
        id: true,
        idx: true,
        isActive: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        serviceItem: true,
        serviceItemQty: true,
        serviceItemUom: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SubcontractingBom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async subcontractingBom(
    @common.Param() params: SubcontractingBomWhereUniqueInput
  ): Promise<SubcontractingBom | null> {
    const result = await this.service.subcontractingBom({
      where: params,
      select: {
        conversionFactor: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        finishedGood: true,
        finishedGoodBom: true,
        finishedGoodQty: true,
        finishedGoodUom: true,
        id: true,
        idx: true,
        isActive: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        serviceItem: true,
        serviceItemQty: true,
        serviceItemUom: true,
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
  @swagger.ApiOkResponse({ type: SubcontractingBom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSubcontractingBom(
    @common.Param() params: SubcontractingBomWhereUniqueInput,
    @common.Body() data: SubcontractingBomUpdateInput
  ): Promise<SubcontractingBom | null> {
    try {
      return await this.service.updateSubcontractingBom({
        where: params,
        data: data,
        select: {
          conversionFactor: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          finishedGood: true,
          finishedGoodBom: true,
          finishedGoodQty: true,
          finishedGoodUom: true,
          id: true,
          idx: true,
          isActive: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          serviceItem: true,
          serviceItemQty: true,
          serviceItemUom: true,
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
  @swagger.ApiOkResponse({ type: SubcontractingBom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSubcontractingBom(
    @common.Param() params: SubcontractingBomWhereUniqueInput
  ): Promise<SubcontractingBom | null> {
    try {
      return await this.service.deleteSubcontractingBom({
        where: params,
        select: {
          conversionFactor: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          finishedGood: true,
          finishedGoodBom: true,
          finishedGoodQty: true,
          finishedGoodUom: true,
          id: true,
          idx: true,
          isActive: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          serviceItem: true,
          serviceItemQty: true,
          serviceItemUom: true,
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