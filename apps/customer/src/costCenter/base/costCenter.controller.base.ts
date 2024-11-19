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
import { CostCenterService } from "../costCenter.service";
import { CostCenterCreateInput } from "./CostCenterCreateInput";
import { CostCenter } from "./CostCenter";
import { CostCenterFindManyArgs } from "./CostCenterFindManyArgs";
import { CostCenterWhereUniqueInput } from "./CostCenterWhereUniqueInput";
import { CostCenterUpdateInput } from "./CostCenterUpdateInput";

export class CostCenterControllerBase {
  constructor(protected readonly service: CostCenterService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CostCenter })
  async createCostCenter(
    @common.Body() data: CostCenterCreateInput
  ): Promise<CostCenter> {
    return await this.service.createCostCenter({
      data: data,
      select: {
        company: true,
        costCenterName: true,
        costCenterNumber: true,
        createdAt: true,
        creation: true,
        disabled: true,
        docstatus: true,
        id: true,
        idx: true,
        isGroup: true,
        lft: true,
        modified: true,
        modifiedBy: true,
        name: true,
        oldParent: true,
        owner: true,
        parentCostCenter: true,
        rgt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CostCenter] })
  @ApiNestedQuery(CostCenterFindManyArgs)
  async costCenters(@common.Req() request: Request): Promise<CostCenter[]> {
    const args = plainToClass(CostCenterFindManyArgs, request.query);
    return this.service.costCenters({
      ...args,
      select: {
        company: true,
        costCenterName: true,
        costCenterNumber: true,
        createdAt: true,
        creation: true,
        disabled: true,
        docstatus: true,
        id: true,
        idx: true,
        isGroup: true,
        lft: true,
        modified: true,
        modifiedBy: true,
        name: true,
        oldParent: true,
        owner: true,
        parentCostCenter: true,
        rgt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CostCenter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async costCenter(
    @common.Param() params: CostCenterWhereUniqueInput
  ): Promise<CostCenter | null> {
    const result = await this.service.costCenter({
      where: params,
      select: {
        company: true,
        costCenterName: true,
        costCenterNumber: true,
        createdAt: true,
        creation: true,
        disabled: true,
        docstatus: true,
        id: true,
        idx: true,
        isGroup: true,
        lft: true,
        modified: true,
        modifiedBy: true,
        name: true,
        oldParent: true,
        owner: true,
        parentCostCenter: true,
        rgt: true,
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
  @swagger.ApiOkResponse({ type: CostCenter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCostCenter(
    @common.Param() params: CostCenterWhereUniqueInput,
    @common.Body() data: CostCenterUpdateInput
  ): Promise<CostCenter | null> {
    try {
      return await this.service.updateCostCenter({
        where: params,
        data: data,
        select: {
          company: true,
          costCenterName: true,
          costCenterNumber: true,
          createdAt: true,
          creation: true,
          disabled: true,
          docstatus: true,
          id: true,
          idx: true,
          isGroup: true,
          lft: true,
          modified: true,
          modifiedBy: true,
          name: true,
          oldParent: true,
          owner: true,
          parentCostCenter: true,
          rgt: true,
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
  @swagger.ApiOkResponse({ type: CostCenter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCostCenter(
    @common.Param() params: CostCenterWhereUniqueInput
  ): Promise<CostCenter | null> {
    try {
      return await this.service.deleteCostCenter({
        where: params,
        select: {
          company: true,
          costCenterName: true,
          costCenterNumber: true,
          createdAt: true,
          creation: true,
          disabled: true,
          docstatus: true,
          id: true,
          idx: true,
          isGroup: true,
          lft: true,
          modified: true,
          modifiedBy: true,
          name: true,
          oldParent: true,
          owner: true,
          parentCostCenter: true,
          rgt: true,
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