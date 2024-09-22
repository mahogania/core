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
import { PageTextLocale } from "./PageTextLocale";
import { PageTextLocaleCountArgs } from "./PageTextLocaleCountArgs";
import { PageTextLocaleFindManyArgs } from "./PageTextLocaleFindManyArgs";
import { PageTextLocaleFindUniqueArgs } from "./PageTextLocaleFindUniqueArgs";
import { DeletePageTextLocaleArgs } from "./DeletePageTextLocaleArgs";
import { PageTextLocaleService } from "../pageTextLocale.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PageTextLocale)
export class PageTextLocaleResolverBase {
  constructor(
    protected readonly service: PageTextLocaleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PageTextLocale",
    action: "read",
    possession: "any",
  })
  async _pageTextLocalesMeta(
    @graphql.Args() args: PageTextLocaleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PageTextLocale])
  @nestAccessControl.UseRoles({
    resource: "PageTextLocale",
    action: "read",
    possession: "any",
  })
  async pageTextLocales(
    @graphql.Args() args: PageTextLocaleFindManyArgs
  ): Promise<PageTextLocale[]> {
    return this.service.pageTextLocales(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PageTextLocale, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PageTextLocale",
    action: "read",
    possession: "own",
  })
  async pageTextLocale(
    @graphql.Args() args: PageTextLocaleFindUniqueArgs
  ): Promise<PageTextLocale | null> {
    const result = await this.service.pageTextLocale(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PageTextLocale)
  @nestAccessControl.UseRoles({
    resource: "PageTextLocale",
    action: "delete",
    possession: "any",
  })
  async deletePageTextLocale(
    @graphql.Args() args: DeletePageTextLocaleArgs
  ): Promise<PageTextLocale | null> {
    try {
      return await this.service.deletePageTextLocale(args);
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
