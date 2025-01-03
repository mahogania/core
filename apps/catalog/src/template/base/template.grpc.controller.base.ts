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
import { TemplateService } from "../template.service";
import { TemplateCreateInput } from "./TemplateCreateInput";
import { TemplateWhereInput } from "./TemplateWhereInput";
import { TemplateWhereUniqueInput } from "./TemplateWhereUniqueInput";
import { TemplateFindManyArgs } from "./TemplateFindManyArgs";
import { TemplateUpdateInput } from "./TemplateUpdateInput";
import { Template } from "./Template";

export class TemplateGrpcControllerBase {
  constructor(protected readonly service: TemplateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Template })
  @GrpcMethod("TemplateService", "createTemplate")
  async createTemplate(
    @common.Body() data: TemplateCreateInput
  ): Promise<Template> {
    return await this.service.createTemplate({
      data: {
        ...data,

        form: data.form
          ? {
              connect: data.form,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        fields: true,

        form: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Template] })
  @ApiNestedQuery(TemplateFindManyArgs)
  @GrpcMethod("TemplateService", "templates")
  async templates(@common.Req() request: Request): Promise<Template[]> {
    const args = plainToClass(TemplateFindManyArgs, request.query);
    return this.service.templates({
      ...args,
      select: {
        createdAt: true,
        fields: true,

        form: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Template })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("TemplateService", "template")
  async template(
    @common.Param() params: TemplateWhereUniqueInput
  ): Promise<Template | null> {
    const result = await this.service.template({
      where: params,
      select: {
        createdAt: true,
        fields: true,

        form: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
        url: true,
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
  @swagger.ApiOkResponse({ type: Template })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("TemplateService", "updateTemplate")
  async updateTemplate(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() data: TemplateUpdateInput
  ): Promise<Template | null> {
    try {
      return await this.service.updateTemplate({
        where: params,
        data: {
          ...data,

          form: data.form
            ? {
                connect: data.form,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          fields: true,

          form: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
          url: true,
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
  @swagger.ApiOkResponse({ type: Template })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("TemplateService", "deleteTemplate")
  async deleteTemplate(
    @common.Param() params: TemplateWhereUniqueInput
  ): Promise<Template | null> {
    try {
      return await this.service.deleteTemplate({
        where: params,
        select: {
          createdAt: true,
          fields: true,

          form: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
          url: true,
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
