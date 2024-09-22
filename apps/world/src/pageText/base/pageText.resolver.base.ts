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
import { PageText } from "./PageText";
import { PageTextCountArgs } from "./PageTextCountArgs";
import { PageTextFindManyArgs } from "./PageTextFindManyArgs";
import { PageTextFindUniqueArgs } from "./PageTextFindUniqueArgs";
import { DeletePageTextArgs } from "./DeletePageTextArgs";
import { PageTextService } from "../pageText.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PageText)
export class PageTextResolverBase {
  constructor(
    protected readonly service: PageTextService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PageText",
    action: "read",
    possession: "any",
  })
  async _pageTextsMeta(
    @graphql.Args() args: PageTextCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PageText])
  @nestAccessControl.UseRoles({
    resource: "PageText",
    action: "read",
    possession: "any",
  })
  async pageTexts(
    @graphql.Args() args: PageTextFindManyArgs
  ): Promise<PageText[]> {
    return this.service.pageTexts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PageText, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PageText",
    action: "read",
    possession: "own",
  })
  async pageText(
    @graphql.Args() args: PageTextFindUniqueArgs
  ): Promise<PageText | null> {
    const result = await this.service.pageText(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PageText)
  @nestAccessControl.UseRoles({
    resource: "PageText",
    action: "delete",
    possession: "any",
  })
  async deletePageText(
    @graphql.Args() args: DeletePageTextArgs
  ): Promise<PageText | null> {
    try {
      return await this.service.deletePageText(args);
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
