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
import { SpawnGroupTemplateService } from "../spawnGroupTemplate.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SpawnGroupTemplateCreateInput } from "./SpawnGroupTemplateCreateInput";
import { SpawnGroupTemplate } from "./SpawnGroupTemplate";
import { SpawnGroupTemplateFindManyArgs } from "./SpawnGroupTemplateFindManyArgs";
import { SpawnGroupTemplateWhereUniqueInput } from "./SpawnGroupTemplateWhereUniqueInput";
import { SpawnGroupTemplateUpdateInput } from "./SpawnGroupTemplateUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SpawnGroupTemplateControllerBase {
  constructor(
    protected readonly service: SpawnGroupTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SpawnGroupTemplate })
  @nestAccessControl.UseRoles({
    resource: "SpawnGroupTemplate",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SpawnGroupTemplateCreateInput,
  })
  async createSpawnGroupTemplate(
    @common.Body() data: SpawnGroupTemplateCreateInput
  ): Promise<SpawnGroupTemplate> {
    return await this.service.createSpawnGroupTemplate({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SpawnGroupTemplate] })
  @ApiNestedQuery(SpawnGroupTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SpawnGroupTemplate",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async spawnGroupTemplates(
    @common.Req() request: Request
  ): Promise<SpawnGroupTemplate[]> {
    const args = plainToClass(SpawnGroupTemplateFindManyArgs, request.query);
    return this.service.spawnGroupTemplates({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SpawnGroupTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SpawnGroupTemplate",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async spawnGroupTemplate(
    @common.Param() params: SpawnGroupTemplateWhereUniqueInput
  ): Promise<SpawnGroupTemplate | null> {
    const result = await this.service.spawnGroupTemplate({
      where: params,
      select: {
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SpawnGroupTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SpawnGroupTemplate",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SpawnGroupTemplateUpdateInput,
  })
  async updateSpawnGroupTemplate(
    @common.Param() params: SpawnGroupTemplateWhereUniqueInput,
    @common.Body() data: SpawnGroupTemplateUpdateInput
  ): Promise<SpawnGroupTemplate | null> {
    try {
      return await this.service.updateSpawnGroupTemplate({
        where: params,
        data: data,
        select: {
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
  @swagger.ApiOkResponse({ type: SpawnGroupTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SpawnGroupTemplate",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSpawnGroupTemplate(
    @common.Param() params: SpawnGroupTemplateWhereUniqueInput
  ): Promise<SpawnGroupTemplate | null> {
    try {
      return await this.service.deleteSpawnGroupTemplate({
        where: params,
        select: {
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
}
