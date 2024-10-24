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
import { StrengthService } from "../strength.service";
import { StrengthCreateInput } from "./StrengthCreateInput";
import { StrengthWhereInput } from "./StrengthWhereInput";
import { StrengthWhereUniqueInput } from "./StrengthWhereUniqueInput";
import { StrengthFindManyArgs } from "./StrengthFindManyArgs";
import { StrengthUpdateInput } from "./StrengthUpdateInput";
import { Strength } from "./Strength";
import { FeatureFindManyArgs } from "../../feature/base/FeatureFindManyArgs";
import { Feature } from "../../feature/base/Feature";
import { FeatureWhereUniqueInput } from "../../feature/base/FeatureWhereUniqueInput";

export class StrengthGrpcControllerBase {
  constructor(protected readonly service: StrengthService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Strength })
  @GrpcMethod("StrengthService", "createStrength")
  async createStrength(
    @common.Body() data: StrengthCreateInput
  ): Promise<Strength> {
    return await this.service.createStrength({
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
  @swagger.ApiOkResponse({ type: [Strength] })
  @ApiNestedQuery(StrengthFindManyArgs)
  @GrpcMethod("StrengthService", "strengths")
  async strengths(@common.Req() request: Request): Promise<Strength[]> {
    const args = plainToClass(StrengthFindManyArgs, request.query);
    return this.service.strengths({
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
  @swagger.ApiOkResponse({ type: Strength })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("StrengthService", "strength")
  async strength(
    @common.Param() params: StrengthWhereUniqueInput
  ): Promise<Strength | null> {
    const result = await this.service.strength({
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
  @swagger.ApiOkResponse({ type: Strength })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("StrengthService", "updateStrength")
  async updateStrength(
    @common.Param() params: StrengthWhereUniqueInput,
    @common.Body() data: StrengthUpdateInput
  ): Promise<Strength | null> {
    try {
      return await this.service.updateStrength({
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
  @swagger.ApiOkResponse({ type: Strength })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("StrengthService", "deleteStrength")
  async deleteStrength(
    @common.Param() params: StrengthWhereUniqueInput
  ): Promise<Strength | null> {
    try {
      return await this.service.deleteStrength({
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

  @common.Get("/:id/features")
  @ApiNestedQuery(FeatureFindManyArgs)
  @GrpcMethod("StrengthService", "findManyFeatures")
  async findManyFeatures(
    @common.Req() request: Request,
    @common.Param() params: StrengthWhereUniqueInput
  ): Promise<Feature[]> {
    const query = plainToClass(FeatureFindManyArgs, request.query);
    const results = await this.service.findFeatures(params.id, {
      ...query,
      select: {
        bundle: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        displayName: true,
        id: true,
        name: true,

        strength: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        weakness: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/features")
  @GrpcMethod("StrengthService", "connectFeatures")
  async connectFeatures(
    @common.Param() params: StrengthWhereUniqueInput,
    @common.Body() body: FeatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      features: {
        connect: body,
      },
    };
    await this.service.updateStrength({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/features")
  @GrpcMethod("StrengthService", "updateFeatures")
  async updateFeatures(
    @common.Param() params: StrengthWhereUniqueInput,
    @common.Body() body: FeatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      features: {
        set: body,
      },
    };
    await this.service.updateStrength({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/features")
  @GrpcMethod("StrengthService", "disconnectFeatures")
  async disconnectFeatures(
    @common.Param() params: StrengthWhereUniqueInput,
    @common.Body() body: FeatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      features: {
        disconnect: body,
      },
    };
    await this.service.updateStrength({
      where: params,
      data,
      select: { id: true },
    });
  }
}
