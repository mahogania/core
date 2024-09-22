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
import { MailLootTemplateService } from "../mailLootTemplate.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MailLootTemplateCreateInput } from "./MailLootTemplateCreateInput";
import { MailLootTemplate } from "./MailLootTemplate";
import { MailLootTemplateFindManyArgs } from "./MailLootTemplateFindManyArgs";
import { MailLootTemplateWhereUniqueInput } from "./MailLootTemplateWhereUniqueInput";
import { MailLootTemplateUpdateInput } from "./MailLootTemplateUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MailLootTemplateControllerBase {
  constructor(
    protected readonly service: MailLootTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MailLootTemplate })
  @nestAccessControl.UseRoles({
    resource: "MailLootTemplate",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: MailLootTemplateCreateInput,
  })
  async createMailLootTemplate(
    @common.Body() data: MailLootTemplateCreateInput
  ): Promise<MailLootTemplate> {
    return await this.service.createMailLootTemplate({
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
  @swagger.ApiOkResponse({ type: [MailLootTemplate] })
  @ApiNestedQuery(MailLootTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MailLootTemplate",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async mailLootTemplates(
    @common.Req() request: Request
  ): Promise<MailLootTemplate[]> {
    const args = plainToClass(MailLootTemplateFindManyArgs, request.query);
    return this.service.mailLootTemplates({
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
  @swagger.ApiOkResponse({ type: MailLootTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MailLootTemplate",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async mailLootTemplate(
    @common.Param() params: MailLootTemplateWhereUniqueInput
  ): Promise<MailLootTemplate | null> {
    const result = await this.service.mailLootTemplate({
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
  @swagger.ApiOkResponse({ type: MailLootTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MailLootTemplate",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: MailLootTemplateUpdateInput,
  })
  async updateMailLootTemplate(
    @common.Param() params: MailLootTemplateWhereUniqueInput,
    @common.Body() data: MailLootTemplateUpdateInput
  ): Promise<MailLootTemplate | null> {
    try {
      return await this.service.updateMailLootTemplate({
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
  @swagger.ApiOkResponse({ type: MailLootTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MailLootTemplate",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMailLootTemplate(
    @common.Param() params: MailLootTemplateWhereUniqueInput
  ): Promise<MailLootTemplate | null> {
    try {
      return await this.service.deleteMailLootTemplate({
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
