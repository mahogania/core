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
import { CreatureTemplateService } from "../creatureTemplate.service";
import { CreatureTemplateCreateInput } from "./CreatureTemplateCreateInput";
import { CreatureTemplateWhereInput } from "./CreatureTemplateWhereInput";
import { CreatureTemplateWhereUniqueInput } from "./CreatureTemplateWhereUniqueInput";
import { CreatureTemplateFindManyArgs } from "./CreatureTemplateFindManyArgs";
import { CreatureTemplateUpdateInput } from "./CreatureTemplateUpdateInput";
import { CreatureTemplate } from "./CreatureTemplate";

export class CreatureTemplateGrpcControllerBase {
  constructor(protected readonly service: CreatureTemplateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CreatureTemplate })
  @GrpcMethod("CreatureTemplateService", "createCreatureTemplate")
  async createCreatureTemplate(
    @common.Body() data: CreatureTemplateCreateInput
  ): Promise<CreatureTemplate> {
    return await this.service.createCreatureTemplate({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CreatureTemplate] })
  @ApiNestedQuery(CreatureTemplateFindManyArgs)
  @GrpcMethod("CreatureTemplateService", "creatureTemplates")
  async creatureTemplates(
    @common.Req() request: Request
  ): Promise<CreatureTemplate[]> {
    const args = plainToClass(CreatureTemplateFindManyArgs, request.query);
    return this.service.creatureTemplates({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CreatureTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureTemplateService", "creatureTemplate")
  async creatureTemplate(
    @common.Param() params: CreatureTemplateWhereUniqueInput
  ): Promise<CreatureTemplate | null> {
    const result = await this.service.creatureTemplate({
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
  @swagger.ApiOkResponse({ type: CreatureTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureTemplateService", "updateCreatureTemplate")
  async updateCreatureTemplate(
    @common.Param() params: CreatureTemplateWhereUniqueInput,
    @common.Body() data: CreatureTemplateUpdateInput
  ): Promise<CreatureTemplate | null> {
    try {
      return await this.service.updateCreatureTemplate({
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
  @swagger.ApiOkResponse({ type: CreatureTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureTemplateService", "deleteCreatureTemplate")
  async deleteCreatureTemplate(
    @common.Param() params: CreatureTemplateWhereUniqueInput
  ): Promise<CreatureTemplate | null> {
    try {
      return await this.service.deleteCreatureTemplate({
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
