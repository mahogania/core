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
import { GrpcMethod } from "@nestjs/microservices";
import { PointsOfInterestLocaleService } from "../pointsOfInterestLocale.service";
import { PointsOfInterestLocaleCreateInput } from "./PointsOfInterestLocaleCreateInput";
import { PointsOfInterestLocaleWhereInput } from "./PointsOfInterestLocaleWhereInput";
import { PointsOfInterestLocaleWhereUniqueInput } from "./PointsOfInterestLocaleWhereUniqueInput";
import { PointsOfInterestLocaleFindManyArgs } from "./PointsOfInterestLocaleFindManyArgs";
import { PointsOfInterestLocaleUpdateInput } from "./PointsOfInterestLocaleUpdateInput";
import { PointsOfInterestLocale } from "./PointsOfInterestLocale";

export class PointsOfInterestLocaleGrpcControllerBase {
  constructor(protected readonly service: PointsOfInterestLocaleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PointsOfInterestLocale })
  @GrpcMethod("PointsOfInterestLocaleService", "createPointsOfInterestLocale")
  async createPointsOfInterestLocale(
    @common.Body() data: PointsOfInterestLocaleCreateInput
  ): Promise<PointsOfInterestLocale> {
    return await this.service.createPointsOfInterestLocale({
      data: {
        ...data,

        pointsOfInterest: data.pointsOfInterest
          ? {
              connect: data.pointsOfInterest,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        pointsOfInterest: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PointsOfInterestLocale] })
  @ApiNestedQuery(PointsOfInterestLocaleFindManyArgs)
  @GrpcMethod("PointsOfInterestLocaleService", "pointsOfInterestLocales")
  async pointsOfInterestLocales(
    @common.Req() request: Request
  ): Promise<PointsOfInterestLocale[]> {
    const args = plainToClass(
      PointsOfInterestLocaleFindManyArgs,
      request.query
    );
    return this.service.pointsOfInterestLocales({
      ...args,
      select: {
        createdAt: true,
        id: true,

        pointsOfInterest: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PointsOfInterestLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PointsOfInterestLocaleService", "pointsOfInterestLocale")
  async pointsOfInterestLocale(
    @common.Param() params: PointsOfInterestLocaleWhereUniqueInput
  ): Promise<PointsOfInterestLocale | null> {
    const result = await this.service.pointsOfInterestLocale({
      where: params,
      select: {
        createdAt: true,
        id: true,

        pointsOfInterest: {
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
  @swagger.ApiOkResponse({ type: PointsOfInterestLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PointsOfInterestLocaleService", "updatePointsOfInterestLocale")
  async updatePointsOfInterestLocale(
    @common.Param() params: PointsOfInterestLocaleWhereUniqueInput,
    @common.Body() data: PointsOfInterestLocaleUpdateInput
  ): Promise<PointsOfInterestLocale | null> {
    try {
      return await this.service.updatePointsOfInterestLocale({
        where: params,
        data: {
          ...data,

          pointsOfInterest: data.pointsOfInterest
            ? {
                connect: data.pointsOfInterest,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          pointsOfInterest: {
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
  @swagger.ApiOkResponse({ type: PointsOfInterestLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PointsOfInterestLocaleService", "deletePointsOfInterestLocale")
  async deletePointsOfInterestLocale(
    @common.Param() params: PointsOfInterestLocaleWhereUniqueInput
  ): Promise<PointsOfInterestLocale | null> {
    try {
      return await this.service.deletePointsOfInterestLocale({
        where: params,
        select: {
          createdAt: true,
          id: true,

          pointsOfInterest: {
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
}
