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
import { ConstraintService } from "../constraint.service";
import { ConstraintCreateInput } from "./ConstraintCreateInput";
import { Constraint } from "./Constraint";
import { ConstraintFindManyArgs } from "./ConstraintFindManyArgs";
import { ConstraintWhereUniqueInput } from "./ConstraintWhereUniqueInput";
import { ConstraintUpdateInput } from "./ConstraintUpdateInput";

export class ConstraintControllerBase {
  constructor(protected readonly service: ConstraintService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Constraint })
  @swagger.ApiBody({
    type: ConstraintCreateInput,
  })
  async createConstraint(
    @common.Body() data: ConstraintCreateInput
  ): Promise<Constraint> {
    return await this.service.createConstraint({
      data: {
        ...data,

        drivenOption: data.drivenOption
          ? {
              connect: data.drivenOption,
            }
          : undefined,

        drivingOption: data.drivingOption
          ? {
              connect: data.drivingOption,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        depth: true,

        drivenOption: {
          select: {
            id: true,
          },
        },

        drivingOption: {
          select: {
            id: true,
          },
        },

        id: true,
        kind: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Constraint] })
  @ApiNestedQuery(ConstraintFindManyArgs)
  async constraints(@common.Req() request: Request): Promise<Constraint[]> {
    const args = plainToClass(ConstraintFindManyArgs, request.query);
    return this.service.constraints({
      ...args,
      select: {
        createdAt: true,
        depth: true,

        drivenOption: {
          select: {
            id: true,
          },
        },

        drivingOption: {
          select: {
            id: true,
          },
        },

        id: true,
        kind: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Constraint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async constraint(
    @common.Param() params: ConstraintWhereUniqueInput
  ): Promise<Constraint | null> {
    const result = await this.service.constraint({
      where: params,
      select: {
        createdAt: true,
        depth: true,

        drivenOption: {
          select: {
            id: true,
          },
        },

        drivingOption: {
          select: {
            id: true,
          },
        },

        id: true,
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
  @swagger.ApiOkResponse({ type: Constraint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ConstraintUpdateInput,
  })
  async updateConstraint(
    @common.Param() params: ConstraintWhereUniqueInput,
    @common.Body() data: ConstraintUpdateInput
  ): Promise<Constraint | null> {
    try {
      return await this.service.updateConstraint({
        where: params,
        data: {
          ...data,

          drivenOption: data.drivenOption
            ? {
                connect: data.drivenOption,
              }
            : undefined,

          drivingOption: data.drivingOption
            ? {
                connect: data.drivingOption,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          depth: true,

          drivenOption: {
            select: {
              id: true,
            },
          },

          drivingOption: {
            select: {
              id: true,
            },
          },

          id: true,
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
  @swagger.ApiOkResponse({ type: Constraint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteConstraint(
    @common.Param() params: ConstraintWhereUniqueInput
  ): Promise<Constraint | null> {
    try {
      return await this.service.deleteConstraint({
        where: params,
        select: {
          createdAt: true,
          depth: true,

          drivenOption: {
            select: {
              id: true,
            },
          },

          drivingOption: {
            select: {
              id: true,
            },
          },

          id: true,
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
