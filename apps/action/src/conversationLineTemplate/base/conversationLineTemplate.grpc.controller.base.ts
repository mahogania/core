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
import { ConversationLineTemplateService } from "../conversationLineTemplate.service";
import { ConversationLineTemplateCreateInput } from "./ConversationLineTemplateCreateInput";
import { ConversationLineTemplateWhereInput } from "./ConversationLineTemplateWhereInput";
import { ConversationLineTemplateWhereUniqueInput } from "./ConversationLineTemplateWhereUniqueInput";
import { ConversationLineTemplateFindManyArgs } from "./ConversationLineTemplateFindManyArgs";
import { ConversationLineTemplateUpdateInput } from "./ConversationLineTemplateUpdateInput";
import { ConversationLineTemplate } from "./ConversationLineTemplate";

export class ConversationLineTemplateGrpcControllerBase {
  constructor(protected readonly service: ConversationLineTemplateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ConversationLineTemplate })
  @GrpcMethod(
    "ConversationLineTemplateService",
    "createConversationLineTemplate"
  )
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

  @common.Get()
  @swagger.ApiOkResponse({ type: [ConversationLineTemplate] })
  @ApiNestedQuery(ConversationLineTemplateFindManyArgs)
  @GrpcMethod("ConversationLineTemplateService", "conversationLineTemplates")
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

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ConversationLineTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ConversationLineTemplateService", "conversationLineTemplate")
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ConversationLineTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "ConversationLineTemplateService",
    "updateConversationLineTemplate"
  )
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
  @GrpcMethod(
    "ConversationLineTemplateService",
    "deleteConversationLineTemplate"
  )
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