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
import { PlayerFactionTitle } from "./PlayerFactionTitle";
import { PlayerFactionTitleCountArgs } from "./PlayerFactionTitleCountArgs";
import { PlayerFactionTitleFindManyArgs } from "./PlayerFactionTitleFindManyArgs";
import { PlayerFactionTitleFindUniqueArgs } from "./PlayerFactionTitleFindUniqueArgs";
import { CreatePlayerFactionTitleArgs } from "./CreatePlayerFactionTitleArgs";
import { UpdatePlayerFactionTitleArgs } from "./UpdatePlayerFactionTitleArgs";
import { DeletePlayerFactionTitleArgs } from "./DeletePlayerFactionTitleArgs";
import { Faction } from "../../faction/base/Faction";
import { Player } from "../../player/base/Player";
import { PlayerFactionTitleService } from "../playerFactionTitle.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerFactionTitle)
export class PlayerFactionTitleResolverBase {
  constructor(
    protected readonly service: PlayerFactionTitleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionTitle",
    action: "read",
    possession: "any",
  })
  async _playerFactionTitlesMeta(
    @graphql.Args() args: PlayerFactionTitleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PlayerFactionTitle])
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionTitle",
    action: "read",
    possession: "any",
  })
  async playerFactionTitles(
    @graphql.Args() args: PlayerFactionTitleFindManyArgs
  ): Promise<PlayerFactionTitle[]> {
    return this.service.playerFactionTitles(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PlayerFactionTitle, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionTitle",
    action: "read",
    possession: "own",
  })
  async playerFactionTitle(
    @graphql.Args() args: PlayerFactionTitleFindUniqueArgs
  ): Promise<PlayerFactionTitle | null> {
    const result = await this.service.playerFactionTitle(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PlayerFactionTitle)
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionTitle",
    action: "create",
    possession: "any",
  })
  async createPlayerFactionTitle(
    @graphql.Args() args: CreatePlayerFactionTitleArgs
  ): Promise<PlayerFactionTitle> {
    return await this.service.createPlayerFactionTitle({
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
  @graphql.Mutation(() => PlayerFactionTitle)
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionTitle",
    action: "update",
    possession: "any",
  })
  async updatePlayerFactionTitle(
    @graphql.Args() args: UpdatePlayerFactionTitleArgs
  ): Promise<PlayerFactionTitle | null> {
    try {
      return await this.service.updatePlayerFactionTitle({
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

  @graphql.Mutation(() => PlayerFactionTitle)
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionTitle",
    action: "delete",
    possession: "any",
  })
  async deletePlayerFactionTitle(
    @graphql.Args() args: DeletePlayerFactionTitleArgs
  ): Promise<PlayerFactionTitle | null> {
    try {
      return await this.service.deletePlayerFactionTitle(args);
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
    @graphql.Parent() parent: PlayerFactionTitle
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
    @graphql.Parent() parent: PlayerFactionTitle
  ): Promise<Player | null> {
    const result = await this.service.getPlayer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
