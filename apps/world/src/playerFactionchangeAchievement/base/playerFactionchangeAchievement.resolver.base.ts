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
import { PlayerFactionchangeAchievement } from "./PlayerFactionchangeAchievement";
import { PlayerFactionchangeAchievementCountArgs } from "./PlayerFactionchangeAchievementCountArgs";
import { PlayerFactionchangeAchievementFindManyArgs } from "./PlayerFactionchangeAchievementFindManyArgs";
import { PlayerFactionchangeAchievementFindUniqueArgs } from "./PlayerFactionchangeAchievementFindUniqueArgs";
import { DeletePlayerFactionchangeAchievementArgs } from "./DeletePlayerFactionchangeAchievementArgs";
import { PlayerFactionchangeAchievementService } from "../playerFactionchangeAchievement.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerFactionchangeAchievement)
export class PlayerFactionchangeAchievementResolverBase {
  constructor(
    protected readonly service: PlayerFactionchangeAchievementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionchangeAchievement",
    action: "read",
    possession: "any",
  })
  async _playerFactionchangeAchievementsMeta(
    @graphql.Args() args: PlayerFactionchangeAchievementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PlayerFactionchangeAchievement])
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionchangeAchievement",
    action: "read",
    possession: "any",
  })
  async playerFactionchangeAchievements(
    @graphql.Args() args: PlayerFactionchangeAchievementFindManyArgs
  ): Promise<PlayerFactionchangeAchievement[]> {
    return this.service.playerFactionchangeAchievements(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PlayerFactionchangeAchievement, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionchangeAchievement",
    action: "read",
    possession: "own",
  })
  async playerFactionchangeAchievement(
    @graphql.Args() args: PlayerFactionchangeAchievementFindUniqueArgs
  ): Promise<PlayerFactionchangeAchievement | null> {
    const result = await this.service.playerFactionchangeAchievement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PlayerFactionchangeAchievement)
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionchangeAchievement",
    action: "delete",
    possession: "any",
  })
  async deletePlayerFactionchangeAchievement(
    @graphql.Args() args: DeletePlayerFactionchangeAchievementArgs
  ): Promise<PlayerFactionchangeAchievement | null> {
    try {
      return await this.service.deletePlayerFactionchangeAchievement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
