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
import { GameObjectOverridesService } from "../gameObjectOverrides.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GameObjectOverridesCreateInput } from "./GameObjectOverridesCreateInput";
import { GameObjectOverrides } from "./GameObjectOverrides";
import { GameObjectOverridesFindManyArgs } from "./GameObjectOverridesFindManyArgs";
import { GameObjectOverridesWhereUniqueInput } from "./GameObjectOverridesWhereUniqueInput";
import { GameObjectOverridesUpdateInput } from "./GameObjectOverridesUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GameObjectOverridesControllerBase {
  constructor(
    protected readonly service: GameObjectOverridesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameObjectOverrides })
  @nestAccessControl.UseRoles({
    resource: "GameObjectOverrides",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameObjectOverridesCreateInput,
  })
  async createGameObjectOverrides(
    @common.Body() data: GameObjectOverridesCreateInput
  ): Promise<GameObjectOverrides> {
    return await this.service.createGameObjectOverrides({
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
  @swagger.ApiOkResponse({ type: [GameObjectOverrides] })
  @ApiNestedQuery(GameObjectOverridesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GameObjectOverrides",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameObjectOverridesItems(
    @common.Req() request: Request
  ): Promise<GameObjectOverrides[]> {
    const args = plainToClass(GameObjectOverridesFindManyArgs, request.query);
    return this.service.gameObjectOverridesItems({
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
  @swagger.ApiOkResponse({ type: GameObjectOverrides })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameObjectOverrides",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameObjectOverrides(
    @common.Param() params: GameObjectOverridesWhereUniqueInput
  ): Promise<GameObjectOverrides | null> {
    const result = await this.service.gameObjectOverrides({
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
  @swagger.ApiOkResponse({ type: GameObjectOverrides })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameObjectOverrides",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameObjectOverridesUpdateInput,
  })
  async updateGameObjectOverrides(
    @common.Param() params: GameObjectOverridesWhereUniqueInput,
    @common.Body() data: GameObjectOverridesUpdateInput
  ): Promise<GameObjectOverrides | null> {
    try {
      return await this.service.updateGameObjectOverrides({
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
  @swagger.ApiOkResponse({ type: GameObjectOverrides })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameObjectOverrides",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGameObjectOverrides(
    @common.Param() params: GameObjectOverridesWhereUniqueInput
  ): Promise<GameObjectOverrides | null> {
    try {
      return await this.service.deleteGameObjectOverrides({
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
