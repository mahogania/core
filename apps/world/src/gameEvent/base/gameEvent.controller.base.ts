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
import { GameEventService } from "../gameEvent.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GameEventCreateInput } from "./GameEventCreateInput";
import { GameEvent } from "./GameEvent";
import { GameEventFindManyArgs } from "./GameEventFindManyArgs";
import { GameEventWhereUniqueInput } from "./GameEventWhereUniqueInput";
import { GameEventUpdateInput } from "./GameEventUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GameEventControllerBase {
  constructor(
    protected readonly service: GameEventService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameEvent })
  @nestAccessControl.UseRoles({
    resource: "GameEvent",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameEventCreateInput,
  })
  async createGameEvent(
    @common.Body() data: GameEventCreateInput
  ): Promise<GameEvent> {
    return await this.service.createGameEvent({
      data: data,
      select: {
        announce: true,
        createdAt: true,
        description: true,
        endTime: true,
        eventEntry: true,
        holiday: true,
        holidayStage: true,
        id: true,
        length: true,
        occurence: true,
        startTime: true,
        updatedAt: true,
        worldEvent: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GameEvent] })
  @ApiNestedQuery(GameEventFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GameEvent",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameEvents(@common.Req() request: Request): Promise<GameEvent[]> {
    const args = plainToClass(GameEventFindManyArgs, request.query);
    return this.service.gameEvents({
      ...args,
      select: {
        announce: true,
        createdAt: true,
        description: true,
        endTime: true,
        eventEntry: true,
        holiday: true,
        holidayStage: true,
        id: true,
        length: true,
        occurence: true,
        startTime: true,
        updatedAt: true,
        worldEvent: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEvent",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameEvent(
    @common.Param() params: GameEventWhereUniqueInput
  ): Promise<GameEvent | null> {
    const result = await this.service.gameEvent({
      where: params,
      select: {
        announce: true,
        createdAt: true,
        description: true,
        endTime: true,
        eventEntry: true,
        holiday: true,
        holidayStage: true,
        id: true,
        length: true,
        occurence: true,
        startTime: true,
        updatedAt: true,
        worldEvent: true,
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
  @swagger.ApiOkResponse({ type: GameEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEvent",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameEventUpdateInput,
  })
  async updateGameEvent(
    @common.Param() params: GameEventWhereUniqueInput,
    @common.Body() data: GameEventUpdateInput
  ): Promise<GameEvent | null> {
    try {
      return await this.service.updateGameEvent({
        where: params,
        data: data,
        select: {
          announce: true,
          createdAt: true,
          description: true,
          endTime: true,
          eventEntry: true,
          holiday: true,
          holidayStage: true,
          id: true,
          length: true,
          occurence: true,
          startTime: true,
          updatedAt: true,
          worldEvent: true,
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
  @swagger.ApiOkResponse({ type: GameEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEvent",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGameEvent(
    @common.Param() params: GameEventWhereUniqueInput
  ): Promise<GameEvent | null> {
    try {
      return await this.service.deleteGameEvent({
        where: params,
        select: {
          announce: true,
          createdAt: true,
          description: true,
          endTime: true,
          eventEntry: true,
          holiday: true,
          holidayStage: true,
          id: true,
          length: true,
          occurence: true,
          startTime: true,
          updatedAt: true,
          worldEvent: true,
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
