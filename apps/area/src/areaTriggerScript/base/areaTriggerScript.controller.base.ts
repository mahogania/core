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
import { AreaTriggerScriptService } from "../areaTriggerScript.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AreaTriggerScriptCreateInput } from "./AreaTriggerScriptCreateInput";
import { AreaTriggerScript } from "./AreaTriggerScript";
import { AreaTriggerScriptFindManyArgs } from "./AreaTriggerScriptFindManyArgs";
import { AreaTriggerScriptWhereUniqueInput } from "./AreaTriggerScriptWhereUniqueInput";
import { AreaTriggerScriptUpdateInput } from "./AreaTriggerScriptUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AreaTriggerScriptControllerBase {
  constructor(
    protected readonly service: AreaTriggerScriptService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AreaTriggerScript })
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerScript",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AreaTriggerScriptCreateInput,
  })
  async createAreaTriggerScript(
    @common.Body() data: AreaTriggerScriptCreateInput
  ): Promise<AreaTriggerScript> {
    return await this.service.createAreaTriggerScript({
      data: data,
      select: {
        createdAt: true,
        entry: true,
        id: true,
        scriptName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AreaTriggerScript] })
  @ApiNestedQuery(AreaTriggerScriptFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerScript",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async areaTriggerScripts(
    @common.Req() request: Request
  ): Promise<AreaTriggerScript[]> {
    const args = plainToClass(AreaTriggerScriptFindManyArgs, request.query);
    return this.service.areaTriggerScripts({
      ...args,
      select: {
        createdAt: true,
        entry: true,
        id: true,
        scriptName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AreaTriggerScript })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerScript",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async areaTriggerScript(
    @common.Param() params: AreaTriggerScriptWhereUniqueInput
  ): Promise<AreaTriggerScript | null> {
    const result = await this.service.areaTriggerScript({
      where: params,
      select: {
        createdAt: true,
        entry: true,
        id: true,
        scriptName: true,
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
  @swagger.ApiOkResponse({ type: AreaTriggerScript })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerScript",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AreaTriggerScriptUpdateInput,
  })
  async updateAreaTriggerScript(
    @common.Param() params: AreaTriggerScriptWhereUniqueInput,
    @common.Body() data: AreaTriggerScriptUpdateInput
  ): Promise<AreaTriggerScript | null> {
    try {
      return await this.service.updateAreaTriggerScript({
        where: params,
        data: data,
        select: {
          createdAt: true,
          entry: true,
          id: true,
          scriptName: true,
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
  @swagger.ApiOkResponse({ type: AreaTriggerScript })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AreaTriggerScript",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAreaTriggerScript(
    @common.Param() params: AreaTriggerScriptWhereUniqueInput
  ): Promise<AreaTriggerScript | null> {
    try {
      return await this.service.deleteAreaTriggerScript({
        where: params,
        select: {
          createdAt: true,
          entry: true,
          id: true,
          scriptName: true,
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
