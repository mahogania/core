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
import { DynamicLink } from "./DynamicLink";
import { DynamicLinkCountArgs } from "./DynamicLinkCountArgs";
import { DynamicLinkFindManyArgs } from "./DynamicLinkFindManyArgs";
import { DynamicLinkFindUniqueArgs } from "./DynamicLinkFindUniqueArgs";
import { CreateDynamicLinkArgs } from "./CreateDynamicLinkArgs";
import { UpdateDynamicLinkArgs } from "./UpdateDynamicLinkArgs";
import { DeleteDynamicLinkArgs } from "./DeleteDynamicLinkArgs";
import { DynamicLinkService } from "../dynamicLink.service";
@graphql.Resolver(() => DynamicLink)
export class DynamicLinkResolverBase {
  constructor(protected readonly service: DynamicLinkService) {}

  async _dynamicLinksMeta(
    @graphql.Args() args: DynamicLinkCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DynamicLink])
  async dynamicLinks(
    @graphql.Args() args: DynamicLinkFindManyArgs
  ): Promise<DynamicLink[]> {
    return this.service.dynamicLinks(args);
  }

  @graphql.Query(() => DynamicLink, { nullable: true })
  async dynamicLink(
    @graphql.Args() args: DynamicLinkFindUniqueArgs
  ): Promise<DynamicLink | null> {
    const result = await this.service.dynamicLink(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DynamicLink)
  async createDynamicLink(
    @graphql.Args() args: CreateDynamicLinkArgs
  ): Promise<DynamicLink> {
    return await this.service.createDynamicLink({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DynamicLink)
  async updateDynamicLink(
    @graphql.Args() args: UpdateDynamicLinkArgs
  ): Promise<DynamicLink | null> {
    try {
      return await this.service.updateDynamicLink({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => DynamicLink)
  async deleteDynamicLink(
    @graphql.Args() args: DeleteDynamicLinkArgs
  ): Promise<DynamicLink | null> {
    try {
      return await this.service.deleteDynamicLink(args);
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