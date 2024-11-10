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
import { SkillExtraItemTemplateService } from "../skillExtraItemTemplate.service";
import { SkillExtraItemTemplateCreateInput } from "./SkillExtraItemTemplateCreateInput";
import { SkillExtraItemTemplateWhereInput } from "./SkillExtraItemTemplateWhereInput";
import { SkillExtraItemTemplateWhereUniqueInput } from "./SkillExtraItemTemplateWhereUniqueInput";
import { SkillExtraItemTemplateFindManyArgs } from "./SkillExtraItemTemplateFindManyArgs";
import { SkillExtraItemTemplateUpdateInput } from "./SkillExtraItemTemplateUpdateInput";
import { SkillExtraItemTemplate } from "./SkillExtraItemTemplate";

export class SkillExtraItemTemplateGrpcControllerBase {
  constructor(protected readonly service: SkillExtraItemTemplateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SkillExtraItemTemplate })
  @GrpcMethod("SkillExtraItemTemplateService", "createSkillExtraItemTemplate")
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

  @common.Get()
  @swagger.ApiOkResponse({ type: [SkillExtraItemTemplate] })
  @ApiNestedQuery(SkillExtraItemTemplateFindManyArgs)
  @GrpcMethod("SkillExtraItemTemplateService", "skillExtraItemTemplates")
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

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SkillExtraItemTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SkillExtraItemTemplateService", "skillExtraItemTemplate")
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SkillExtraItemTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SkillExtraItemTemplateService", "updateSkillExtraItemTemplate")
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
  @GrpcMethod("SkillExtraItemTemplateService", "deleteSkillExtraItemTemplate")
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
