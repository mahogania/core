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
import { AssociationService } from "../association.service";
import { AssociationCreateInput } from "./AssociationCreateInput";
import { Association } from "./Association";
import { AssociationFindManyArgs } from "./AssociationFindManyArgs";
import { AssociationWhereUniqueInput } from "./AssociationWhereUniqueInput";
import { AssociationUpdateInput } from "./AssociationUpdateInput";

export class AssociationControllerBase {
  constructor(protected readonly service: AssociationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Association })
  @swagger.ApiBody({
    type: AssociationCreateInput,
  })
  async createAssociation(
    @common.Body() data: AssociationCreateInput
  ): Promise<Association> {
    return await this.service.createAssociation({
      data: {
        ...data,

        ascendant: data.ascendant
          ? {
              connect: data.ascendant,
            }
          : undefined,

        descendant: data.descendant
          ? {
              connect: data.descendant,
            }
          : undefined,
      },
      select: {
        ascendant: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        descendant: {
          select: {
            id: true,
          },
        },

        description: true,
        displayName: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Association] })
  @ApiNestedQuery(AssociationFindManyArgs)
  async associations(@common.Req() request: Request): Promise<Association[]> {
    const args = plainToClass(AssociationFindManyArgs, request.query);
    return this.service.associations({
      ...args,
      select: {
        ascendant: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        descendant: {
          select: {
            id: true,
          },
        },

        description: true,
        displayName: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Association })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async association(
    @common.Param() params: AssociationWhereUniqueInput
  ): Promise<Association | null> {
    const result = await this.service.association({
      where: params,
      select: {
        ascendant: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        descendant: {
          select: {
            id: true,
          },
        },

        description: true,
        displayName: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Association })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: AssociationUpdateInput,
  })
  async updateAssociation(
    @common.Param() params: AssociationWhereUniqueInput,
    @common.Body() data: AssociationUpdateInput
  ): Promise<Association | null> {
    try {
      return await this.service.updateAssociation({
        where: params,
        data: {
          ...data,

          ascendant: data.ascendant
            ? {
                connect: data.ascendant,
              }
            : undefined,

          descendant: data.descendant
            ? {
                connect: data.descendant,
              }
            : undefined,
        },
        select: {
          ascendant: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          descendant: {
            select: {
              id: true,
            },
          },

          description: true,
          displayName: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Association })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAssociation(
    @common.Param() params: AssociationWhereUniqueInput
  ): Promise<Association | null> {
    try {
      return await this.service.deleteAssociation({
        where: params,
        select: {
          ascendant: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          descendant: {
            select: {
              id: true,
            },
          },

          description: true,
          displayName: true,
          id: true,
          name: true,
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