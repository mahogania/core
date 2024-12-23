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
import { Player } from "./Player";
import { PlayerCountArgs } from "./PlayerCountArgs";
import { PlayerFindManyArgs } from "./PlayerFindManyArgs";
import { PlayerFindUniqueArgs } from "./PlayerFindUniqueArgs";
import { CreatePlayerArgs } from "./CreatePlayerArgs";
import { UpdatePlayerArgs } from "./UpdatePlayerArgs";
import { DeletePlayerArgs } from "./DeletePlayerArgs";
import { PlayerFactionAchievementFindManyArgs } from "../../playerFactionAchievement/base/PlayerFactionAchievementFindManyArgs";
import { PlayerFactionAchievement } from "../../playerFactionAchievement/base/PlayerFactionAchievement";
import { AchievementFindManyArgs } from "../../achievement/base/AchievementFindManyArgs";
import { Achievement } from "../../achievement/base/Achievement";
import { PlayerCraftFindManyArgs } from "../../playerCraft/base/PlayerCraftFindManyArgs";
import { PlayerCraft } from "../../playerCraft/base/PlayerCraft";
import { PlayerFactionQuestFindManyArgs } from "../../playerFactionQuest/base/PlayerFactionQuestFindManyArgs";
import { PlayerFactionQuest } from "../../playerFactionQuest/base/PlayerFactionQuest";
import { PlayerFactionReputationFindManyArgs } from "../../playerFactionReputation/base/PlayerFactionReputationFindManyArgs";
import { PlayerFactionReputation } from "../../playerFactionReputation/base/PlayerFactionReputation";
import { PlayerFactionSpellFindManyArgs } from "../../playerFactionSpell/base/PlayerFactionSpellFindManyArgs";
import { PlayerFactionSpell } from "../../playerFactionSpell/base/PlayerFactionSpell";
import { PlayerFactionTitleFindManyArgs } from "../../playerFactionTitle/base/PlayerFactionTitleFindManyArgs";
import { PlayerFactionTitle } from "../../playerFactionTitle/base/PlayerFactionTitle";
import { PlayerXpForLevelFindManyArgs } from "../../playerXpForLevel/base/PlayerXpForLevelFindManyArgs";
import { PlayerXpForLevel } from "../../playerXpForLevel/base/PlayerXpForLevel";
import { ResponseFindManyArgs } from "../../response/base/ResponseFindManyArgs";
import { Response } from "../../response/base/Response";
import { GeneStat } from "../../geneStat/base/GeneStat";
import { PlayerService } from "../player.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Player)
export class PlayerResolverBase {
  constructor(
    protected readonly service: PlayerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "any",
  })
  async _playersMeta(
    @graphql.Args() args: PlayerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Player])
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "any",
  })
  async players(@graphql.Args() args: PlayerFindManyArgs): Promise<Player[]> {
    return this.service.players(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Player, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "own",
  })
  async player(
    @graphql.Args() args: PlayerFindUniqueArgs
  ): Promise<Player | null> {
    const result = await this.service.player(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Player)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "create",
    possession: "any",
  })
  async createPlayer(@graphql.Args() args: CreatePlayerArgs): Promise<Player> {
    return await this.service.createPlayer({
      ...args,
      data: {
        ...args.data,

        geneStats: args.data.geneStats
          ? {
              connect: args.data.geneStats,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Player)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "update",
    possession: "any",
  })
  async updatePlayer(
    @graphql.Args() args: UpdatePlayerArgs
  ): Promise<Player | null> {
    try {
      return await this.service.updatePlayer({
        ...args,
        data: {
          ...args.data,

          geneStats: args.data.geneStats
            ? {
                connect: args.data.geneStats,
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

  @graphql.Mutation(() => Player)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "delete",
    possession: "any",
  })
  async deletePlayer(
    @graphql.Args() args: DeletePlayerArgs
  ): Promise<Player | null> {
    try {
      return await this.service.deletePlayer(args);
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
  @graphql.ResolveField(() => [PlayerFactionAchievement], {
    name: "playerFactionAchievements",
  })
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionAchievement",
    action: "read",
    possession: "any",
  })
  async findPlayerFactionAchievements(
    @graphql.Parent() parent: Player,
    @graphql.Args() args: PlayerFactionAchievementFindManyArgs
  ): Promise<PlayerFactionAchievement[]> {
    const results = await this.service.findPlayerFactionAchievements(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Achievement], { name: "achievements" })
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "read",
    possession: "any",
  })
  async findAchievements(
    @graphql.Parent() parent: Player,
    @graphql.Args() args: AchievementFindManyArgs
  ): Promise<Achievement[]> {
    const results = await this.service.findAchievements(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PlayerCraft], { name: "playerCrafts" })
  @nestAccessControl.UseRoles({
    resource: "PlayerCraft",
    action: "read",
    possession: "any",
  })
  async findPlayerCrafts(
    @graphql.Parent() parent: Player,
    @graphql.Args() args: PlayerCraftFindManyArgs
  ): Promise<PlayerCraft[]> {
    const results = await this.service.findPlayerCrafts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PlayerFactionQuest], {
    name: "playerFactionQuests",
  })
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionQuest",
    action: "read",
    possession: "any",
  })
  async findPlayerFactionQuests(
    @graphql.Parent() parent: Player,
    @graphql.Args() args: PlayerFactionQuestFindManyArgs
  ): Promise<PlayerFactionQuest[]> {
    const results = await this.service.findPlayerFactionQuests(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PlayerFactionReputation], {
    name: "playerFactionReputations",
  })
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionReputation",
    action: "read",
    possession: "any",
  })
  async findPlayerFactionReputations(
    @graphql.Parent() parent: Player,
    @graphql.Args() args: PlayerFactionReputationFindManyArgs
  ): Promise<PlayerFactionReputation[]> {
    const results = await this.service.findPlayerFactionReputations(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PlayerFactionSpell], {
    name: "playerFactionSpells",
  })
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionSpell",
    action: "read",
    possession: "any",
  })
  async findPlayerFactionSpells(
    @graphql.Parent() parent: Player,
    @graphql.Args() args: PlayerFactionSpellFindManyArgs
  ): Promise<PlayerFactionSpell[]> {
    const results = await this.service.findPlayerFactionSpells(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PlayerFactionTitle], {
    name: "playerFactionTitles",
  })
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionTitle",
    action: "read",
    possession: "any",
  })
  async findPlayerFactionTitles(
    @graphql.Parent() parent: Player,
    @graphql.Args() args: PlayerFactionTitleFindManyArgs
  ): Promise<PlayerFactionTitle[]> {
    const results = await this.service.findPlayerFactionTitles(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PlayerXpForLevel], { name: "playerXpForLevels" })
  @nestAccessControl.UseRoles({
    resource: "PlayerXpForLevel",
    action: "read",
    possession: "any",
  })
  async findPlayerXpForLevels(
    @graphql.Parent() parent: Player,
    @graphql.Args() args: PlayerXpForLevelFindManyArgs
  ): Promise<PlayerXpForLevel[]> {
    const results = await this.service.findPlayerXpForLevels(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Response], { name: "responses" })
  @nestAccessControl.UseRoles({
    resource: "Response",
    action: "read",
    possession: "any",
  })
  async findResponses(
    @graphql.Parent() parent: Player,
    @graphql.Args() args: ResponseFindManyArgs
  ): Promise<Response[]> {
    const results = await this.service.findResponses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => GeneStat, {
    nullable: true,
    name: "geneStats",
  })
  @nestAccessControl.UseRoles({
    resource: "GeneStat",
    action: "read",
    possession: "any",
  })
  async getGeneStats(
    @graphql.Parent() parent: Player
  ): Promise<GeneStat | null> {
    const result = await this.service.getGeneStats(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
