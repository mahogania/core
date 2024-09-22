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
import { GameEventCreatureQuestService } from "../gameEventCreatureQuest.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GameEventCreatureQuestCreateInput } from "./GameEventCreatureQuestCreateInput";
import { GameEventCreatureQuest } from "./GameEventCreatureQuest";
import { GameEventCreatureQuestFindManyArgs } from "./GameEventCreatureQuestFindManyArgs";
import { GameEventCreatureQuestWhereUniqueInput } from "./GameEventCreatureQuestWhereUniqueInput";
import { GameEventCreatureQuestUpdateInput } from "./GameEventCreatureQuestUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GameEventCreatureQuestControllerBase {
  constructor(
    protected readonly service: GameEventCreatureQuestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameEventCreatureQuest })
  @nestAccessControl.UseRoles({
    resource: "GameEventCreatureQuest",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameEventCreatureQuestCreateInput,
  })
  async createGameEventCreatureQuest(
    @common.Body() data: GameEventCreatureQuestCreateInput
  ): Promise<GameEventCreatureQuest> {
    return await this.service.createGameEventCreatureQuest({
      data: data,
      select: {
        createdAt: true,
        eventEntry: true,
        id: true,
        quest: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GameEventCreatureQuest] })
  @ApiNestedQuery(GameEventCreatureQuestFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GameEventCreatureQuest",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameEventCreatureQuests(
    @common.Req() request: Request
  ): Promise<GameEventCreatureQuest[]> {
    const args = plainToClass(
      GameEventCreatureQuestFindManyArgs,
      request.query
    );
    return this.service.gameEventCreatureQuests({
      ...args,
      select: {
        createdAt: true,
        eventEntry: true,
        id: true,
        quest: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameEventCreatureQuest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEventCreatureQuest",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameEventCreatureQuest(
    @common.Param() params: GameEventCreatureQuestWhereUniqueInput
  ): Promise<GameEventCreatureQuest | null> {
    const result = await this.service.gameEventCreatureQuest({
      where: params,
      select: {
        createdAt: true,
        eventEntry: true,
        id: true,
        quest: true,
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
  @swagger.ApiOkResponse({ type: GameEventCreatureQuest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEventCreatureQuest",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameEventCreatureQuestUpdateInput,
  })
  async updateGameEventCreatureQuest(
    @common.Param() params: GameEventCreatureQuestWhereUniqueInput,
    @common.Body() data: GameEventCreatureQuestUpdateInput
  ): Promise<GameEventCreatureQuest | null> {
    try {
      return await this.service.updateGameEventCreatureQuest({
        where: params,
        data: data,
        select: {
          createdAt: true,
          eventEntry: true,
          id: true,
          quest: true,
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
  @swagger.ApiOkResponse({ type: GameEventCreatureQuest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEventCreatureQuest",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGameEventCreatureQuest(
    @common.Param() params: GameEventCreatureQuestWhereUniqueInput
  ): Promise<GameEventCreatureQuest | null> {
    try {
      return await this.service.deleteGameEventCreatureQuest({
        where: params,
        select: {
          createdAt: true,
          eventEntry: true,
          id: true,
          quest: true,
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
