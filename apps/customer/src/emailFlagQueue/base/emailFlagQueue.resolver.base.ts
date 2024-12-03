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
import { EmailFlagQueue } from "./EmailFlagQueue";
import { EmailFlagQueueCountArgs } from "./EmailFlagQueueCountArgs";
import { EmailFlagQueueFindManyArgs } from "./EmailFlagQueueFindManyArgs";
import { EmailFlagQueueFindUniqueArgs } from "./EmailFlagQueueFindUniqueArgs";
import { CreateEmailFlagQueueArgs } from "./CreateEmailFlagQueueArgs";
import { UpdateEmailFlagQueueArgs } from "./UpdateEmailFlagQueueArgs";
import { DeleteEmailFlagQueueArgs } from "./DeleteEmailFlagQueueArgs";
import { EmailFlagQueueService } from "../emailFlagQueue.service";
@graphql.Resolver(() => EmailFlagQueue)
export class EmailFlagQueueResolverBase {
  constructor(protected readonly service: EmailFlagQueueService) {}

  async _emailFlagQueuesMeta(
    @graphql.Args() args: EmailFlagQueueCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EmailFlagQueue])
  async emailFlagQueues(
    @graphql.Args() args: EmailFlagQueueFindManyArgs
  ): Promise<EmailFlagQueue[]> {
    return this.service.emailFlagQueues(args);
  }

  @graphql.Query(() => EmailFlagQueue, { nullable: true })
  async emailFlagQueue(
    @graphql.Args() args: EmailFlagQueueFindUniqueArgs
  ): Promise<EmailFlagQueue | null> {
    const result = await this.service.emailFlagQueue(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmailFlagQueue)
  async createEmailFlagQueue(
    @graphql.Args() args: CreateEmailFlagQueueArgs
  ): Promise<EmailFlagQueue> {
    return await this.service.createEmailFlagQueue({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => EmailFlagQueue)
  async updateEmailFlagQueue(
    @graphql.Args() args: UpdateEmailFlagQueueArgs
  ): Promise<EmailFlagQueue | null> {
    try {
      return await this.service.updateEmailFlagQueue({
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

  @graphql.Mutation(() => EmailFlagQueue)
  async deleteEmailFlagQueue(
    @graphql.Args() args: DeleteEmailFlagQueueArgs
  ): Promise<EmailFlagQueue | null> {
    try {
      return await this.service.deleteEmailFlagQueue(args);
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
