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
import { ProposalService } from "../proposal.service";
import { ProposalCreateInput } from "./ProposalCreateInput";
import { Proposal } from "./Proposal";
import { ProposalFindManyArgs } from "./ProposalFindManyArgs";
import { ProposalWhereUniqueInput } from "./ProposalWhereUniqueInput";
import { ProposalUpdateInput } from "./ProposalUpdateInput";
import { QuoteFindManyArgs } from "../../quote/base/QuoteFindManyArgs";
import { Quote } from "../../quote/base/Quote";
import { QuoteWhereUniqueInput } from "../../quote/base/QuoteWhereUniqueInput";

export class ProposalControllerBase {
  constructor(protected readonly service: ProposalService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Proposal })
  @swagger.ApiBody({
    type: ProposalCreateInput,
  })
  async createProposal(
    @common.Body() data: ProposalCreateInput
  ): Promise<Proposal> {
    return await this.service.createProposal({
      data: {
        ...data,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,

        opportunity: data.opportunity
          ? {
              connect: data.opportunity,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Proposal] })
  @ApiNestedQuery(ProposalFindManyArgs)
  async proposals(@common.Req() request: Request): Promise<Proposal[]> {
    const args = plainToClass(ProposalFindManyArgs, request.query);
    return this.service.proposals({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Proposal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async proposal(
    @common.Param() params: ProposalWhereUniqueInput
  ): Promise<Proposal | null> {
    const result = await this.service.proposal({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Proposal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ProposalUpdateInput,
  })
  async updateProposal(
    @common.Param() params: ProposalWhereUniqueInput,
    @common.Body() data: ProposalUpdateInput
  ): Promise<Proposal | null> {
    try {
      return await this.service.updateProposal({
        where: params,
        data: {
          ...data,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,

          opportunity: data.opportunity
            ? {
                connect: data.opportunity,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Proposal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProposal(
    @common.Param() params: ProposalWhereUniqueInput
  ): Promise<Proposal | null> {
    try {
      return await this.service.deleteProposal({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/quotes")
  @ApiNestedQuery(QuoteFindManyArgs)
  async findQuotes(
    @common.Req() request: Request,
    @common.Param() params: ProposalWhereUniqueInput
  ): Promise<Quote[]> {
    const query = plainToClass(QuoteFindManyArgs, request.query);
    const results = await this.service.findQuotes(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        proposal: {
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

  @common.Post("/:id/quotes")
  async connectQuotes(
    @common.Param() params: ProposalWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quotes: {
        connect: body,
      },
    };
    await this.service.updateProposal({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/quotes")
  async updateQuotes(
    @common.Param() params: ProposalWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quotes: {
        set: body,
      },
    };
    await this.service.updateProposal({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/quotes")
  async disconnectQuotes(
    @common.Param() params: ProposalWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quotes: {
        disconnect: body,
      },
    };
    await this.service.updateProposal({
      where: params,
      data,
      select: { id: true },
    });
  }
}