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
import { EntityFindManyArgs } from "../../entity/base/EntityFindManyArgs";
import { Entity } from "../../entity/base/Entity";
import { EntityWhereUniqueInput } from "../../entity/base/EntityWhereUniqueInput";
import { TraitFindManyArgs } from "../../trait/base/TraitFindManyArgs";
import { Trait } from "../../trait/base/Trait";
import { TraitWhereUniqueInput } from "../../trait/base/TraitWhereUniqueInput";

export class TemplateGrpcControllerBase {
  constructor(protected readonly service: TemplateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Template })
  @GrpcMethod("TemplateService", "createTemplate")
  async createTemplate(
    @common.Body() data: TemplateCreateInput
  ): Promise<Template> {
    return await this.service.createTemplate({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
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
        id: true,
        updatedAt: true,
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

  @common.Get("/:id/entities")
  @ApiNestedQuery(EntityFindManyArgs)
  @GrpcMethod("TemplateService", "findManyEntities")
  async findManyEntities(
    @common.Req() request: Request,
    @common.Param() params: TemplateWhereUniqueInput
  ): Promise<Entity[]> {
    const query = plainToClass(EntityFindManyArgs, request.query);
    const results = await this.service.findEntities(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        displayName: true,
        id: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        version: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/entities")
  @GrpcMethod("TemplateService", "connectEntities")
  async connectEntities(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entities: {
        connect: body,
      },
    };
    await this.service.updateTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/entities")
  @GrpcMethod("TemplateService", "updateEntities")
  async updateEntities(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entities: {
        set: body,
      },
    };
    await this.service.updateTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/entities")
  @GrpcMethod("TemplateService", "disconnectEntities")
  async disconnectEntities(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entities: {
        disconnect: body,
      },
    };
    await this.service.updateTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/traits")
  @ApiNestedQuery(TraitFindManyArgs)
  @GrpcMethod("TemplateService", "findManyTraits")
  async findManyTraits(
    @common.Req() request: Request,
    @common.Param() params: TemplateWhereUniqueInput
  ): Promise<Trait[]> {
    const query = plainToClass(TraitFindManyArgs, request.query);
    const results = await this.service.findTraits(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/traits")
  @GrpcMethod("TemplateService", "connectTraits")
  async connectTraits(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() body: TraitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      traits: {
        connect: body,
      },
    };
    await this.service.updateTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/traits")
  @GrpcMethod("TemplateService", "updateTraits")
  async updateTraits(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() body: TraitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      traits: {
        set: body,
      },
    };
    await this.service.updateTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/traits")
  @GrpcMethod("TemplateService", "disconnectTraits")
  async disconnectTraits(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() body: TraitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      traits: {
        disconnect: body,
      },
    };
    await this.service.updateTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }
}
