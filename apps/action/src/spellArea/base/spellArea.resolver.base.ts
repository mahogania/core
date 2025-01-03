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
import { SpellArea } from "./SpellArea";
import { SpellAreaCountArgs } from "./SpellAreaCountArgs";
import { SpellAreaFindManyArgs } from "./SpellAreaFindManyArgs";
import { SpellAreaFindUniqueArgs } from "./SpellAreaFindUniqueArgs";
import { DeleteSpellAreaArgs } from "./DeleteSpellAreaArgs";
import { SpellAreaService } from "../spellArea.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SpellArea)
export class SpellAreaResolverBase {
  constructor(
    protected readonly service: SpellAreaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SpellArea",
    action: "read",
    possession: "any",
  })
  async _spellAreasMeta(
    @graphql.Args() args: SpellAreaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SpellArea])
  @nestAccessControl.UseRoles({
    resource: "SpellArea",
    action: "read",
    possession: "any",
  })
  async spellAreas(
    @graphql.Args() args: SpellAreaFindManyArgs
  ): Promise<SpellArea[]> {
    return this.service.spellAreas(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SpellArea, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SpellArea",
    action: "read",
    possession: "own",
  })
  async spellArea(
    @graphql.Args() args: SpellAreaFindUniqueArgs
  ): Promise<SpellArea | null> {
    const result = await this.service.spellArea(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SpellArea)
  @nestAccessControl.UseRoles({
    resource: "SpellArea",
    action: "delete",
    possession: "any",
  })
  async deleteSpellArea(
    @graphql.Args() args: DeleteSpellAreaArgs
  ): Promise<SpellArea | null> {
    try {
      return await this.service.deleteSpellArea(args);
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
