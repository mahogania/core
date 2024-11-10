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
import { CompanyHistoryService } from "../companyHistory.service";
import { CompanyHistoryCreateInput } from "./CompanyHistoryCreateInput";
import { CompanyHistory } from "./CompanyHistory";
import { CompanyHistoryFindManyArgs } from "./CompanyHistoryFindManyArgs";
import { CompanyHistoryWhereUniqueInput } from "./CompanyHistoryWhereUniqueInput";
import { CompanyHistoryUpdateInput } from "./CompanyHistoryUpdateInput";

export class CompanyHistoryControllerBase {
  constructor(protected readonly service: CompanyHistoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CompanyHistory })
  async createCompanyHistory(
    @common.Body() data: CompanyHistoryCreateInput
  ): Promise<CompanyHistory> {
    return await this.service.createCompanyHistory({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        highlight: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        updatedAt: true,
        year: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CompanyHistory] })
  @ApiNestedQuery(CompanyHistoryFindManyArgs)
  async companyHistories(
    @common.Req() request: Request
  ): Promise<CompanyHistory[]> {
    const args = plainToClass(CompanyHistoryFindManyArgs, request.query);
    return this.service.companyHistories({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        highlight: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        updatedAt: true,
        year: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CompanyHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async companyHistory(
    @common.Param() params: CompanyHistoryWhereUniqueInput
  ): Promise<CompanyHistory | null> {
    const result = await this.service.companyHistory({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        highlight: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        updatedAt: true,
        year: true,
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
  @swagger.ApiOkResponse({ type: CompanyHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCompanyHistory(
    @common.Param() params: CompanyHistoryWhereUniqueInput,
    @common.Body() data: CompanyHistoryUpdateInput
  ): Promise<CompanyHistory | null> {
    try {
      return await this.service.updateCompanyHistory({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          highlight: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          updatedAt: true,
          year: true,
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
  @swagger.ApiOkResponse({ type: CompanyHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCompanyHistory(
    @common.Param() params: CompanyHistoryWhereUniqueInput
  ): Promise<CompanyHistory | null> {
    try {
      return await this.service.deleteCompanyHistory({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          highlight: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          updatedAt: true,
          year: true,
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
