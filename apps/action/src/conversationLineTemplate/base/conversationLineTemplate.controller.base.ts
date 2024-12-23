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
import { ConversationLineTemplateService } from "../conversationLineTemplate.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ConversationLineTemplateCreateInput } from "./ConversationLineTemplateCreateInput";
import { ConversationLineTemplate } from "./ConversationLineTemplate";
import { ConversationLineTemplateFindManyArgs } from "./ConversationLineTemplateFindManyArgs";
import { ConversationLineTemplateWhereUniqueInput } from "./ConversationLineTemplateWhereUniqueInput";
import { ConversationLineTemplateUpdateInput } from "./ConversationLineTemplateUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ConversationLineTemplateControllerBase {
  constructor(
    protected readonly service: ConversationLineTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ConversationLineTemplate })
  @nestAccessControl.UseRoles({
    resource: "ConversationLineTemplate",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ConversationLineTemplateCreateInput,
  })
  async createConversationLineTemplate(
    @common.Body() data: ConversationLineTemplateCreateInput
  ): Promise<ConversationLineTemplate> {
    return await this.service.createConversationLineTemplate({
      data: data,
      select: {
        actorIdx: true,
        chatType: true,
        createdAt: true,
        flags: true,
        id: true,
        uiCameraId: true,
        updatedAt: true,
        verifiedBuild: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ConversationLineTemplate] })
  @ApiNestedQuery(ConversationLineTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ConversationLineTemplate",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async conversationLineTemplates(
    @common.Req() request: Request
  ): Promise<ConversationLineTemplate[]> {
    const args = plainToClass(
      ConversationLineTemplateFindManyArgs,
      request.query
    );
    return this.service.conversationLineTemplates({
      ...args,
      select: {
        actorIdx: true,
        chatType: true,
        createdAt: true,
        flags: true,
        id: true,
        uiCameraId: true,
        updatedAt: true,
        verifiedBuild: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ConversationLineTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ConversationLineTemplate",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async conversationLineTemplate(
    @common.Param() params: ConversationLineTemplateWhereUniqueInput
  ): Promise<ConversationLineTemplate | null> {
    const result = await this.service.conversationLineTemplate({
      where: params,
      select: {
        actorIdx: true,
        chatType: true,
        createdAt: true,
        flags: true,
        id: true,
        uiCameraId: true,
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
  @swagger.ApiOkResponse({ type: ConversationLineTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ConversationLineTemplate",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ConversationLineTemplateUpdateInput,
  })
  async updateConversationLineTemplate(
    @common.Param() params: ConversationLineTemplateWhereUniqueInput,
    @common.Body() data: ConversationLineTemplateUpdateInput
  ): Promise<ConversationLineTemplate | null> {
    try {
      return await this.service.updateConversationLineTemplate({
        where: params,
        data: data,
        select: {
          actorIdx: true,
          chatType: true,
          createdAt: true,
          flags: true,
          id: true,
          uiCameraId: true,
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
  @swagger.ApiOkResponse({ type: ConversationLineTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ConversationLineTemplate",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteConversationLineTemplate(
    @common.Param() params: ConversationLineTemplateWhereUniqueInput
  ): Promise<ConversationLineTemplate | null> {
    try {
      return await this.service.deleteConversationLineTemplate({
        where: params,
        select: {
          actorIdx: true,
          chatType: true,
          createdAt: true,
          flags: true,
          id: true,
          uiCameraId: true,
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
