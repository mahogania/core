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
import { GameEventNpcFlagService } from "../gameEventNpcFlag.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GameEventNpcFlagCreateInput } from "./GameEventNpcFlagCreateInput";
import { GameEventNpcFlag } from "./GameEventNpcFlag";
import { GameEventNpcFlagFindManyArgs } from "./GameEventNpcFlagFindManyArgs";
import { GameEventNpcFlagWhereUniqueInput } from "./GameEventNpcFlagWhereUniqueInput";
import { GameEventNpcFlagUpdateInput } from "./GameEventNpcFlagUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GameEventNpcFlagControllerBase {
  constructor(
    protected readonly service: GameEventNpcFlagService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameEventNpcFlag })
  @nestAccessControl.UseRoles({
    resource: "GameEventNpcFlag",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameEventNpcFlagCreateInput,
  })
  async createGameEventNpcFlag(
    @common.Body() data: GameEventNpcFlagCreateInput
  ): Promise<GameEventNpcFlag> {
    return await this.service.createGameEventNpcFlag({
      data: data,
      select: {
        createdAt: true,
        eventEntry: true,
        guid: true,
        id: true,
        npcflag: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GameEventNpcFlag] })
  @ApiNestedQuery(GameEventNpcFlagFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GameEventNpcFlag",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameEventNpcFlags(
    @common.Req() request: Request
  ): Promise<GameEventNpcFlag[]> {
    const args = plainToClass(GameEventNpcFlagFindManyArgs, request.query);
    return this.service.gameEventNpcFlags({
      ...args,
      select: {
        createdAt: true,
        eventEntry: true,
        guid: true,
        id: true,
        npcflag: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameEventNpcFlag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEventNpcFlag",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameEventNpcFlag(
    @common.Param() params: GameEventNpcFlagWhereUniqueInput
  ): Promise<GameEventNpcFlag | null> {
    const result = await this.service.gameEventNpcFlag({
      where: params,
      select: {
        createdAt: true,
        eventEntry: true,
        guid: true,
        id: true,
        npcflag: true,
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
  @swagger.ApiOkResponse({ type: GameEventNpcFlag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEventNpcFlag",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameEventNpcFlagUpdateInput,
  })
  async updateGameEventNpcFlag(
    @common.Param() params: GameEventNpcFlagWhereUniqueInput,
    @common.Body() data: GameEventNpcFlagUpdateInput
  ): Promise<GameEventNpcFlag | null> {
    try {
      return await this.service.updateGameEventNpcFlag({
        where: params,
        data: data,
        select: {
          createdAt: true,
          eventEntry: true,
          guid: true,
          id: true,
          npcflag: true,
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
  @swagger.ApiOkResponse({ type: GameEventNpcFlag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEventNpcFlag",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGameEventNpcFlag(
    @common.Param() params: GameEventNpcFlagWhereUniqueInput
  ): Promise<GameEventNpcFlag | null> {
    try {
      return await this.service.deleteGameEventNpcFlag({
        where: params,
        select: {
          createdAt: true,
          eventEntry: true,
          guid: true,
          id: true,
          npcflag: true,
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
