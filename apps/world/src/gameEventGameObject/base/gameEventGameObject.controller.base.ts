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
import { GameEventGameObjectService } from "../gameEventGameObject.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GameEventGameObjectCreateInput } from "./GameEventGameObjectCreateInput";
import { GameEventGameObject } from "./GameEventGameObject";
import { GameEventGameObjectFindManyArgs } from "./GameEventGameObjectFindManyArgs";
import { GameEventGameObjectWhereUniqueInput } from "./GameEventGameObjectWhereUniqueInput";
import { GameEventGameObjectUpdateInput } from "./GameEventGameObjectUpdateInput";
import { GameEventFindManyArgs } from "../../gameEvent/base/GameEventFindManyArgs";
import { GameEvent } from "../../gameEvent/base/GameEvent";
import { GameEventWhereUniqueInput } from "../../gameEvent/base/GameEventWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GameEventGameObjectControllerBase {
  constructor(
    protected readonly service: GameEventGameObjectService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameEventGameObject })
  @nestAccessControl.UseRoles({
    resource: "GameEventGameObject",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameEventGameObjectCreateInput,
  })
  async createGameEventGameObject(
    @common.Body() data: GameEventGameObjectCreateInput
  ): Promise<GameEventGameObject> {
    return await this.service.createGameEventGameObject({
      data: data,
      select: {
        createdAt: true,
        eventEntry: true,
        guid: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GameEventGameObject] })
  @ApiNestedQuery(GameEventGameObjectFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GameEventGameObject",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameEventGameObjects(
    @common.Req() request: Request
  ): Promise<GameEventGameObject[]> {
    const args = plainToClass(GameEventGameObjectFindManyArgs, request.query);
    return this.service.gameEventGameObjects({
      ...args,
      select: {
        createdAt: true,
        eventEntry: true,
        guid: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameEventGameObject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEventGameObject",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameEventGameObject(
    @common.Param() params: GameEventGameObjectWhereUniqueInput
  ): Promise<GameEventGameObject | null> {
    const result = await this.service.gameEventGameObject({
      where: params,
      select: {
        createdAt: true,
        eventEntry: true,
        guid: true,
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
  @swagger.ApiOkResponse({ type: GameEventGameObject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEventGameObject",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameEventGameObjectUpdateInput,
  })
  async updateGameEventGameObject(
    @common.Param() params: GameEventGameObjectWhereUniqueInput,
    @common.Body() data: GameEventGameObjectUpdateInput
  ): Promise<GameEventGameObject | null> {
    try {
      return await this.service.updateGameEventGameObject({
        where: params,
        data: data,
        select: {
          createdAt: true,
          eventEntry: true,
          guid: true,
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
  @swagger.ApiOkResponse({ type: GameEventGameObject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEventGameObject",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGameEventGameObject(
    @common.Param() params: GameEventGameObjectWhereUniqueInput
  ): Promise<GameEventGameObject | null> {
    try {
      return await this.service.deleteGameEventGameObject({
        where: params,
        select: {
          createdAt: true,
          eventEntry: true,
          guid: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/gameEvents")
  @ApiNestedQuery(GameEventFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GameEvent",
    action: "read",
    possession: "any",
  })
  async findGameEvents(
    @common.Req() request: Request,
    @common.Param() params: GameEventGameObjectWhereUniqueInput
  ): Promise<GameEvent[]> {
    const query = plainToClass(GameEventFindManyArgs, request.query);
    const results = await this.service.findGameEvents(params.id, {
      ...query,
      select: {
        announce: true,
        createdAt: true,
        description: true,
        endTime: true,

        gameEventConditions: {
          select: {
            id: true,
          },
        },

        gameEventCreatures: {
          select: {
            id: true,
          },
        },

        gameEventGameObjects: {
          select: {
            id: true,
          },
        },

        gameEventModelEquips: {
          select: {
            id: true,
          },
        },

        gameEventQuests: {
          select: {
            id: true,
          },
        },

        id: true,
        startTime: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/gameEvents")
  @nestAccessControl.UseRoles({
    resource: "GameEventGameObject",
    action: "update",
    possession: "any",
  })
  async connectGameEvents(
    @common.Param() params: GameEventGameObjectWhereUniqueInput,
    @common.Body() body: GameEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameEvents: {
        connect: body,
      },
    };
    await this.service.updateGameEventGameObject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/gameEvents")
  @nestAccessControl.UseRoles({
    resource: "GameEventGameObject",
    action: "update",
    possession: "any",
  })
  async updateGameEvents(
    @common.Param() params: GameEventGameObjectWhereUniqueInput,
    @common.Body() body: GameEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameEvents: {
        set: body,
      },
    };
    await this.service.updateGameEventGameObject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/gameEvents")
  @nestAccessControl.UseRoles({
    resource: "GameEventGameObject",
    action: "update",
    possession: "any",
  })
  async disconnectGameEvents(
    @common.Param() params: GameEventGameObjectWhereUniqueInput,
    @common.Body() body: GameEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameEvents: {
        disconnect: body,
      },
    };
    await this.service.updateGameEventGameObject({
      where: params,
      data,
      select: { id: true },
    });
  }
}
