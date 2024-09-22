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
import { GossipMenuOptionLocale } from "./GossipMenuOptionLocale";
import { GossipMenuOptionLocaleCountArgs } from "./GossipMenuOptionLocaleCountArgs";
import { GossipMenuOptionLocaleFindManyArgs } from "./GossipMenuOptionLocaleFindManyArgs";
import { GossipMenuOptionLocaleFindUniqueArgs } from "./GossipMenuOptionLocaleFindUniqueArgs";
import { DeleteGossipMenuOptionLocaleArgs } from "./DeleteGossipMenuOptionLocaleArgs";
import { GossipMenuOptionLocaleService } from "../gossipMenuOptionLocale.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GossipMenuOptionLocale)
export class GossipMenuOptionLocaleResolverBase {
  constructor(
    protected readonly service: GossipMenuOptionLocaleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "GossipMenuOptionLocale",
    action: "read",
    possession: "any",
  })
  async _gossipMenuOptionLocalesMeta(
    @graphql.Args() args: GossipMenuOptionLocaleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [GossipMenuOptionLocale])
  @nestAccessControl.UseRoles({
    resource: "GossipMenuOptionLocale",
    action: "read",
    possession: "any",
  })
  async gossipMenuOptionLocales(
    @graphql.Args() args: GossipMenuOptionLocaleFindManyArgs
  ): Promise<GossipMenuOptionLocale[]> {
    return this.service.gossipMenuOptionLocales(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => GossipMenuOptionLocale, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "GossipMenuOptionLocale",
    action: "read",
    possession: "own",
  })
  async gossipMenuOptionLocale(
    @graphql.Args() args: GossipMenuOptionLocaleFindUniqueArgs
  ): Promise<GossipMenuOptionLocale | null> {
    const result = await this.service.gossipMenuOptionLocale(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => GossipMenuOptionLocale)
  @nestAccessControl.UseRoles({
    resource: "GossipMenuOptionLocale",
    action: "delete",
    possession: "any",
  })
  async deleteGossipMenuOptionLocale(
    @graphql.Args() args: DeleteGossipMenuOptionLocaleArgs
  ): Promise<GossipMenuOptionLocale | null> {
    try {
      return await this.service.deleteGossipMenuOptionLocale(args);
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
