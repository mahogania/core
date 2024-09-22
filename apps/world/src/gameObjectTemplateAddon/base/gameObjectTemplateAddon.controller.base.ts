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
import { GameObjectTemplateAddonService } from "../gameObjectTemplateAddon.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GameObjectTemplateAddonCreateInput } from "./GameObjectTemplateAddonCreateInput";
import { GameObjectTemplateAddon } from "./GameObjectTemplateAddon";
import { GameObjectTemplateAddonFindManyArgs } from "./GameObjectTemplateAddonFindManyArgs";
import { GameObjectTemplateAddonWhereUniqueInput } from "./GameObjectTemplateAddonWhereUniqueInput";
import { GameObjectTemplateAddonUpdateInput } from "./GameObjectTemplateAddonUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GameObjectTemplateAddonControllerBase {
  constructor(
    protected readonly service: GameObjectTemplateAddonService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameObjectTemplateAddon })
  @nestAccessControl.UseRoles({
    resource: "GameObjectTemplateAddon",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameObjectTemplateAddonCreateInput,
  })
  async createGameObjectTemplateAddon(
    @common.Body() data: GameObjectTemplateAddonCreateInput
  ): Promise<GameObjectTemplateAddon> {
    return await this.service.createGameObjectTemplateAddon({
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
  @swagger.ApiOkResponse({ type: [GameObjectTemplateAddon] })
  @ApiNestedQuery(GameObjectTemplateAddonFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GameObjectTemplateAddon",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameObjectTemplateAddons(
    @common.Req() request: Request
  ): Promise<GameObjectTemplateAddon[]> {
    const args = plainToClass(
      GameObjectTemplateAddonFindManyArgs,
      request.query
    );
    return this.service.gameObjectTemplateAddons({
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
  @swagger.ApiOkResponse({ type: GameObjectTemplateAddon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameObjectTemplateAddon",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameObjectTemplateAddon(
    @common.Param() params: GameObjectTemplateAddonWhereUniqueInput
  ): Promise<GameObjectTemplateAddon | null> {
    const result = await this.service.gameObjectTemplateAddon({
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
  @swagger.ApiOkResponse({ type: GameObjectTemplateAddon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameObjectTemplateAddon",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameObjectTemplateAddonUpdateInput,
  })
  async updateGameObjectTemplateAddon(
    @common.Param() params: GameObjectTemplateAddonWhereUniqueInput,
    @common.Body() data: GameObjectTemplateAddonUpdateInput
  ): Promise<GameObjectTemplateAddon | null> {
    try {
      return await this.service.updateGameObjectTemplateAddon({
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
  @swagger.ApiOkResponse({ type: GameObjectTemplateAddon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameObjectTemplateAddon",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGameObjectTemplateAddon(
    @common.Param() params: GameObjectTemplateAddonWhereUniqueInput
  ): Promise<GameObjectTemplateAddon | null> {
    try {
      return await this.service.deleteGameObjectTemplateAddon({
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
