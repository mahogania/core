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
import { LedgerMergeAccounts } from "./LedgerMergeAccounts";
import { LedgerMergeAccountsCountArgs } from "./LedgerMergeAccountsCountArgs";
import { LedgerMergeAccountsFindManyArgs } from "./LedgerMergeAccountsFindManyArgs";
import { LedgerMergeAccountsFindUniqueArgs } from "./LedgerMergeAccountsFindUniqueArgs";
import { CreateLedgerMergeAccountsArgs } from "./CreateLedgerMergeAccountsArgs";
import { UpdateLedgerMergeAccountsArgs } from "./UpdateLedgerMergeAccountsArgs";
import { DeleteLedgerMergeAccountsArgs } from "./DeleteLedgerMergeAccountsArgs";
import { LedgerMergeAccountsService } from "../ledgerMergeAccounts.service";
@graphql.Resolver(() => LedgerMergeAccounts)
export class LedgerMergeAccountsResolverBase {
  constructor(protected readonly service: LedgerMergeAccountsService) {}

  async _ledgerMergeAccountsItemsMeta(
    @graphql.Args() args: LedgerMergeAccountsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LedgerMergeAccounts])
  async ledgerMergeAccountsItems(
    @graphql.Args() args: LedgerMergeAccountsFindManyArgs
  ): Promise<LedgerMergeAccounts[]> {
    return this.service.ledgerMergeAccountsItems(args);
  }

  @graphql.Query(() => LedgerMergeAccounts, { nullable: true })
  async ledgerMergeAccounts(
    @graphql.Args() args: LedgerMergeAccountsFindUniqueArgs
  ): Promise<LedgerMergeAccounts | null> {
    const result = await this.service.ledgerMergeAccounts(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LedgerMergeAccounts)
  async createLedgerMergeAccounts(
    @graphql.Args() args: CreateLedgerMergeAccountsArgs
  ): Promise<LedgerMergeAccounts> {
    return await this.service.createLedgerMergeAccounts({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => LedgerMergeAccounts)
  async updateLedgerMergeAccounts(
    @graphql.Args() args: UpdateLedgerMergeAccountsArgs
  ): Promise<LedgerMergeAccounts | null> {
    try {
      return await this.service.updateLedgerMergeAccounts({
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

  @graphql.Mutation(() => LedgerMergeAccounts)
  async deleteLedgerMergeAccounts(
    @graphql.Args() args: DeleteLedgerMergeAccountsArgs
  ): Promise<LedgerMergeAccounts | null> {
    try {
      return await this.service.deleteLedgerMergeAccounts(args);
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