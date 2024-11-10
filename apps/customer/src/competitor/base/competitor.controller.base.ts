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
import { CompetitorService } from "../competitor.service";
import { CompetitorCreateInput } from "./CompetitorCreateInput";
import { Competitor } from "./Competitor";
import { CompetitorFindManyArgs } from "./CompetitorFindManyArgs";
import { CompetitorWhereUniqueInput } from "./CompetitorWhereUniqueInput";
import { CompetitorUpdateInput } from "./CompetitorUpdateInput";

export class CompetitorControllerBase {
  constructor(protected readonly service: CompetitorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Competitor })
  async createCompetitor(
    @common.Body() data: CompetitorCreateInput
  ): Promise<Competitor> {
    return await this.service.createCompetitor({
      data: data,
      select: {
        competitorName: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        updatedAt: true,
        website: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Competitor] })
  @ApiNestedQuery(CompetitorFindManyArgs)
  async competitors(@common.Req() request: Request): Promise<Competitor[]> {
    const args = plainToClass(CompetitorFindManyArgs, request.query);
    return this.service.competitors({
      ...args,
      select: {
        competitorName: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        updatedAt: true,
        website: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Competitor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async competitor(
    @common.Param() params: CompetitorWhereUniqueInput
  ): Promise<Competitor | null> {
    const result = await this.service.competitor({
      where: params,
      select: {
        competitorName: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        updatedAt: true,
        website: true,
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
  @swagger.ApiOkResponse({ type: Competitor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCompetitor(
    @common.Param() params: CompetitorWhereUniqueInput,
    @common.Body() data: CompetitorUpdateInput
  ): Promise<Competitor | null> {
    try {
      return await this.service.updateCompetitor({
        where: params,
        data: data,
        select: {
          competitorName: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          updatedAt: true,
          website: true,
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
  @swagger.ApiOkResponse({ type: Competitor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCompetitor(
    @common.Param() params: CompetitorWhereUniqueInput
  ): Promise<Competitor | null> {
    try {
      return await this.service.deleteCompetitor({
        where: params,
        select: {
          competitorName: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          updatedAt: true,
          website: true,
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