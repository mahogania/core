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
import { SerialAndBatchEntry } from "./SerialAndBatchEntry";
import { SerialAndBatchEntryCountArgs } from "./SerialAndBatchEntryCountArgs";
import { SerialAndBatchEntryFindManyArgs } from "./SerialAndBatchEntryFindManyArgs";
import { SerialAndBatchEntryFindUniqueArgs } from "./SerialAndBatchEntryFindUniqueArgs";
import { CreateSerialAndBatchEntryArgs } from "./CreateSerialAndBatchEntryArgs";
import { UpdateSerialAndBatchEntryArgs } from "./UpdateSerialAndBatchEntryArgs";
import { DeleteSerialAndBatchEntryArgs } from "./DeleteSerialAndBatchEntryArgs";
import { SerialAndBatchEntryService } from "../serialAndBatchEntry.service";
@graphql.Resolver(() => SerialAndBatchEntry)
export class SerialAndBatchEntryResolverBase {
  constructor(protected readonly service: SerialAndBatchEntryService) {}

  async _serialAndBatchEntriesMeta(
    @graphql.Args() args: SerialAndBatchEntryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SerialAndBatchEntry])
  async serialAndBatchEntries(
    @graphql.Args() args: SerialAndBatchEntryFindManyArgs
  ): Promise<SerialAndBatchEntry[]> {
    return this.service.serialAndBatchEntries(args);
  }

  @graphql.Query(() => SerialAndBatchEntry, { nullable: true })
  async serialAndBatchEntry(
    @graphql.Args() args: SerialAndBatchEntryFindUniqueArgs
  ): Promise<SerialAndBatchEntry | null> {
    const result = await this.service.serialAndBatchEntry(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SerialAndBatchEntry)
  async createSerialAndBatchEntry(
    @graphql.Args() args: CreateSerialAndBatchEntryArgs
  ): Promise<SerialAndBatchEntry> {
    return await this.service.createSerialAndBatchEntry({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SerialAndBatchEntry)
  async updateSerialAndBatchEntry(
    @graphql.Args() args: UpdateSerialAndBatchEntryArgs
  ): Promise<SerialAndBatchEntry | null> {
    try {
      return await this.service.updateSerialAndBatchEntry({
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

  @graphql.Mutation(() => SerialAndBatchEntry)
  async deleteSerialAndBatchEntry(
    @graphql.Args() args: DeleteSerialAndBatchEntryArgs
  ): Promise<SerialAndBatchEntry | null> {
    try {
      return await this.service.deleteSerialAndBatchEntry(args);
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
