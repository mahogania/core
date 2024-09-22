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
import { AchievementScriptsService } from "../achievementScripts.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AchievementScriptsCreateInput } from "./AchievementScriptsCreateInput";
import { AchievementScripts } from "./AchievementScripts";
import { AchievementScriptsFindManyArgs } from "./AchievementScriptsFindManyArgs";
import { AchievementScriptsWhereUniqueInput } from "./AchievementScriptsWhereUniqueInput";
import { AchievementScriptsUpdateInput } from "./AchievementScriptsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AchievementScriptsControllerBase {
  constructor(
    protected readonly service: AchievementScriptsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AchievementScripts })
  @nestAccessControl.UseRoles({
    resource: "AchievementScripts",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AchievementScriptsCreateInput,
  })
  async createAchievementScripts(
    @common.Body() data: AchievementScriptsCreateInput
  ): Promise<AchievementScripts> {
    return await this.service.createAchievementScripts({
      data: data,
      select: {
        achievementId: true,
        createdAt: true,
        id: true,
        scriptName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AchievementScripts] })
  @ApiNestedQuery(AchievementScriptsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AchievementScripts",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async achievementScriptsItems(
    @common.Req() request: Request
  ): Promise<AchievementScripts[]> {
    const args = plainToClass(AchievementScriptsFindManyArgs, request.query);
    return this.service.achievementScriptsItems({
      ...args,
      select: {
        achievementId: true,
        createdAt: true,
        id: true,
        scriptName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AchievementScripts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AchievementScripts",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async achievementScripts(
    @common.Param() params: AchievementScriptsWhereUniqueInput
  ): Promise<AchievementScripts | null> {
    const result = await this.service.achievementScripts({
      where: params,
      select: {
        achievementId: true,
        createdAt: true,
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
  @swagger.ApiOkResponse({ type: AchievementScripts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AchievementScripts",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AchievementScriptsUpdateInput,
  })
  async updateAchievementScripts(
    @common.Param() params: AchievementScriptsWhereUniqueInput,
    @common.Body() data: AchievementScriptsUpdateInput
  ): Promise<AchievementScripts | null> {
    try {
      return await this.service.updateAchievementScripts({
        where: params,
        data: data,
        select: {
          achievementId: true,
          createdAt: true,
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
  @swagger.ApiOkResponse({ type: AchievementScripts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AchievementScripts",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAchievementScripts(
    @common.Param() params: AchievementScriptsWhereUniqueInput
  ): Promise<AchievementScripts | null> {
    try {
      return await this.service.deleteAchievementScripts({
        where: params,
        select: {
          achievementId: true,
          createdAt: true,
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
