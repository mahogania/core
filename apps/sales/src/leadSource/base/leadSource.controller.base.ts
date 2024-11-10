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
import { LeadSourceService } from "../leadSource.service";
import { LeadSourceCreateInput } from "./LeadSourceCreateInput";
import { LeadSource } from "./LeadSource";
import { LeadSourceFindManyArgs } from "./LeadSourceFindManyArgs";
import { LeadSourceWhereUniqueInput } from "./LeadSourceWhereUniqueInput";
import { LeadSourceUpdateInput } from "./LeadSourceUpdateInput";

export class LeadSourceControllerBase {
  constructor(protected readonly service: LeadSourceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LeadSource })
  @swagger.ApiBody({
    type: LeadSourceCreateInput,
  })
  async createLeadSource(
    @common.Body() data: LeadSourceCreateInput
  ): Promise<LeadSource> {
    return await this.service.createLeadSource({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        details: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        sourceName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LeadSource] })
  @ApiNestedQuery(LeadSourceFindManyArgs)
  async leadSources(@common.Req() request: Request): Promise<LeadSource[]> {
    const args = plainToClass(LeadSourceFindManyArgs, request.query);
    return this.service.leadSources({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        details: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        sourceName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LeadSource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async leadSource(
    @common.Param() params: LeadSourceWhereUniqueInput
  ): Promise<LeadSource | null> {
    const result = await this.service.leadSource({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        details: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        sourceName: true,
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
  @swagger.ApiOkResponse({ type: LeadSource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: LeadSourceUpdateInput,
  })
  async updateLeadSource(
    @common.Param() params: LeadSourceWhereUniqueInput,
    @common.Body() data: LeadSourceUpdateInput
  ): Promise<LeadSource | null> {
    try {
      return await this.service.updateLeadSource({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          details: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          sourceName: true,
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
  @swagger.ApiOkResponse({ type: LeadSource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLeadSource(
    @common.Param() params: LeadSourceWhereUniqueInput
  ): Promise<LeadSource | null> {
    try {
      return await this.service.deleteLeadSource({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          details: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          sourceName: true,
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