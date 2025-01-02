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
import { JournalEntry } from "./JournalEntry";
import { JournalEntryCountArgs } from "./JournalEntryCountArgs";
import { JournalEntryFindManyArgs } from "./JournalEntryFindManyArgs";
import { JournalEntryFindUniqueArgs } from "./JournalEntryFindUniqueArgs";
import { CreateJournalEntryArgs } from "./CreateJournalEntryArgs";
import { UpdateJournalEntryArgs } from "./UpdateJournalEntryArgs";
import { DeleteJournalEntryArgs } from "./DeleteJournalEntryArgs";
import { JournalEntryService } from "../journalEntry.service";
@graphql.Resolver(() => JournalEntry)
export class JournalEntryResolverBase {
  constructor(protected readonly service: JournalEntryService) {}

  async _journalEntriesMeta(
    @graphql.Args() args: JournalEntryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [JournalEntry])
  async journalEntries(
    @graphql.Args() args: JournalEntryFindManyArgs
  ): Promise<JournalEntry[]> {
    return this.service.journalEntries(args);
  }

  @graphql.Query(() => JournalEntry, { nullable: true })
  async journalEntry(
    @graphql.Args() args: JournalEntryFindUniqueArgs
  ): Promise<JournalEntry | null> {
    const result = await this.service.journalEntry(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => JournalEntry)
  async createJournalEntry(
    @graphql.Args() args: CreateJournalEntryArgs
  ): Promise<JournalEntry> {
    return await this.service.createJournalEntry({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => JournalEntry)
  async updateJournalEntry(
    @graphql.Args() args: UpdateJournalEntryArgs
  ): Promise<JournalEntry | null> {
    try {
      return await this.service.updateJournalEntry({
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

  @graphql.Mutation(() => JournalEntry)
  async deleteJournalEntry(
    @graphql.Args() args: DeleteJournalEntryArgs
  ): Promise<JournalEntry | null> {
    try {
      return await this.service.deleteJournalEntry(args);
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