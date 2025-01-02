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
import { LedgerMerge } from "./LedgerMerge";
import { LedgerMergeCountArgs } from "./LedgerMergeCountArgs";
import { LedgerMergeFindManyArgs } from "./LedgerMergeFindManyArgs";
import { LedgerMergeFindUniqueArgs } from "./LedgerMergeFindUniqueArgs";
import { CreateLedgerMergeArgs } from "./CreateLedgerMergeArgs";
import { UpdateLedgerMergeArgs } from "./UpdateLedgerMergeArgs";
import { DeleteLedgerMergeArgs } from "./DeleteLedgerMergeArgs";
import { LedgerMergeService } from "../ledgerMerge.service";
@graphql.Resolver(() => LedgerMerge)
export class LedgerMergeResolverBase {
  constructor(protected readonly service: LedgerMergeService) {}

  async _ledgerMergesMeta(
    @graphql.Args() args: LedgerMergeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LedgerMerge])
  async ledgerMerges(
    @graphql.Args() args: LedgerMergeFindManyArgs
  ): Promise<LedgerMerge[]> {
    return this.service.ledgerMerges(args);
  }

  @graphql.Query(() => LedgerMerge, { nullable: true })
  async ledgerMerge(
    @graphql.Args() args: LedgerMergeFindUniqueArgs
  ): Promise<LedgerMerge | null> {
    const result = await this.service.ledgerMerge(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LedgerMerge)
  async createLedgerMerge(
    @graphql.Args() args: CreateLedgerMergeArgs
  ): Promise<LedgerMerge> {
    return await this.service.createLedgerMerge({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => LedgerMerge)
  async updateLedgerMerge(
    @graphql.Args() args: UpdateLedgerMergeArgs
  ): Promise<LedgerMerge | null> {
    try {
      return await this.service.updateLedgerMerge({
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

  @graphql.Mutation(() => LedgerMerge)
  async deleteLedgerMerge(
    @graphql.Args() args: DeleteLedgerMergeArgs
  ): Promise<LedgerMerge | null> {
    try {
      return await this.service.deleteLedgerMerge(args);
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