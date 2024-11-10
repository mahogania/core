/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { GameEvent } from "./GameEvent";
import { GameEventCountArgs } from "./GameEventCountArgs";
import { GameEventFindManyArgs } from "./GameEventFindManyArgs";
import { GameEventFindUniqueArgs } from "./GameEventFindUniqueArgs";
import { CreateGameEventArgs } from "./CreateGameEventArgs";
import { UpdateGameEventArgs } from "./UpdateGameEventArgs";
import { DeleteGameEventArgs } from "./DeleteGameEventArgs";
import { GameEventCondition } from "../../gameEventCondition/base/GameEventCondition";
import { GameEventCreature } from "../../gameEventCreature/base/GameEventCreature";
import { GameEventGameObject } from "../../gameEventGameObject/base/GameEventGameObject";
import { GameEventModelEquip } from "../../gameEventModelEquip/base/GameEventModelEquip";
import { GameEventQuest } from "../../gameEventQuest/base/GameEventQuest";
import { GameEventService } from "../gameEvent.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameEvent)
export class GameEventResolverBase {
  constructor(
    protected readonly service: GameEventService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "GameEvent",
    action: "read",
    possession: "any",
  })
  async _gameEventsMeta(
    @graphql.Args() args: GameEventCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [GameEvent])
  @nestAccessControl.UseRoles({
    resource: "GameEvent",
    action: "read",
    possession: "any",
  })
  async gameEvents(
    @graphql.Args() args: GameEventFindManyArgs
  ): Promise<GameEvent[]> {
    return this.service.gameEvents(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => GameEvent, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "GameEvent",
    action: "read",
    possession: "own",
  })
  async gameEvent(
    @graphql.Args() args: GameEventFindUniqueArgs
  ): Promise<GameEvent | null> {
    const result = await this.service.gameEvent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GameEvent)
  @nestAccessControl.UseRoles({
    resource: "GameEvent",
    action: "create",
    possession: "any",
  })
  async createGameEvent(
    @graphql.Args() args: CreateGameEventArgs
  ): Promise<GameEvent> {
    return await this.service.createGameEvent({
      ...args,
      data: {
        ...args.data,

        gameEventConditions: args.data.gameEventConditions
          ? {
              connect: args.data.gameEventConditions,
            }
          : undefined,

        gameEventCreatures: args.data.gameEventCreatures
          ? {
              connect: args.data.gameEventCreatures,
            }
          : undefined,

        gameEventGameObjects: args.data.gameEventGameObjects
          ? {
              connect: args.data.gameEventGameObjects,
            }
          : undefined,

        gameEventModelEquips: args.data.gameEventModelEquips
          ? {
              connect: args.data.gameEventModelEquips,
            }
          : undefined,

        gameEventQuests: args.data.gameEventQuests
          ? {
              connect: args.data.gameEventQuests,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GameEvent)
  @nestAccessControl.UseRoles({
    resource: "GameEvent",
    action: "update",
    possession: "any",
  })
  async updateGameEvent(
    @graphql.Args() args: UpdateGameEventArgs
  ): Promise<GameEvent | null> {
    try {
      return await this.service.updateGameEvent({
        ...args,
        data: {
          ...args.data,

          gameEventConditions: args.data.gameEventConditions
            ? {
                connect: args.data.gameEventConditions,
              }
            : undefined,

          gameEventCreatures: args.data.gameEventCreatures
            ? {
                connect: args.data.gameEventCreatures,
              }
            : undefined,

          gameEventGameObjects: args.data.gameEventGameObjects
            ? {
                connect: args.data.gameEventGameObjects,
              }
            : undefined,

          gameEventModelEquips: args.data.gameEventModelEquips
            ? {
                connect: args.data.gameEventModelEquips,
              }
            : undefined,

          gameEventQuests: args.data.gameEventQuests
            ? {
                connect: args.data.gameEventQuests,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => GameEvent)
  @nestAccessControl.UseRoles({
    resource: "GameEvent",
    action: "delete",
    possession: "any",
  })
  async deleteGameEvent(
    @graphql.Args() args: DeleteGameEventArgs
  ): Promise<GameEvent | null> {
    try {
      return await this.service.deleteGameEvent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => GameEventCondition, {
    nullable: true,
    name: "gameEventConditions",
  })
  @nestAccessControl.UseRoles({
    resource: "GameEventCondition",
    action: "read",
    possession: "any",
  })
  async getGameEventConditions(
    @graphql.Parent() parent: GameEvent
  ): Promise<GameEventCondition | null> {
    const result = await this.service.getGameEventConditions(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => GameEventCreature, {
    nullable: true,
    name: "gameEventCreatures",
  })
  @nestAccessControl.UseRoles({
    resource: "GameEventCreature",
    action: "read",
    possession: "any",
  })
  async getGameEventCreatures(
    @graphql.Parent() parent: GameEvent
  ): Promise<GameEventCreature | null> {
    const result = await this.service.getGameEventCreatures(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => GameEventGameObject, {
    nullable: true,
    name: "gameEventGameObjects",
  })
  @nestAccessControl.UseRoles({
    resource: "GameEventGameObject",
    action: "read",
    possession: "any",
  })
  async getGameEventGameObjects(
    @graphql.Parent() parent: GameEvent
  ): Promise<GameEventGameObject | null> {
    const result = await this.service.getGameEventGameObjects(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => GameEventModelEquip, {
    nullable: true,
    name: "gameEventModelEquips",
  })
  @nestAccessControl.UseRoles({
    resource: "GameEventModelEquip",
    action: "read",
    possession: "any",
  })
  async getGameEventModelEquips(
    @graphql.Parent() parent: GameEvent
  ): Promise<GameEventModelEquip | null> {
    const result = await this.service.getGameEventModelEquips(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => GameEventQuest, {
    nullable: true,
    name: "gameEventQuests",
  })
  @nestAccessControl.UseRoles({
    resource: "GameEventQuest",
    action: "read",
    possession: "any",
  })
  async getGameEventQuests(
    @graphql.Parent() parent: GameEvent
  ): Promise<GameEventQuest | null> {
    const result = await this.service.getGameEventQuests(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
