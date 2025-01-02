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
import { QuestPoolTemplateService } from "../questPoolTemplate.service";
import { QuestPoolTemplateCreateInput } from "./QuestPoolTemplateCreateInput";
import { QuestPoolTemplateWhereInput } from "./QuestPoolTemplateWhereInput";
import { QuestPoolTemplateWhereUniqueInput } from "./QuestPoolTemplateWhereUniqueInput";
import { QuestPoolTemplateFindManyArgs } from "./QuestPoolTemplateFindManyArgs";
import { QuestPoolTemplateUpdateInput } from "./QuestPoolTemplateUpdateInput";
import { QuestPoolTemplate } from "./QuestPoolTemplate";

export class QuestPoolTemplateGrpcControllerBase {
  constructor(protected readonly service: QuestPoolTemplateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestPoolTemplate })
  @GrpcMethod("QuestPoolTemplateService", "createQuestPoolTemplate")
  async createQuestPoolTemplate(
    @common.Body() data: QuestPoolTemplateCreateInput
  ): Promise<QuestPoolTemplate> {
    return await this.service.createQuestPoolTemplate({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestPoolTemplate] })
  @ApiNestedQuery(QuestPoolTemplateFindManyArgs)
  @GrpcMethod("QuestPoolTemplateService", "questPoolTemplates")
  async questPoolTemplates(
    @common.Req() request: Request
  ): Promise<QuestPoolTemplate[]> {
    const args = plainToClass(QuestPoolTemplateFindManyArgs, request.query);
    return this.service.questPoolTemplates({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestPoolTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestPoolTemplateService", "questPoolTemplate")
  async questPoolTemplate(
    @common.Param() params: QuestPoolTemplateWhereUniqueInput
  ): Promise<QuestPoolTemplate | null> {
    const result = await this.service.questPoolTemplate({
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: QuestPoolTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestPoolTemplateService", "updateQuestPoolTemplate")
  async updateQuestPoolTemplate(
    @common.Param() params: QuestPoolTemplateWhereUniqueInput,
    @common.Body() data: QuestPoolTemplateUpdateInput
  ): Promise<QuestPoolTemplate | null> {
    try {
      return await this.service.updateQuestPoolTemplate({
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
  @swagger.ApiOkResponse({ type: QuestPoolTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestPoolTemplateService", "deleteQuestPoolTemplate")
  async deleteQuestPoolTemplate(
    @common.Param() params: QuestPoolTemplateWhereUniqueInput
  ): Promise<QuestPoolTemplate | null> {
    try {
      return await this.service.deleteQuestPoolTemplate({
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