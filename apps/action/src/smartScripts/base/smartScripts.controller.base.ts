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
import { SmartScriptsService } from "../smartScripts.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SmartScriptsCreateInput } from "./SmartScriptsCreateInput";
import { SmartScripts } from "./SmartScripts";
import { SmartScriptsFindManyArgs } from "./SmartScriptsFindManyArgs";
import { SmartScriptsWhereUniqueInput } from "./SmartScriptsWhereUniqueInput";
import { SmartScriptsUpdateInput } from "./SmartScriptsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SmartScriptsControllerBase {
  constructor(
    protected readonly service: SmartScriptsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SmartScripts })
  @nestAccessControl.UseRoles({
    resource: "SmartScripts",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SmartScriptsCreateInput,
  })
  async createSmartScripts(
    @common.Body() data: SmartScriptsCreateInput
  ): Promise<SmartScripts> {
    return await this.service.createSmartScripts({
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
  @swagger.ApiOkResponse({ type: [SmartScripts] })
  @ApiNestedQuery(SmartScriptsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SmartScripts",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async smartScriptsItems(
    @common.Req() request: Request
  ): Promise<SmartScripts[]> {
    const args = plainToClass(SmartScriptsFindManyArgs, request.query);
    return this.service.smartScriptsItems({
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
  @swagger.ApiOkResponse({ type: SmartScripts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SmartScripts",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async smartScripts(
    @common.Param() params: SmartScriptsWhereUniqueInput
  ): Promise<SmartScripts | null> {
    const result = await this.service.smartScripts({
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
  @swagger.ApiOkResponse({ type: SmartScripts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SmartScripts",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SmartScriptsUpdateInput,
  })
  async updateSmartScripts(
    @common.Param() params: SmartScriptsWhereUniqueInput,
    @common.Body() data: SmartScriptsUpdateInput
  ): Promise<SmartScripts | null> {
    try {
      return await this.service.updateSmartScripts({
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
  @swagger.ApiOkResponse({ type: SmartScripts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SmartScripts",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSmartScripts(
    @common.Param() params: SmartScriptsWhereUniqueInput
  ): Promise<SmartScripts | null> {
    try {
      return await this.service.deleteSmartScripts({
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
