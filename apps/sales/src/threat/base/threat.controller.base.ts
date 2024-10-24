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
import { ThreatService } from "../threat.service";
import { ThreatCreateInput } from "./ThreatCreateInput";
import { Threat } from "./Threat";
import { ThreatFindManyArgs } from "./ThreatFindManyArgs";
import { ThreatWhereUniqueInput } from "./ThreatWhereUniqueInput";
import { ThreatUpdateInput } from "./ThreatUpdateInput";
import { ProposalFindManyArgs } from "../../proposal/base/ProposalFindManyArgs";
import { Proposal } from "../../proposal/base/Proposal";
import { ProposalWhereUniqueInput } from "../../proposal/base/ProposalWhereUniqueInput";

export class ThreatControllerBase {
  constructor(protected readonly service: ThreatService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Threat })
  @swagger.ApiBody({
    type: ThreatCreateInput,
  })
  async createThreat(@common.Body() data: ThreatCreateInput): Promise<Threat> {
    return await this.service.createThreat({
      data: {
        ...data,

        competitor: data.competitor
          ? {
              connect: data.competitor,
            }
          : undefined,
      },
      select: {
        competitor: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Threat] })
  @ApiNestedQuery(ThreatFindManyArgs)
  async threats(@common.Req() request: Request): Promise<Threat[]> {
    const args = plainToClass(ThreatFindManyArgs, request.query);
    return this.service.threats({
      ...args,
      select: {
        competitor: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Threat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async threat(
    @common.Param() params: ThreatWhereUniqueInput
  ): Promise<Threat | null> {
    const result = await this.service.threat({
      where: params,
      select: {
        competitor: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: Threat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ThreatUpdateInput,
  })
  async updateThreat(
    @common.Param() params: ThreatWhereUniqueInput,
    @common.Body() data: ThreatUpdateInput
  ): Promise<Threat | null> {
    try {
      return await this.service.updateThreat({
        where: params,
        data: {
          ...data,

          competitor: data.competitor
            ? {
                connect: data.competitor,
              }
            : undefined,
        },
        select: {
          competitor: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: Threat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteThreat(
    @common.Param() params: ThreatWhereUniqueInput
  ): Promise<Threat | null> {
    try {
      return await this.service.deleteThreat({
        where: params,
        select: {
          competitor: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
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
    @common.Param() params: ThreatWhereUniqueInput
  ): Promise<Proposal[]> {
    const query = plainToClass(ProposalFindManyArgs, request.query);
    const results = await this.service.findProposals(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        opportunity: {
          select: {
            id: true,
          },
        },

        threat: {
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
    @common.Param() params: ThreatWhereUniqueInput,
    @common.Body() body: ProposalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      proposals: {
        connect: body,
      },
    };
    await this.service.updateThreat({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/proposals")
  async updateProposals(
    @common.Param() params: ThreatWhereUniqueInput,
    @common.Body() body: ProposalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      proposals: {
        set: body,
      },
    };
    await this.service.updateThreat({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/proposals")
  async disconnectProposals(
    @common.Param() params: ThreatWhereUniqueInput,
    @common.Body() body: ProposalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      proposals: {
        disconnect: body,
      },
    };
    await this.service.updateThreat({
      where: params,
      data,
      select: { id: true },
    });
  }
}
