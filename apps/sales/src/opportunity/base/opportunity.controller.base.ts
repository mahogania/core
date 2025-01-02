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
import { OpportunityService } from "../opportunity.service";
import { OpportunityCreateInput } from "./OpportunityCreateInput";
import { Opportunity } from "./Opportunity";
import { OpportunityFindManyArgs } from "./OpportunityFindManyArgs";
import { OpportunityWhereUniqueInput } from "./OpportunityWhereUniqueInput";
import { OpportunityUpdateInput } from "./OpportunityUpdateInput";
import { ProposalFindManyArgs } from "../../proposal/base/ProposalFindManyArgs";
import { Proposal } from "../../proposal/base/Proposal";
import { ProposalWhereUniqueInput } from "../../proposal/base/ProposalWhereUniqueInput";

export class OpportunityControllerBase {
  constructor(protected readonly service: OpportunityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Opportunity })
  @swagger.ApiBody({
    type: OpportunityCreateInput,
  })
  async createOpportunity(
    @common.Body() data: OpportunityCreateInput
  ): Promise<Opportunity> {
    return await this.service.createOpportunity({
      data: {
        ...data,

        unit: data.unit
          ? {
              connect: data.unit,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        unit: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Opportunity] })
  @ApiNestedQuery(OpportunityFindManyArgs)
  async opportunities(@common.Req() request: Request): Promise<Opportunity[]> {
    const args = plainToClass(OpportunityFindManyArgs, request.query);
    return this.service.opportunities({
      ...args,
      select: {
        createdAt: true,
        id: true,

        unit: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Opportunity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async opportunity(
    @common.Param() params: OpportunityWhereUniqueInput
  ): Promise<Opportunity | null> {
    const result = await this.service.opportunity({
      where: params,
      select: {
        createdAt: true,
        id: true,

        unit: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Opportunity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: OpportunityUpdateInput,
  })
  async updateOpportunity(
    @common.Param() params: OpportunityWhereUniqueInput,
    @common.Body() data: OpportunityUpdateInput
  ): Promise<Opportunity | null> {
    try {
      return await this.service.updateOpportunity({
        where: params,
        data: {
          ...data,

          unit: data.unit
            ? {
                connect: data.unit,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          unit: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Opportunity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOpportunity(
    @common.Param() params: OpportunityWhereUniqueInput
  ): Promise<Opportunity | null> {
    try {
      return await this.service.deleteOpportunity({
        where: params,
        select: {
          createdAt: true,
          id: true,

          unit: {
            select: {
              id: true,
            },
          },

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

  @common.Get("/:id/proposals")
  @ApiNestedQuery(ProposalFindManyArgs)
  async findProposals(
    @common.Req() request: Request,
    @common.Param() params: OpportunityWhereUniqueInput
  ): Promise<Proposal[]> {
    const query = plainToClass(ProposalFindManyArgs, request.query);
    const results = await this.service.findProposals(params.id, {
      ...query,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,

        opportunity: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/proposals")
  async connectProposals(
    @common.Param() params: OpportunityWhereUniqueInput,
    @common.Body() body: ProposalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      proposals: {
        connect: body,
      },
    };
    await this.service.updateOpportunity({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/proposals")
  async updateProposals(
    @common.Param() params: OpportunityWhereUniqueInput,
    @common.Body() body: ProposalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      proposals: {
        set: body,
      },
    };
    await this.service.updateOpportunity({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/proposals")
  async disconnectProposals(
    @common.Param() params: OpportunityWhereUniqueInput,
    @common.Body() body: ProposalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      proposals: {
        disconnect: body,
      },
    };
    await this.service.updateOpportunity({
      where: params,
      data,
      select: { id: true },
    });
  }
}