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
import { PlayerFactionchangeSpells } from "./PlayerFactionchangeSpells";
import { PlayerFactionchangeSpellsCountArgs } from "./PlayerFactionchangeSpellsCountArgs";
import { PlayerFactionchangeSpellsFindManyArgs } from "./PlayerFactionchangeSpellsFindManyArgs";
import { PlayerFactionchangeSpellsFindUniqueArgs } from "./PlayerFactionchangeSpellsFindUniqueArgs";
import { DeletePlayerFactionchangeSpellsArgs } from "./DeletePlayerFactionchangeSpellsArgs";
import { PlayerFactionchangeSpellsService } from "../playerFactionchangeSpells.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlayerFactionchangeSpells)
export class PlayerFactionchangeSpellsResolverBase {
  constructor(
    protected readonly service: PlayerFactionchangeSpellsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionchangeSpells",
    action: "read",
    possession: "any",
  })
  async _playerFactionchangeSpellsItemsMeta(
    @graphql.Args() args: PlayerFactionchangeSpellsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PlayerFactionchangeSpells])
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionchangeSpells",
    action: "read",
    possession: "any",
  })
  async playerFactionchangeSpellsItems(
    @graphql.Args() args: PlayerFactionchangeSpellsFindManyArgs
  ): Promise<PlayerFactionchangeSpells[]> {
    return this.service.playerFactionchangeSpellsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PlayerFactionchangeSpells, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionchangeSpells",
    action: "read",
    possession: "own",
  })
  async playerFactionchangeSpells(
    @graphql.Args() args: PlayerFactionchangeSpellsFindUniqueArgs
  ): Promise<PlayerFactionchangeSpells | null> {
    const result = await this.service.playerFactionchangeSpells(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PlayerFactionchangeSpells)
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionchangeSpells",
    action: "delete",
    possession: "any",
  })
  async deletePlayerFactionchangeSpells(
    @graphql.Args() args: DeletePlayerFactionchangeSpellsArgs
  ): Promise<PlayerFactionchangeSpells | null> {
    try {
      return await this.service.deletePlayerFactionchangeSpells(args);
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
