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
import { GameObjectQuestStarterService } from "../gameObjectQuestStarter.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GameObjectQuestStarterCreateInput } from "./GameObjectQuestStarterCreateInput";
import { GameObjectQuestStarter } from "./GameObjectQuestStarter";
import { GameObjectQuestStarterFindManyArgs } from "./GameObjectQuestStarterFindManyArgs";
import { GameObjectQuestStarterWhereUniqueInput } from "./GameObjectQuestStarterWhereUniqueInput";
import { GameObjectQuestStarterUpdateInput } from "./GameObjectQuestStarterUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GameObjectQuestStarterControllerBase {
  constructor(
    protected readonly service: GameObjectQuestStarterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameObjectQuestStarter })
  @nestAccessControl.UseRoles({
    resource: "GameObjectQuestStarter",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameObjectQuestStarterCreateInput,
  })
  async createGameObjectQuestStarter(
    @common.Body() data: GameObjectQuestStarterCreateInput
  ): Promise<GameObjectQuestStarter> {
    return await this.service.createGameObjectQuestStarter({
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
  @swagger.ApiOkResponse({ type: [GameObjectQuestStarter] })
  @ApiNestedQuery(GameObjectQuestStarterFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GameObjectQuestStarter",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameObjectQuestStarters(
    @common.Req() request: Request
  ): Promise<GameObjectQuestStarter[]> {
    const args = plainToClass(
      GameObjectQuestStarterFindManyArgs,
      request.query
    );
    return this.service.gameObjectQuestStarters({
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
  @swagger.ApiOkResponse({ type: GameObjectQuestStarter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameObjectQuestStarter",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameObjectQuestStarter(
    @common.Param() params: GameObjectQuestStarterWhereUniqueInput
  ): Promise<GameObjectQuestStarter | null> {
    const result = await this.service.gameObjectQuestStarter({
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
  @swagger.ApiOkResponse({ type: GameObjectQuestStarter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameObjectQuestStarter",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameObjectQuestStarterUpdateInput,
  })
  async updateGameObjectQuestStarter(
    @common.Param() params: GameObjectQuestStarterWhereUniqueInput,
    @common.Body() data: GameObjectQuestStarterUpdateInput
  ): Promise<GameObjectQuestStarter | null> {
    try {
      return await this.service.updateGameObjectQuestStarter({
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
  @swagger.ApiOkResponse({ type: GameObjectQuestStarter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameObjectQuestStarter",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGameObjectQuestStarter(
    @common.Param() params: GameObjectQuestStarterWhereUniqueInput
  ): Promise<GameObjectQuestStarter | null> {
    try {
      return await this.service.deleteGameObjectQuestStarter({
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
