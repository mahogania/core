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
import { Spell } from "./Spell";
import { SpellCountArgs } from "./SpellCountArgs";
import { SpellFindManyArgs } from "./SpellFindManyArgs";
import { SpellFindUniqueArgs } from "./SpellFindUniqueArgs";
import { DeleteSpellArgs } from "./DeleteSpellArgs";
import { SpellService } from "../spell.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Spell)
export class SpellResolverBase {
  constructor(
    protected readonly service: SpellService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Spell",
    action: "read",
    possession: "any",
  })
  async _spellsMeta(
    @graphql.Args() args: SpellCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Spell])
  @nestAccessControl.UseRoles({
    resource: "Spell",
    action: "read",
    possession: "any",
  })
  async spells(@graphql.Args() args: SpellFindManyArgs): Promise<Spell[]> {
    return this.service.spells(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Spell, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Spell",
    action: "read",
    possession: "own",
  })
  async spell(
    @graphql.Args() args: SpellFindUniqueArgs
  ): Promise<Spell | null> {
    const result = await this.service.spell(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Spell)
  @nestAccessControl.UseRoles({
    resource: "Spell",
    action: "delete",
    possession: "any",
  })
  async deleteSpell(
    @graphql.Args() args: DeleteSpellArgs
  ): Promise<Spell | null> {
    try {
      return await this.service.deleteSpell(args);
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
