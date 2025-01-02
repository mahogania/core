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
import { CallLog } from "./CallLog";
import { CallLogCountArgs } from "./CallLogCountArgs";
import { CallLogFindManyArgs } from "./CallLogFindManyArgs";
import { CallLogFindUniqueArgs } from "./CallLogFindUniqueArgs";
import { CreateCallLogArgs } from "./CreateCallLogArgs";
import { UpdateCallLogArgs } from "./UpdateCallLogArgs";
import { DeleteCallLogArgs } from "./DeleteCallLogArgs";
import { CallLogService } from "../callLog.service";
@graphql.Resolver(() => CallLog)
export class CallLogResolverBase {
  constructor(protected readonly service: CallLogService) {}

  async _callLogsMeta(
    @graphql.Args() args: CallLogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CallLog])
  async callLogs(
    @graphql.Args() args: CallLogFindManyArgs
  ): Promise<CallLog[]> {
    return this.service.callLogs(args);
  }

  @graphql.Query(() => CallLog, { nullable: true })
  async callLog(
    @graphql.Args() args: CallLogFindUniqueArgs
  ): Promise<CallLog | null> {
    const result = await this.service.callLog(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CallLog)
  async createCallLog(
    @graphql.Args() args: CreateCallLogArgs
  ): Promise<CallLog> {
    return await this.service.createCallLog({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CallLog)
  async updateCallLog(
    @graphql.Args() args: UpdateCallLogArgs
  ): Promise<CallLog | null> {
    try {
      return await this.service.updateCallLog({
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

  @graphql.Mutation(() => CallLog)
  async deleteCallLog(
    @graphql.Args() args: DeleteCallLogArgs
  ): Promise<CallLog | null> {
    try {
      return await this.service.deleteCallLog(args);
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