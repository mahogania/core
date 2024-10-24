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
import { BundleService } from "../bundle.service";
import { BundleCreateInput } from "./BundleCreateInput";
import { BundleWhereInput } from "./BundleWhereInput";
import { BundleWhereUniqueInput } from "./BundleWhereUniqueInput";
import { BundleFindManyArgs } from "./BundleFindManyArgs";
import { BundleUpdateInput } from "./BundleUpdateInput";
import { Bundle } from "./Bundle";
import { FeatureFindManyArgs } from "../../feature/base/FeatureFindManyArgs";
import { Feature } from "../../feature/base/Feature";
import { FeatureWhereUniqueInput } from "../../feature/base/FeatureWhereUniqueInput";

export class BundleGrpcControllerBase {
  constructor(protected readonly service: BundleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bundle })
  @GrpcMethod("BundleService", "createBundle")
  async createBundle(@common.Body() data: BundleCreateInput): Promise<Bundle> {
    return await this.service.createBundle({
      data: {
        ...data,

        lineItemConfiguration: data.lineItemConfiguration
          ? {
              connect: data.lineItemConfiguration,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        lineItemConfiguration: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Bundle] })
  @ApiNestedQuery(BundleFindManyArgs)
  @GrpcMethod("BundleService", "bundles")
  async bundles(@common.Req() request: Request): Promise<Bundle[]> {
    const args = plainToClass(BundleFindManyArgs, request.query);
    return this.service.bundles({
      ...args,
      select: {
        createdAt: true,
        id: true,

        lineItemConfiguration: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bundle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("BundleService", "bundle")
  async bundle(
    @common.Param() params: BundleWhereUniqueInput
  ): Promise<Bundle | null> {
    const result = await this.service.bundle({
      where: params,
      select: {
        createdAt: true,
        id: true,

        lineItemConfiguration: {
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
  @swagger.ApiOkResponse({ type: Bundle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("BundleService", "updateBundle")
  async updateBundle(
    @common.Param() params: BundleWhereUniqueInput,
    @common.Body() data: BundleUpdateInput
  ): Promise<Bundle | null> {
    try {
      return await this.service.updateBundle({
        where: params,
        data: {
          ...data,

          lineItemConfiguration: data.lineItemConfiguration
            ? {
                connect: data.lineItemConfiguration,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          lineItemConfiguration: {
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
  @swagger.ApiOkResponse({ type: Bundle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("BundleService", "deleteBundle")
  async deleteBundle(
    @common.Param() params: BundleWhereUniqueInput
  ): Promise<Bundle | null> {
    try {
      return await this.service.deleteBundle({
        where: params,
        select: {
          createdAt: true,
          id: true,

          lineItemConfiguration: {
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

  @common.Get("/:id/features")
  @ApiNestedQuery(FeatureFindManyArgs)
  @GrpcMethod("BundleService", "findManyFeatures")
  async findManyFeatures(
    @common.Req() request: Request,
    @common.Param() params: BundleWhereUniqueInput
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
  @GrpcMethod("BundleService", "connectFeatures")
  async connectFeatures(
    @common.Param() params: BundleWhereUniqueInput,
    @common.Body() body: FeatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      features: {
        connect: body,
      },
    };
    await this.service.updateBundle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/features")
  @GrpcMethod("BundleService", "updateFeatures")
  async updateFeatures(
    @common.Param() params: BundleWhereUniqueInput,
    @common.Body() body: FeatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      features: {
        set: body,
      },
    };
    await this.service.updateBundle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/features")
  @GrpcMethod("BundleService", "disconnectFeatures")
  async disconnectFeatures(
    @common.Param() params: BundleWhereUniqueInput,
    @common.Body() body: FeatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      features: {
        disconnect: body,
      },
    };
    await this.service.updateBundle({
      where: params,
      data,
      select: { id: true },
    });
  }
}
