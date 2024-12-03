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
import { ScenarioRegionService } from "../scenarioRegion.service";
import { ScenarioRegionCreateInput } from "./ScenarioRegionCreateInput";
import { ScenarioRegionWhereInput } from "./ScenarioRegionWhereInput";
import { ScenarioRegionWhereUniqueInput } from "./ScenarioRegionWhereUniqueInput";
import { ScenarioRegionFindManyArgs } from "./ScenarioRegionFindManyArgs";
import { ScenarioRegionUpdateInput } from "./ScenarioRegionUpdateInput";
import { ScenarioRegion } from "./ScenarioRegion";
import { ScenarioFindManyArgs } from "../../scenario/base/ScenarioFindManyArgs";
import { Scenario } from "../../scenario/base/Scenario";
import { ScenarioWhereUniqueInput } from "../../scenario/base/ScenarioWhereUniqueInput";

export class ScenarioRegionGrpcControllerBase {
  constructor(protected readonly service: ScenarioRegionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ScenarioRegion })
  @GrpcMethod("ScenarioRegionService", "createScenarioRegion")
  async createScenarioRegion(
    @common.Body() data: ScenarioRegionCreateInput
  ): Promise<ScenarioRegion> {
    return await this.service.createScenarioRegion({
      data: {
        ...data,

        scenarioPois: data.scenarioPois
          ? {
              connect: data.scenarioPois,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        scenarioPois: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ScenarioRegion] })
  @ApiNestedQuery(ScenarioRegionFindManyArgs)
  @GrpcMethod("ScenarioRegionService", "scenarioRegions")
  async scenarioRegions(
    @common.Req() request: Request
  ): Promise<ScenarioRegion[]> {
    const args = plainToClass(ScenarioRegionFindManyArgs, request.query);
    return this.service.scenarioRegions({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        scenarioPois: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ScenarioRegion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ScenarioRegionService", "scenarioRegion")
  async scenarioRegion(
    @common.Param() params: ScenarioRegionWhereUniqueInput
  ): Promise<ScenarioRegion | null> {
    const result = await this.service.scenarioRegion({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        scenarioPois: {
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
  @swagger.ApiOkResponse({ type: ScenarioRegion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ScenarioRegionService", "updateScenarioRegion")
  async updateScenarioRegion(
    @common.Param() params: ScenarioRegionWhereUniqueInput,
    @common.Body() data: ScenarioRegionUpdateInput
  ): Promise<ScenarioRegion | null> {
    try {
      return await this.service.updateScenarioRegion({
        where: params,
        data: {
          ...data,

          scenarioPois: data.scenarioPois
            ? {
                connect: data.scenarioPois,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,

          scenarioPois: {
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
  @swagger.ApiOkResponse({ type: ScenarioRegion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ScenarioRegionService", "deleteScenarioRegion")
  async deleteScenarioRegion(
    @common.Param() params: ScenarioRegionWhereUniqueInput
  ): Promise<ScenarioRegion | null> {
    try {
      return await this.service.deleteScenarioRegion({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,

          scenarioPois: {
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

  @common.Get("/:id/scenarios")
  @ApiNestedQuery(ScenarioFindManyArgs)
  @GrpcMethod("ScenarioRegionService", "findManyScenarios")
  async findManyScenarios(
    @common.Req() request: Request,
    @common.Param() params: ScenarioRegionWhereUniqueInput
  ): Promise<Scenario[]> {
    const query = plainToClass(ScenarioFindManyArgs, request.query);
    const results = await this.service.findScenarios(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        scenarioRegions: {
          select: {
            id: true,
          },
        },

        sceneTemplate: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
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

  @common.Post("/:id/scenarios")
  @GrpcMethod("ScenarioRegionService", "connectScenarios")
  async connectScenarios(
    @common.Param() params: ScenarioRegionWhereUniqueInput,
    @common.Body() body: ScenarioWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scenarios: {
        connect: body,
      },
    };
    await this.service.updateScenarioRegion({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/scenarios")
  @GrpcMethod("ScenarioRegionService", "updateScenarios")
  async updateScenarios(
    @common.Param() params: ScenarioRegionWhereUniqueInput,
    @common.Body() body: ScenarioWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scenarios: {
        set: body,
      },
    };
    await this.service.updateScenarioRegion({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/scenarios")
  @GrpcMethod("ScenarioRegionService", "disconnectScenarios")
  async disconnectScenarios(
    @common.Param() params: ScenarioRegionWhereUniqueInput,
    @common.Body() body: ScenarioWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scenarios: {
        disconnect: body,
      },
    };
    await this.service.updateScenarioRegion({
      where: params,
      data,
      select: { id: true },
    });
  }
}
