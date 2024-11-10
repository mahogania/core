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
import { WeaknessService } from "../weakness.service";
import { WeaknessCreateInput } from "./WeaknessCreateInput";
import { Weakness } from "./Weakness";
import { WeaknessFindManyArgs } from "./WeaknessFindManyArgs";
import { WeaknessWhereUniqueInput } from "./WeaknessWhereUniqueInput";
import { WeaknessUpdateInput } from "./WeaknessUpdateInput";
import { FeatureFindManyArgs } from "../../feature/base/FeatureFindManyArgs";
import { Feature } from "../../feature/base/Feature";
import { FeatureWhereUniqueInput } from "../../feature/base/FeatureWhereUniqueInput";

export class WeaknessControllerBase {
  constructor(protected readonly service: WeaknessService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Weakness })
  @swagger.ApiBody({
    type: WeaknessCreateInput,
  })
  async createWeakness(
    @common.Body() data: WeaknessCreateInput
  ): Promise<Weakness> {
    return await this.service.createWeakness({
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
  @swagger.ApiOkResponse({ type: [Weakness] })
  @ApiNestedQuery(WeaknessFindManyArgs)
  async weaknesses(@common.Req() request: Request): Promise<Weakness[]> {
    const args = plainToClass(WeaknessFindManyArgs, request.query);
    return this.service.weaknesses({
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
  @swagger.ApiOkResponse({ type: Weakness })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async weakness(
    @common.Param() params: WeaknessWhereUniqueInput
  ): Promise<Weakness | null> {
    const result = await this.service.weakness({
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
  @swagger.ApiOkResponse({ type: Weakness })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: WeaknessUpdateInput,
  })
  async updateWeakness(
    @common.Param() params: WeaknessWhereUniqueInput,
    @common.Body() data: WeaknessUpdateInput
  ): Promise<Weakness | null> {
    try {
      return await this.service.updateWeakness({
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
  @swagger.ApiOkResponse({ type: Weakness })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWeakness(
    @common.Param() params: WeaknessWhereUniqueInput
  ): Promise<Weakness | null> {
    try {
      return await this.service.deleteWeakness({
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
  async findFeatures(
    @common.Req() request: Request,
    @common.Param() params: WeaknessWhereUniqueInput
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

  @common.Post("/:id/features")
  async connectFeatures(
    @common.Param() params: WeaknessWhereUniqueInput,
    @common.Body() body: FeatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      features: {
        connect: body,
      },
    };
    await this.service.updateWeakness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/features")
  async updateFeatures(
    @common.Param() params: WeaknessWhereUniqueInput,
    @common.Body() body: FeatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      features: {
        set: body,
      },
    };
    await this.service.updateWeakness({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/features")
  async disconnectFeatures(
    @common.Param() params: WeaknessWhereUniqueInput,
    @common.Body() body: FeatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      features: {
        disconnect: body,
      },
    };
    await this.service.updateWeakness({
      where: params,
      data,
      select: { id: true },
    });
  }
}
