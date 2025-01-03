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
import { GameEventQuestService } from "../gameEventQuest.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GameEventQuestCreateInput } from "./GameEventQuestCreateInput";
import { GameEventQuest } from "./GameEventQuest";
import { GameEventQuestFindManyArgs } from "./GameEventQuestFindManyArgs";
import { GameEventQuestWhereUniqueInput } from "./GameEventQuestWhereUniqueInput";
import { GameEventQuestUpdateInput } from "./GameEventQuestUpdateInput";
import { GameEventFindManyArgs } from "../../gameEvent/base/GameEventFindManyArgs";
import { GameEvent } from "../../gameEvent/base/GameEvent";
import { GameEventWhereUniqueInput } from "../../gameEvent/base/GameEventWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GameEventQuestControllerBase {
  constructor(
    protected readonly service: GameEventQuestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameEventQuest })
  @nestAccessControl.UseRoles({
    resource: "GameEventQuest",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameEventQuestCreateInput,
  })
  async createGameEventQuest(
    @common.Body() data: GameEventQuestCreateInput
  ): Promise<GameEventQuest> {
    return await this.service.createGameEventQuest({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GameEventQuest] })
  @ApiNestedQuery(GameEventQuestFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GameEventQuest",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameEventQuests(
    @common.Req() request: Request
  ): Promise<GameEventQuest[]> {
    const args = plainToClass(GameEventQuestFindManyArgs, request.query);
    return this.service.gameEventQuests({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameEventQuest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEventQuest",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameEventQuest(
    @common.Param() params: GameEventQuestWhereUniqueInput
  ): Promise<GameEventQuest | null> {
    const result = await this.service.gameEventQuest({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: GameEventQuest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEventQuest",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameEventQuestUpdateInput,
  })
  async updateGameEventQuest(
    @common.Param() params: GameEventQuestWhereUniqueInput,
    @common.Body() data: GameEventQuestUpdateInput
  ): Promise<GameEventQuest | null> {
    try {
      return await this.service.updateGameEventQuest({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: GameEventQuest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameEventQuest",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGameEventQuest(
    @common.Param() params: GameEventQuestWhereUniqueInput
  ): Promise<GameEventQuest | null> {
    try {
      return await this.service.deleteGameEventQuest({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
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
    @common.Param() params: GameEventQuestWhereUniqueInput
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
    resource: "GameEventQuest",
    action: "update",
    possession: "any",
  })
  async connectGameEvents(
    @common.Param() params: GameEventQuestWhereUniqueInput,
    @common.Body() body: GameEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameEvents: {
        connect: body,
      },
    };
    await this.service.updateGameEventQuest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/gameEvents")
  @nestAccessControl.UseRoles({
    resource: "GameEventQuest",
    action: "update",
    possession: "any",
  })
  async updateGameEvents(
    @common.Param() params: GameEventQuestWhereUniqueInput,
    @common.Body() body: GameEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameEvents: {
        set: body,
      },
    };
    await this.service.updateGameEventQuest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/gameEvents")
  @nestAccessControl.UseRoles({
    resource: "GameEventQuest",
    action: "update",
    possession: "any",
  })
  async disconnectGameEvents(
    @common.Param() params: GameEventQuestWhereUniqueInput,
    @common.Body() body: GameEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameEvents: {
        disconnect: body,
      },
    };
    await this.service.updateGameEventQuest({
      where: params,
      data,
      select: { id: true },
    });
  }
}
