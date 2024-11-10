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
import { SceneTemplateService } from "../sceneTemplate.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SceneTemplateCreateInput } from "./SceneTemplateCreateInput";
import { SceneTemplate } from "./SceneTemplate";
import { SceneTemplateFindManyArgs } from "./SceneTemplateFindManyArgs";
import { SceneTemplateWhereUniqueInput } from "./SceneTemplateWhereUniqueInput";
import { SceneTemplateUpdateInput } from "./SceneTemplateUpdateInput";
import { ScenarioFindManyArgs } from "../../scenario/base/ScenarioFindManyArgs";
import { Scenario } from "../../scenario/base/Scenario";
import { ScenarioWhereUniqueInput } from "../../scenario/base/ScenarioWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SceneTemplateControllerBase {
  constructor(
    protected readonly service: SceneTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SceneTemplate })
  @nestAccessControl.UseRoles({
    resource: "SceneTemplate",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SceneTemplateCreateInput,
  })
  async createSceneTemplate(
    @common.Body() data: SceneTemplateCreateInput
  ): Promise<SceneTemplate> {
    return await this.service.createSceneTemplate({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        sceneUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SceneTemplate] })
  @ApiNestedQuery(SceneTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SceneTemplate",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async sceneTemplates(
    @common.Req() request: Request
  ): Promise<SceneTemplate[]> {
    const args = plainToClass(SceneTemplateFindManyArgs, request.query);
    return this.service.sceneTemplates({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        sceneUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SceneTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SceneTemplate",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async sceneTemplate(
    @common.Param() params: SceneTemplateWhereUniqueInput
  ): Promise<SceneTemplate | null> {
    const result = await this.service.sceneTemplate({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        sceneUrl: true,
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
  @swagger.ApiOkResponse({ type: SceneTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SceneTemplate",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SceneTemplateUpdateInput,
  })
  async updateSceneTemplate(
    @common.Param() params: SceneTemplateWhereUniqueInput,
    @common.Body() data: SceneTemplateUpdateInput
  ): Promise<SceneTemplate | null> {
    try {
      return await this.service.updateSceneTemplate({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          sceneUrl: true,
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
  @swagger.ApiOkResponse({ type: SceneTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SceneTemplate",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSceneTemplate(
    @common.Param() params: SceneTemplateWhereUniqueInput
  ): Promise<SceneTemplate | null> {
    try {
      return await this.service.deleteSceneTemplate({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          sceneUrl: true,
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
    @common.Param() params: SceneTemplateWhereUniqueInput
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
    resource: "SceneTemplate",
    action: "update",
    possession: "any",
  })
  async connectScenarios(
    @common.Param() params: SceneTemplateWhereUniqueInput,
    @common.Body() body: ScenarioWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scenarios: {
        connect: body,
      },
    };
    await this.service.updateSceneTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/scenarios")
  @nestAccessControl.UseRoles({
    resource: "SceneTemplate",
    action: "update",
    possession: "any",
  })
  async updateScenarios(
    @common.Param() params: SceneTemplateWhereUniqueInput,
    @common.Body() body: ScenarioWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scenarios: {
        set: body,
      },
    };
    await this.service.updateSceneTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/scenarios")
  @nestAccessControl.UseRoles({
    resource: "SceneTemplate",
    action: "update",
    possession: "any",
  })
  async disconnectScenarios(
    @common.Param() params: SceneTemplateWhereUniqueInput,
    @common.Body() body: ScenarioWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scenarios: {
        disconnect: body,
      },
    };
    await this.service.updateSceneTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }
}