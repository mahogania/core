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
import { PlayerFactionQuest } from "./PlayerFactionQuest";
import { PlayerFactionQuestCountArgs } from "./PlayerFactionQuestCountArgs";
import { PlayerFactionQuestFindManyArgs } from "./PlayerFactionQuestFindManyArgs";
import { PlayerFactionQuestFindUniqueArgs } from "./PlayerFactionQuestFindUniqueArgs";
import { CreatePlayerFactionQuestArgs } from "./CreatePlayerFactionQuestArgs";
import { UpdatePlayerFactionQuestArgs } from "./UpdatePlayerFactionQuestArgs";
import { DeletePlayerFactionQuestArgs } from "./DeletePlayerFactionQuestArgs";
import { Faction } from "../../faction/base/Faction";
import { Player } from "../../player/base/Player";
import { PlayerFactionQuestService } from "../playerFactionQuest.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerFactionQuest)
export class PlayerFactionQuestResolverBase {
  constructor(
    protected readonly service: PlayerFactionQuestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionQuest",
    action: "read",
    possession: "any",
  })
  async _playerFactionQuestsMeta(
    @graphql.Args() args: PlayerFactionQuestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PlayerFactionQuest])
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionQuest",
    action: "read",
    possession: "any",
  })
  async playerFactionQuests(
    @graphql.Args() args: PlayerFactionQuestFindManyArgs
  ): Promise<PlayerFactionQuest[]> {
    return this.service.playerFactionQuests(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PlayerFactionQuest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionQuest",
    action: "read",
    possession: "own",
  })
  async playerFactionQuest(
    @graphql.Args() args: PlayerFactionQuestFindUniqueArgs
  ): Promise<PlayerFactionQuest | null> {
    const result = await this.service.playerFactionQuest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PlayerFactionQuest)
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionQuest",
    action: "create",
    possession: "any",
  })
  async createPlayerFactionQuest(
    @graphql.Args() args: CreatePlayerFactionQuestArgs
  ): Promise<PlayerFactionQuest> {
    return await this.service.createPlayerFactionQuest({
      ...args,
      data: {
        ...args.data,

        faction: args.data.faction
          ? {
              connect: args.data.faction,
            }
          : undefined,

        player: args.data.player
          ? {
              connect: args.data.player,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PlayerFactionQuest)
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionQuest",
    action: "update",
    possession: "any",
  })
  async updatePlayerFactionQuest(
    @graphql.Args() args: UpdatePlayerFactionQuestArgs
  ): Promise<PlayerFactionQuest | null> {
    try {
      return await this.service.updatePlayerFactionQuest({
        ...args,
        data: {
          ...args.data,

          faction: args.data.faction
            ? {
                connect: args.data.faction,
              }
            : undefined,

          player: args.data.player
            ? {
                connect: args.data.player,
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

  @graphql.Mutation(() => PlayerFactionQuest)
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionQuest",
    action: "delete",
    possession: "any",
  })
  async deletePlayerFactionQuest(
    @graphql.Args() args: DeletePlayerFactionQuestArgs
  ): Promise<PlayerFactionQuest | null> {
    try {
      return await this.service.deletePlayerFactionQuest(args);
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
  @graphql.ResolveField(() => Faction, {
    nullable: true,
    name: "faction",
  })
  @nestAccessControl.UseRoles({
    resource: "Faction",
    action: "read",
    possession: "any",
  })
  async getFaction(
    @graphql.Parent() parent: PlayerFactionQuest
  ): Promise<Faction | null> {
    const result = await this.service.getFaction(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Player, {
    nullable: true,
    name: "player",
  })
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "any",
  })
  async getPlayer(
    @graphql.Parent() parent: PlayerFactionQuest
  ): Promise<Player | null> {
    const result = await this.service.getPlayer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}