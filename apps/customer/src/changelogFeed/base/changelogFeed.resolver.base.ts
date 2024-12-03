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
import { ChangelogFeed } from "./ChangelogFeed";
import { ChangelogFeedCountArgs } from "./ChangelogFeedCountArgs";
import { ChangelogFeedFindManyArgs } from "./ChangelogFeedFindManyArgs";
import { ChangelogFeedFindUniqueArgs } from "./ChangelogFeedFindUniqueArgs";
import { CreateChangelogFeedArgs } from "./CreateChangelogFeedArgs";
import { UpdateChangelogFeedArgs } from "./UpdateChangelogFeedArgs";
import { DeleteChangelogFeedArgs } from "./DeleteChangelogFeedArgs";
import { ChangelogFeedService } from "../changelogFeed.service";
@graphql.Resolver(() => ChangelogFeed)
export class ChangelogFeedResolverBase {
  constructor(protected readonly service: ChangelogFeedService) {}

  async _changelogFeedsMeta(
    @graphql.Args() args: ChangelogFeedCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ChangelogFeed])
  async changelogFeeds(
    @graphql.Args() args: ChangelogFeedFindManyArgs
  ): Promise<ChangelogFeed[]> {
    return this.service.changelogFeeds(args);
  }

  @graphql.Query(() => ChangelogFeed, { nullable: true })
  async changelogFeed(
    @graphql.Args() args: ChangelogFeedFindUniqueArgs
  ): Promise<ChangelogFeed | null> {
    const result = await this.service.changelogFeed(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ChangelogFeed)
  async createChangelogFeed(
    @graphql.Args() args: CreateChangelogFeedArgs
  ): Promise<ChangelogFeed> {
    return await this.service.createChangelogFeed({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ChangelogFeed)
  async updateChangelogFeed(
    @graphql.Args() args: UpdateChangelogFeedArgs
  ): Promise<ChangelogFeed | null> {
    try {
      return await this.service.updateChangelogFeed({
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

  @graphql.Mutation(() => ChangelogFeed)
  async deleteChangelogFeed(
    @graphql.Args() args: DeleteChangelogFeedArgs
  ): Promise<ChangelogFeed | null> {
    try {
      return await this.service.deleteChangelogFeed(args);
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
