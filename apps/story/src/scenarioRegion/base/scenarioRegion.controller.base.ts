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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ScenarioRegionService } from "../scenarioRegion.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ScenarioRegionCreateInput } from "./ScenarioRegionCreateInput";
import { ScenarioRegion } from "./ScenarioRegion";
import { ScenarioRegionFindManyArgs } from "./ScenarioRegionFindManyArgs";
import { ScenarioRegionWhereUniqueInput } from "./ScenarioRegionWhereUniqueInput";
import { ScenarioRegionUpdateInput } from "./ScenarioRegionUpdateInput";
import { ScenarioFindManyArgs } from "../../scenario/base/ScenarioFindManyArgs";
import { Scenario } from "../../scenario/base/Scenario";
import { ScenarioWhereUniqueInput } from "../../scenario/base/ScenarioWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ScenarioRegionControllerBase {
  constructor(
    protected readonly service: ScenarioRegionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ScenarioRegion })
  @nestAccessControl.UseRoles({
    resource: "ScenarioRegion",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ScenarioRegionCreateInput,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ScenarioRegion] })
  @ApiNestedQuery(ScenarioRegionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ScenarioRegion",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ScenarioRegion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ScenarioRegion",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ScenarioRegion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ScenarioRegion",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ScenarioRegionUpdateInput,
  })
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
  @nestAccessControl.UseRoles({
    resource: "ScenarioRegion",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/scenarios")
  @ApiNestedQuery(ScenarioFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "read",
    possession: "any",
  })
  async findScenarios(
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
  @nestAccessControl.UseRoles({
    resource: "ScenarioRegion",
    action: "update",
    possession: "any",
  })
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
  @nestAccessControl.UseRoles({
    resource: "ScenarioRegion",
    action: "update",
    possession: "any",
  })
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
  @nestAccessControl.UseRoles({
    resource: "ScenarioRegion",
    action: "update",
    possession: "any",
  })
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
