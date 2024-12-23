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
import { InstanceTemplateService } from "../instanceTemplate.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { InstanceTemplateCreateInput } from "./InstanceTemplateCreateInput";
import { InstanceTemplate } from "./InstanceTemplate";
import { InstanceTemplateFindManyArgs } from "./InstanceTemplateFindManyArgs";
import { InstanceTemplateWhereUniqueInput } from "./InstanceTemplateWhereUniqueInput";
import { InstanceTemplateUpdateInput } from "./InstanceTemplateUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class InstanceTemplateControllerBase {
  constructor(
    protected readonly service: InstanceTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: InstanceTemplate })
  @nestAccessControl.UseRoles({
    resource: "InstanceTemplate",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: InstanceTemplateCreateInput,
  })
  async createInstanceTemplate(
    @common.Body() data: InstanceTemplateCreateInput
  ): Promise<InstanceTemplate> {
    return await this.service.createInstanceTemplate({
      data: {
        ...data,

        linkedRespawns: data.linkedRespawns
          ? {
              connect: data.linkedRespawns,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        linkedRespawns: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [InstanceTemplate] })
  @ApiNestedQuery(InstanceTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "InstanceTemplate",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async instanceTemplates(
    @common.Req() request: Request
  ): Promise<InstanceTemplate[]> {
    const args = plainToClass(InstanceTemplateFindManyArgs, request.query);
    return this.service.instanceTemplates({
      ...args,
      select: {
        createdAt: true,
        id: true,

        linkedRespawns: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: InstanceTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "InstanceTemplate",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async instanceTemplate(
    @common.Param() params: InstanceTemplateWhereUniqueInput
  ): Promise<InstanceTemplate | null> {
    const result = await this.service.instanceTemplate({
      where: params,
      select: {
        createdAt: true,
        id: true,

        linkedRespawns: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: InstanceTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "InstanceTemplate",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: InstanceTemplateUpdateInput,
  })
  async updateInstanceTemplate(
    @common.Param() params: InstanceTemplateWhereUniqueInput,
    @common.Body() data: InstanceTemplateUpdateInput
  ): Promise<InstanceTemplate | null> {
    try {
      return await this.service.updateInstanceTemplate({
        where: params,
        data: {
          ...data,

          linkedRespawns: data.linkedRespawns
            ? {
                connect: data.linkedRespawns,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          linkedRespawns: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: InstanceTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "InstanceTemplate",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteInstanceTemplate(
    @common.Param() params: InstanceTemplateWhereUniqueInput
  ): Promise<InstanceTemplate | null> {
    try {
      return await this.service.deleteInstanceTemplate({
        where: params,
        select: {
          createdAt: true,
          id: true,

          linkedRespawns: {
            select: {
              id: true,
            },
          },

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
