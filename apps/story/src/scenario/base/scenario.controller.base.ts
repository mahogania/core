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
import { ScenarioService } from "../scenario.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ScenarioCreateInput } from "./ScenarioCreateInput";
import { Scenario } from "./Scenario";
import { ScenarioFindManyArgs } from "./ScenarioFindManyArgs";
import { ScenarioWhereUniqueInput } from "./ScenarioWhereUniqueInput";
import { ScenarioUpdateInput } from "./ScenarioUpdateInput";
import { AreaScenarioTriggerFindManyArgs } from "../../areaScenarioTrigger/base/AreaScenarioTriggerFindManyArgs";
import { AreaScenarioTrigger } from "../../areaScenarioTrigger/base/AreaScenarioTrigger";
import { AreaScenarioTriggerWhereUniqueInput } from "../../areaScenarioTrigger/base/AreaScenarioTriggerWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ScenarioControllerBase {
  constructor(
    protected readonly service: ScenarioService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Scenario })
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ScenarioCreateInput,
  })
  async createScenario(
    @common.Body() data: ScenarioCreateInput
  ): Promise<Scenario> {
    return await this.service.createScenario({
      data: {
        ...data,

        scenarioRegions: {
          connect: data.scenarioRegions,
        },

        sceneTemplate: {
          connect: data.sceneTemplate,
        },

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Scenario] })
  @ApiNestedQuery(ScenarioFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async scenarios(@common.Req() request: Request): Promise<Scenario[]> {
    const args = plainToClass(ScenarioFindManyArgs, request.query);
    return this.service.scenarios({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Scenario })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async scenario(
    @common.Param() params: ScenarioWhereUniqueInput
  ): Promise<Scenario | null> {
    const result = await this.service.scenario({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Scenario })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ScenarioUpdateInput,
  })
  async updateScenario(
    @common.Param() params: ScenarioWhereUniqueInput,
    @common.Body() data: ScenarioUpdateInput
  ): Promise<Scenario | null> {
    try {
      return await this.service.updateScenario({
        where: params,
        data: {
          ...data,

          scenarioRegions: {
            connect: data.scenarioRegions,
          },

          sceneTemplate: {
            connect: data.sceneTemplate,
          },

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Scenario })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteScenario(
    @common.Param() params: ScenarioWhereUniqueInput
  ): Promise<Scenario | null> {
    try {
      return await this.service.deleteScenario({
        where: params,
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
  @common.Get("/:id/areaScenarioTriggers")
  @ApiNestedQuery(AreaScenarioTriggerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AreaScenarioTrigger",
    action: "read",
    possession: "any",
  })
  async findAreaScenarioTriggers(
    @common.Req() request: Request,
    @common.Param() params: ScenarioWhereUniqueInput
  ): Promise<AreaScenarioTrigger[]> {
    const query = plainToClass(AreaScenarioTriggerFindManyArgs, request.query);
    const results = await this.service.findAreaScenarioTriggers(params.id, {
      ...query,
      select: {
        area: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        scenario: {
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

  @common.Post("/:id/areaScenarioTriggers")
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "update",
    possession: "any",
  })
  async connectAreaScenarioTriggers(
    @common.Param() params: ScenarioWhereUniqueInput,
    @common.Body() body: AreaScenarioTriggerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      areaScenarioTriggers: {
        connect: body,
      },
    };
    await this.service.updateScenario({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/areaScenarioTriggers")
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "update",
    possession: "any",
  })
  async updateAreaScenarioTriggers(
    @common.Param() params: ScenarioWhereUniqueInput,
    @common.Body() body: AreaScenarioTriggerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      areaScenarioTriggers: {
        set: body,
      },
    };
    await this.service.updateScenario({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/areaScenarioTriggers")
  @nestAccessControl.UseRoles({
    resource: "Scenario",
    action: "update",
    possession: "any",
  })
  async disconnectAreaScenarioTriggers(
    @common.Param() params: ScenarioWhereUniqueInput,
    @common.Body() body: AreaScenarioTriggerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      areaScenarioTriggers: {
        disconnect: body,
      },
    };
    await this.service.updateScenario({
      where: params,
      data,
      select: { id: true },
    });
  }
}