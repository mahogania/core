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
import { CreatureLootTemplateService } from "../creatureLootTemplate.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreatureLootTemplateCreateInput } from "./CreatureLootTemplateCreateInput";
import { CreatureLootTemplate } from "./CreatureLootTemplate";
import { CreatureLootTemplateFindManyArgs } from "./CreatureLootTemplateFindManyArgs";
import { CreatureLootTemplateWhereUniqueInput } from "./CreatureLootTemplateWhereUniqueInput";
import { CreatureLootTemplateUpdateInput } from "./CreatureLootTemplateUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CreatureLootTemplateControllerBase {
  constructor(
    protected readonly service: CreatureLootTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CreatureLootTemplate })
  @nestAccessControl.UseRoles({
    resource: "CreatureLootTemplate",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CreatureLootTemplateCreateInput,
  })
  async createCreatureLootTemplate(
    @common.Body() data: CreatureLootTemplateCreateInput
  ): Promise<CreatureLootTemplate> {
    return await this.service.createCreatureLootTemplate({
      data: data,
      select: {
        chance: true,
        comment: true,
        createdAt: true,
        entry: true,
        groupId: true,
        id: true,
        item: true,
        lootMode: true,
        maxCount: true,
        minCount: true,
        questRequired: true,
        reference: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CreatureLootTemplate] })
  @ApiNestedQuery(CreatureLootTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CreatureLootTemplate",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async creatureLootTemplates(
    @common.Req() request: Request
  ): Promise<CreatureLootTemplate[]> {
    const args = plainToClass(CreatureLootTemplateFindManyArgs, request.query);
    return this.service.creatureLootTemplates({
      ...args,
      select: {
        chance: true,
        comment: true,
        createdAt: true,
        entry: true,
        groupId: true,
        id: true,
        item: true,
        lootMode: true,
        maxCount: true,
        minCount: true,
        questRequired: true,
        reference: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CreatureLootTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureLootTemplate",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async creatureLootTemplate(
    @common.Param() params: CreatureLootTemplateWhereUniqueInput
  ): Promise<CreatureLootTemplate | null> {
    const result = await this.service.creatureLootTemplate({
      where: params,
      select: {
        chance: true,
        comment: true,
        createdAt: true,
        entry: true,
        groupId: true,
        id: true,
        item: true,
        lootMode: true,
        maxCount: true,
        minCount: true,
        questRequired: true,
        reference: true,
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
  @swagger.ApiOkResponse({ type: CreatureLootTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureLootTemplate",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CreatureLootTemplateUpdateInput,
  })
  async updateCreatureLootTemplate(
    @common.Param() params: CreatureLootTemplateWhereUniqueInput,
    @common.Body() data: CreatureLootTemplateUpdateInput
  ): Promise<CreatureLootTemplate | null> {
    try {
      return await this.service.updateCreatureLootTemplate({
        where: params,
        data: data,
        select: {
          chance: true,
          comment: true,
          createdAt: true,
          entry: true,
          groupId: true,
          id: true,
          item: true,
          lootMode: true,
          maxCount: true,
          minCount: true,
          questRequired: true,
          reference: true,
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
  @swagger.ApiOkResponse({ type: CreatureLootTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureLootTemplate",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCreatureLootTemplate(
    @common.Param() params: CreatureLootTemplateWhereUniqueInput
  ): Promise<CreatureLootTemplate | null> {
    try {
      return await this.service.deleteCreatureLootTemplate({
        where: params,
        select: {
          chance: true,
          comment: true,
          createdAt: true,
          entry: true,
          groupId: true,
          id: true,
          item: true,
          lootMode: true,
          maxCount: true,
          minCount: true,
          questRequired: true,
          reference: true,
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
