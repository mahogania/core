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
import { EmailGroup } from "./EmailGroup";
import { EmailGroupCountArgs } from "./EmailGroupCountArgs";
import { EmailGroupFindManyArgs } from "./EmailGroupFindManyArgs";
import { EmailGroupFindUniqueArgs } from "./EmailGroupFindUniqueArgs";
import { CreateEmailGroupArgs } from "./CreateEmailGroupArgs";
import { UpdateEmailGroupArgs } from "./UpdateEmailGroupArgs";
import { DeleteEmailGroupArgs } from "./DeleteEmailGroupArgs";
import { EmailGroupService } from "../emailGroup.service";
@graphql.Resolver(() => EmailGroup)
export class EmailGroupResolverBase {
  constructor(protected readonly service: EmailGroupService) {}

  async _emailGroupsMeta(
    @graphql.Args() args: EmailGroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EmailGroup])
  async emailGroups(
    @graphql.Args() args: EmailGroupFindManyArgs
  ): Promise<EmailGroup[]> {
    return this.service.emailGroups(args);
  }

  @graphql.Query(() => EmailGroup, { nullable: true })
  async emailGroup(
    @graphql.Args() args: EmailGroupFindUniqueArgs
  ): Promise<EmailGroup | null> {
    const result = await this.service.emailGroup(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmailGroup)
  async createEmailGroup(
    @graphql.Args() args: CreateEmailGroupArgs
  ): Promise<EmailGroup> {
    return await this.service.createEmailGroup({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => EmailGroup)
  async updateEmailGroup(
    @graphql.Args() args: UpdateEmailGroupArgs
  ): Promise<EmailGroup | null> {
    try {
      return await this.service.updateEmailGroup({
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

  @graphql.Mutation(() => EmailGroup)
  async deleteEmailGroup(
    @graphql.Args() args: DeleteEmailGroupArgs
  ): Promise<EmailGroup | null> {
    try {
      return await this.service.deleteEmailGroup(args);
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
