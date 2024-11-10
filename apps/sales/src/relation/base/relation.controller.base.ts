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
import { RelationService } from "../relation.service";
import { RelationCreateInput } from "./RelationCreateInput";
import { Relation } from "./Relation";
import { RelationFindManyArgs } from "./RelationFindManyArgs";
import { RelationWhereUniqueInput } from "./RelationWhereUniqueInput";
import { RelationUpdateInput } from "./RelationUpdateInput";

export class RelationControllerBase {
  constructor(protected readonly service: RelationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Relation })
  @swagger.ApiBody({
    type: RelationCreateInput,
  })
  async createRelation(
    @common.Body() data: RelationCreateInput
  ): Promise<Relation> {
    return await this.service.createRelation({
      data: {
        ...data,

        ascendantBusiness: data.ascendantBusiness
          ? {
              connect: data.ascendantBusiness,
            }
          : undefined,

        descendantBusiness: data.descendantBusiness
          ? {
              connect: data.descendantBusiness,
            }
          : undefined,

        industry: data.industry
          ? {
              connect: data.industry,
            }
          : undefined,
      },
      select: {
        ascendantBusiness: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        descendantBusiness: {
          select: {
            id: true,
          },
        },

        id: true,

        industry: {
          select: {
            id: true,
          },
        },

        kind: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Relation] })
  @ApiNestedQuery(RelationFindManyArgs)
  async relations(@common.Req() request: Request): Promise<Relation[]> {
    const args = plainToClass(RelationFindManyArgs, request.query);
    return this.service.relations({
      ...args,
      select: {
        ascendantBusiness: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        descendantBusiness: {
          select: {
            id: true,
          },
        },

        id: true,

        industry: {
          select: {
            id: true,
          },
        },

        kind: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Relation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async relation(
    @common.Param() params: RelationWhereUniqueInput
  ): Promise<Relation | null> {
    const result = await this.service.relation({
      where: params,
      select: {
        ascendantBusiness: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        descendantBusiness: {
          select: {
            id: true,
          },
        },

        id: true,

        industry: {
          select: {
            id: true,
          },
        },

        kind: true,
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
  @swagger.ApiOkResponse({ type: Relation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: RelationUpdateInput,
  })
  async updateRelation(
    @common.Param() params: RelationWhereUniqueInput,
    @common.Body() data: RelationUpdateInput
  ): Promise<Relation | null> {
    try {
      return await this.service.updateRelation({
        where: params,
        data: {
          ...data,

          ascendantBusiness: data.ascendantBusiness
            ? {
                connect: data.ascendantBusiness,
              }
            : undefined,

          descendantBusiness: data.descendantBusiness
            ? {
                connect: data.descendantBusiness,
              }
            : undefined,

          industry: data.industry
            ? {
                connect: data.industry,
              }
            : undefined,
        },
        select: {
          ascendantBusiness: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          descendantBusiness: {
            select: {
              id: true,
            },
          },

          id: true,

          industry: {
            select: {
              id: true,
            },
          },

          kind: true,
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
  @swagger.ApiOkResponse({ type: Relation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRelation(
    @common.Param() params: RelationWhereUniqueInput
  ): Promise<Relation | null> {
    try {
      return await this.service.deleteRelation({
        where: params,
        select: {
          ascendantBusiness: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          descendantBusiness: {
            select: {
              id: true,
            },
          },

          id: true,

          industry: {
            select: {
              id: true,
            },
          },

          kind: true,
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