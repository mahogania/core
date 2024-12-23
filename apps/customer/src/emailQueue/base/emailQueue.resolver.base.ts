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
import { EmailQueue } from "./EmailQueue";
import { EmailQueueCountArgs } from "./EmailQueueCountArgs";
import { EmailQueueFindManyArgs } from "./EmailQueueFindManyArgs";
import { EmailQueueFindUniqueArgs } from "./EmailQueueFindUniqueArgs";
import { CreateEmailQueueArgs } from "./CreateEmailQueueArgs";
import { UpdateEmailQueueArgs } from "./UpdateEmailQueueArgs";
import { DeleteEmailQueueArgs } from "./DeleteEmailQueueArgs";
import { EmailQueueService } from "../emailQueue.service";
@graphql.Resolver(() => EmailQueue)
export class EmailQueueResolverBase {
  constructor(protected readonly service: EmailQueueService) {}

  async _emailQueuesMeta(
    @graphql.Args() args: EmailQueueCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EmailQueue])
  async emailQueues(
    @graphql.Args() args: EmailQueueFindManyArgs
  ): Promise<EmailQueue[]> {
    return this.service.emailQueues(args);
  }

  @graphql.Query(() => EmailQueue, { nullable: true })
  async emailQueue(
    @graphql.Args() args: EmailQueueFindUniqueArgs
  ): Promise<EmailQueue | null> {
    const result = await this.service.emailQueue(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmailQueue)
  async createEmailQueue(
    @graphql.Args() args: CreateEmailQueueArgs
  ): Promise<EmailQueue> {
    return await this.service.createEmailQueue({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => EmailQueue)
  async updateEmailQueue(
    @graphql.Args() args: UpdateEmailQueueArgs
  ): Promise<EmailQueue | null> {
    try {
      return await this.service.updateEmailQueue({
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

  @graphql.Mutation(() => EmailQueue)
  async deleteEmailQueue(
    @graphql.Args() args: DeleteEmailQueueArgs
  ): Promise<EmailQueue | null> {
    try {
      return await this.service.deleteEmailQueue(args);
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
