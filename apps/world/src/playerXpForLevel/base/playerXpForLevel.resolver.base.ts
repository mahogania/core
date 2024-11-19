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
import { PlayerXpForLevel } from "./PlayerXpForLevel";
import { PlayerXpForLevelCountArgs } from "./PlayerXpForLevelCountArgs";
import { PlayerXpForLevelFindManyArgs } from "./PlayerXpForLevelFindManyArgs";
import { PlayerXpForLevelFindUniqueArgs } from "./PlayerXpForLevelFindUniqueArgs";
import { CreatePlayerXpForLevelArgs } from "./CreatePlayerXpForLevelArgs";
import { UpdatePlayerXpForLevelArgs } from "./UpdatePlayerXpForLevelArgs";
import { DeletePlayerXpForLevelArgs } from "./DeletePlayerXpForLevelArgs";
import { Player } from "../../player/base/Player";
import { PlayerXpForLevelService } from "../playerXpForLevel.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerXpForLevel)
export class PlayerXpForLevelResolverBase {
  constructor(
    protected readonly service: PlayerXpForLevelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PlayerXpForLevel",
    action: "read",
    possession: "any",
  })
  async _playerXpForLevelsMeta(
    @graphql.Args() args: PlayerXpForLevelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PlayerXpForLevel])
  @nestAccessControl.UseRoles({
    resource: "PlayerXpForLevel",
    action: "read",
    possession: "any",
  })
  async playerXpForLevels(
    @graphql.Args() args: PlayerXpForLevelFindManyArgs
  ): Promise<PlayerXpForLevel[]> {
    return this.service.playerXpForLevels(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PlayerXpForLevel, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PlayerXpForLevel",
    action: "read",
    possession: "own",
  })
  async playerXpForLevel(
    @graphql.Args() args: PlayerXpForLevelFindUniqueArgs
  ): Promise<PlayerXpForLevel | null> {
    const result = await this.service.playerXpForLevel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PlayerXpForLevel)
  @nestAccessControl.UseRoles({
    resource: "PlayerXpForLevel",
    action: "create",
    possession: "any",
  })
  async createPlayerXpForLevel(
    @graphql.Args() args: CreatePlayerXpForLevelArgs
  ): Promise<PlayerXpForLevel> {
    return await this.service.createPlayerXpForLevel({
      ...args,
      data: {
        ...args.data,

        player: args.data.player
          ? {
              connect: args.data.player,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PlayerXpForLevel)
  @nestAccessControl.UseRoles({
    resource: "PlayerXpForLevel",
    action: "update",
    possession: "any",
  })
  async updatePlayerXpForLevel(
    @graphql.Args() args: UpdatePlayerXpForLevelArgs
  ): Promise<PlayerXpForLevel | null> {
    try {
      return await this.service.updatePlayerXpForLevel({
        ...args,
        data: {
          ...args.data,

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

  @graphql.Mutation(() => PlayerXpForLevel)
  @nestAccessControl.UseRoles({
    resource: "PlayerXpForLevel",
    action: "delete",
    possession: "any",
  })
  async deletePlayerXpForLevel(
    @graphql.Args() args: DeletePlayerXpForLevelArgs
  ): Promise<PlayerXpForLevel | null> {
    try {
      return await this.service.deletePlayerXpForLevel(args);
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
    @graphql.Parent() parent: PlayerXpForLevel
  ): Promise<Player | null> {
    const result = await this.service.getPlayer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
