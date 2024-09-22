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
import { NpcSpellclickSpells } from "./NpcSpellclickSpells";
import { NpcSpellclickSpellsCountArgs } from "./NpcSpellclickSpellsCountArgs";
import { NpcSpellclickSpellsFindManyArgs } from "./NpcSpellclickSpellsFindManyArgs";
import { NpcSpellclickSpellsFindUniqueArgs } from "./NpcSpellclickSpellsFindUniqueArgs";
import { DeleteNpcSpellclickSpellsArgs } from "./DeleteNpcSpellclickSpellsArgs";
import { NpcSpellclickSpellsService } from "../npcSpellclickSpells.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NpcSpellclickSpells)
export class NpcSpellclickSpellsResolverBase {
  constructor(
    protected readonly service: NpcSpellclickSpellsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "NpcSpellclickSpells",
    action: "read",
    possession: "any",
  })
  async _npcSpellclickSpellsItemsMeta(
    @graphql.Args() args: NpcSpellclickSpellsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [NpcSpellclickSpells])
  @nestAccessControl.UseRoles({
    resource: "NpcSpellclickSpells",
    action: "read",
    possession: "any",
  })
  async npcSpellclickSpellsItems(
    @graphql.Args() args: NpcSpellclickSpellsFindManyArgs
  ): Promise<NpcSpellclickSpells[]> {
    return this.service.npcSpellclickSpellsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => NpcSpellclickSpells, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "NpcSpellclickSpells",
    action: "read",
    possession: "own",
  })
  async npcSpellclickSpells(
    @graphql.Args() args: NpcSpellclickSpellsFindUniqueArgs
  ): Promise<NpcSpellclickSpells | null> {
    const result = await this.service.npcSpellclickSpells(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => NpcSpellclickSpells)
  @nestAccessControl.UseRoles({
    resource: "NpcSpellclickSpells",
    action: "delete",
    possession: "any",
  })
  async deleteNpcSpellclickSpells(
    @graphql.Args() args: DeleteNpcSpellclickSpellsArgs
  ): Promise<NpcSpellclickSpells | null> {
    try {
      return await this.service.deleteNpcSpellclickSpells(args);
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
