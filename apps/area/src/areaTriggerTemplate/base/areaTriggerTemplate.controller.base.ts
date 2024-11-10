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
import { AreaTriggerTemplateService } from "../areaTriggerTemplate.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AreaTriggerTemplateCreateInput } from "./AreaTriggerTemplateCreateInput";
import { AreaTriggerTemplate } from "./AreaTriggerTemplate";
import { AreaTriggerTemplateFindManyArgs } from "./AreaTriggerTemplateFindManyArgs";
import { AreaTriggerTemplateWhereUniqueInput } from "./AreaTriggerTemplateWhereUniqueInput";
import { AreaTriggerTemplateUpdateInput } from "./AreaTriggerTemplateUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AreaTriggerTemplateControllerBase {
  constructor(
    protected readonly service: AreaTriggerTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AreaTriggerTemplate })
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerTemplate",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AreaTriggerTemplateCreateInput,
  })
  async createAreaTriggerTemplate(
    @common.Body() data: AreaTriggerTemplateCreateInput
  ): Promise<AreaTriggerTemplate> {
    return await this.service.createAreaTriggerTemplate({
      data: data,
      select: {
        createdAt: true,
        flags: true,
        id: true,
        isCustom: true,
        updatedAt: true,
        verifiedBuild: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AreaTriggerTemplate] })
  @ApiNestedQuery(AreaTriggerTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerTemplate",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async areaTriggerTemplates(
    @common.Req() request: Request
  ): Promise<AreaTriggerTemplate[]> {
    const args = plainToClass(AreaTriggerTemplateFindManyArgs, request.query);
    return this.service.areaTriggerTemplates({
      ...args,
      select: {
        createdAt: true,
        flags: true,
        id: true,
        isCustom: true,
        updatedAt: true,
        verifiedBuild: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AreaTriggerTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerTemplate",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async areaTriggerTemplate(
    @common.Param() params: AreaTriggerTemplateWhereUniqueInput
  ): Promise<AreaTriggerTemplate | null> {
    const result = await this.service.areaTriggerTemplate({
      where: params,
      select: {
        createdAt: true,
        flags: true,
        id: true,
        isCustom: true,
        updatedAt: true,
        verifiedBuild: true,
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
  @swagger.ApiOkResponse({ type: AreaTriggerTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerTemplate",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AreaTriggerTemplateUpdateInput,
  })
  async updateAreaTriggerTemplate(
    @common.Param() params: AreaTriggerTemplateWhereUniqueInput,
    @common.Body() data: AreaTriggerTemplateUpdateInput
  ): Promise<AreaTriggerTemplate | null> {
    try {
      return await this.service.updateAreaTriggerTemplate({
        where: params,
        data: data,
        select: {
          createdAt: true,
          flags: true,
          id: true,
          isCustom: true,
          updatedAt: true,
          verifiedBuild: true,
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
  @swagger.ApiOkResponse({ type: AreaTriggerTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerTemplate",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAreaTriggerTemplate(
    @common.Param() params: AreaTriggerTemplateWhereUniqueInput
  ): Promise<AreaTriggerTemplate | null> {
    try {
      return await this.service.deleteAreaTriggerTemplate({
        where: params,
        select: {
          createdAt: true,
          flags: true,
          id: true,
          isCustom: true,
          updatedAt: true,
          verifiedBuild: true,
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