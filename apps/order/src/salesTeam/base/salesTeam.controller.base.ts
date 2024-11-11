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
import { SalesTeamService } from "../salesTeam.service";
import { SalesTeamCreateInput } from "./SalesTeamCreateInput";
import { SalesTeam } from "./SalesTeam";
import { SalesTeamFindManyArgs } from "./SalesTeamFindManyArgs";
import { SalesTeamWhereUniqueInput } from "./SalesTeamWhereUniqueInput";
import { SalesTeamUpdateInput } from "./SalesTeamUpdateInput";

export class SalesTeamControllerBase {
  constructor(protected readonly service: SalesTeamService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SalesTeam })
  async createSalesTeam(
    @common.Body() data: SalesTeamCreateInput
  ): Promise<SalesTeam> {
    return await this.service.createSalesTeam({
      data: data,
      select: {
        allocatedAmount: true,
        allocatedPercentage: true,
        commissionRate: true,
        contactNo: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        incentives: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        salesPerson: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SalesTeam] })
  @ApiNestedQuery(SalesTeamFindManyArgs)
  async salesTeams(@common.Req() request: Request): Promise<SalesTeam[]> {
    const args = plainToClass(SalesTeamFindManyArgs, request.query);
    return this.service.salesTeams({
      ...args,
      select: {
        allocatedAmount: true,
        allocatedPercentage: true,
        commissionRate: true,
        contactNo: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        incentives: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        salesPerson: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SalesTeam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async salesTeam(
    @common.Param() params: SalesTeamWhereUniqueInput
  ): Promise<SalesTeam | null> {
    const result = await this.service.salesTeam({
      where: params,
      select: {
        allocatedAmount: true,
        allocatedPercentage: true,
        commissionRate: true,
        contactNo: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        incentives: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        salesPerson: true,
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
  @swagger.ApiOkResponse({ type: SalesTeam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSalesTeam(
    @common.Param() params: SalesTeamWhereUniqueInput,
    @common.Body() data: SalesTeamUpdateInput
  ): Promise<SalesTeam | null> {
    try {
      return await this.service.updateSalesTeam({
        where: params,
        data: data,
        select: {
          allocatedAmount: true,
          allocatedPercentage: true,
          commissionRate: true,
          contactNo: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          incentives: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentField: true,
          parentType: true,
          salesPerson: true,
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
  @swagger.ApiOkResponse({ type: SalesTeam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSalesTeam(
    @common.Param() params: SalesTeamWhereUniqueInput
  ): Promise<SalesTeam | null> {
    try {
      return await this.service.deleteSalesTeam({
        where: params,
        select: {
          allocatedAmount: true,
          allocatedPercentage: true,
          commissionRate: true,
          contactNo: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          incentives: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentField: true,
          parentType: true,
          salesPerson: true,
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