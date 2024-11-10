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
import { EmailQueueRecipient } from "./EmailQueueRecipient";
import { EmailQueueRecipientCountArgs } from "./EmailQueueRecipientCountArgs";
import { EmailQueueRecipientFindManyArgs } from "./EmailQueueRecipientFindManyArgs";
import { EmailQueueRecipientFindUniqueArgs } from "./EmailQueueRecipientFindUniqueArgs";
import { CreateEmailQueueRecipientArgs } from "./CreateEmailQueueRecipientArgs";
import { UpdateEmailQueueRecipientArgs } from "./UpdateEmailQueueRecipientArgs";
import { DeleteEmailQueueRecipientArgs } from "./DeleteEmailQueueRecipientArgs";
import { EmailQueueRecipientService } from "../emailQueueRecipient.service";
@graphql.Resolver(() => EmailQueueRecipient)
export class EmailQueueRecipientResolverBase {
  constructor(protected readonly service: EmailQueueRecipientService) {}

  async _emailQueueRecipientsMeta(
    @graphql.Args() args: EmailQueueRecipientCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EmailQueueRecipient])
  async emailQueueRecipients(
    @graphql.Args() args: EmailQueueRecipientFindManyArgs
  ): Promise<EmailQueueRecipient[]> {
    return this.service.emailQueueRecipients(args);
  }

  @graphql.Query(() => EmailQueueRecipient, { nullable: true })
  async emailQueueRecipient(
    @graphql.Args() args: EmailQueueRecipientFindUniqueArgs
  ): Promise<EmailQueueRecipient | null> {
    const result = await this.service.emailQueueRecipient(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmailQueueRecipient)
  async createEmailQueueRecipient(
    @graphql.Args() args: CreateEmailQueueRecipientArgs
  ): Promise<EmailQueueRecipient> {
    return await this.service.createEmailQueueRecipient({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => EmailQueueRecipient)
  async updateEmailQueueRecipient(
    @graphql.Args() args: UpdateEmailQueueRecipientArgs
  ): Promise<EmailQueueRecipient | null> {
    try {
      return await this.service.updateEmailQueueRecipient({
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

  @graphql.Mutation(() => EmailQueueRecipient)
  async deleteEmailQueueRecipient(
    @graphql.Args() args: DeleteEmailQueueRecipientArgs
  ): Promise<EmailQueueRecipient | null> {
    try {
      return await this.service.deleteEmailQueueRecipient(args);
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