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
import { ConsoleLog } from "./ConsoleLog";
import { ConsoleLogCountArgs } from "./ConsoleLogCountArgs";
import { ConsoleLogFindManyArgs } from "./ConsoleLogFindManyArgs";
import { ConsoleLogFindUniqueArgs } from "./ConsoleLogFindUniqueArgs";
import { CreateConsoleLogArgs } from "./CreateConsoleLogArgs";
import { UpdateConsoleLogArgs } from "./UpdateConsoleLogArgs";
import { DeleteConsoleLogArgs } from "./DeleteConsoleLogArgs";
import { ConsoleLogService } from "../consoleLog.service";
@graphql.Resolver(() => ConsoleLog)
export class ConsoleLogResolverBase {
  constructor(protected readonly service: ConsoleLogService) {}

  async _consoleLogsMeta(
    @graphql.Args() args: ConsoleLogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ConsoleLog])
  async consoleLogs(
    @graphql.Args() args: ConsoleLogFindManyArgs
  ): Promise<ConsoleLog[]> {
    return this.service.consoleLogs(args);
  }

  @graphql.Query(() => ConsoleLog, { nullable: true })
  async consoleLog(
    @graphql.Args() args: ConsoleLogFindUniqueArgs
  ): Promise<ConsoleLog | null> {
    const result = await this.service.consoleLog(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ConsoleLog)
  async createConsoleLog(
    @graphql.Args() args: CreateConsoleLogArgs
  ): Promise<ConsoleLog> {
    return await this.service.createConsoleLog({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ConsoleLog)
  async updateConsoleLog(
    @graphql.Args() args: UpdateConsoleLogArgs
  ): Promise<ConsoleLog | null> {
    try {
      return await this.service.updateConsoleLog({
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

  @graphql.Mutation(() => ConsoleLog)
  async deleteConsoleLog(
    @graphql.Args() args: DeleteConsoleLogArgs
  ): Promise<ConsoleLog | null> {
    try {
      return await this.service.deleteConsoleLog(args);
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
