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
import { SkillExtraItemTemplateService } from "../skillExtraItemTemplate.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SkillExtraItemTemplateCreateInput } from "./SkillExtraItemTemplateCreateInput";
import { SkillExtraItemTemplate } from "./SkillExtraItemTemplate";
import { SkillExtraItemTemplateFindManyArgs } from "./SkillExtraItemTemplateFindManyArgs";
import { SkillExtraItemTemplateWhereUniqueInput } from "./SkillExtraItemTemplateWhereUniqueInput";
import { SkillExtraItemTemplateUpdateInput } from "./SkillExtraItemTemplateUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SkillExtraItemTemplateControllerBase {
  constructor(
    protected readonly service: SkillExtraItemTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SkillExtraItemTemplate })
  @nestAccessControl.UseRoles({
    resource: "SkillExtraItemTemplate",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SkillExtraItemTemplateCreateInput,
  })
  async createSkillExtraItemTemplate(
    @common.Body() data: SkillExtraItemTemplateCreateInput
  ): Promise<SkillExtraItemTemplate> {
    return await this.service.createSkillExtraItemTemplate({
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
  @swagger.ApiOkResponse({ type: [SkillExtraItemTemplate] })
  @ApiNestedQuery(SkillExtraItemTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SkillExtraItemTemplate",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async skillExtraItemTemplates(
    @common.Req() request: Request
  ): Promise<SkillExtraItemTemplate[]> {
    const args = plainToClass(
      SkillExtraItemTemplateFindManyArgs,
      request.query
    );
    return this.service.skillExtraItemTemplates({
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
  @swagger.ApiOkResponse({ type: SkillExtraItemTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SkillExtraItemTemplate",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async skillExtraItemTemplate(
    @common.Param() params: SkillExtraItemTemplateWhereUniqueInput
  ): Promise<SkillExtraItemTemplate | null> {
    const result = await this.service.skillExtraItemTemplate({
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
  @swagger.ApiOkResponse({ type: SkillExtraItemTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SkillExtraItemTemplate",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SkillExtraItemTemplateUpdateInput,
  })
  async updateSkillExtraItemTemplate(
    @common.Param() params: SkillExtraItemTemplateWhereUniqueInput,
    @common.Body() data: SkillExtraItemTemplateUpdateInput
  ): Promise<SkillExtraItemTemplate | null> {
    try {
      return await this.service.updateSkillExtraItemTemplate({
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
  @swagger.ApiOkResponse({ type: SkillExtraItemTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SkillExtraItemTemplate",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSkillExtraItemTemplate(
    @common.Param() params: SkillExtraItemTemplateWhereUniqueInput
  ): Promise<SkillExtraItemTemplate | null> {
    try {
      return await this.service.deleteSkillExtraItemTemplate({
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