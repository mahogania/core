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
import { StockReservationEntry } from "./StockReservationEntry";
import { StockReservationEntryCountArgs } from "./StockReservationEntryCountArgs";
import { StockReservationEntryFindManyArgs } from "./StockReservationEntryFindManyArgs";
import { StockReservationEntryFindUniqueArgs } from "./StockReservationEntryFindUniqueArgs";
import { CreateStockReservationEntryArgs } from "./CreateStockReservationEntryArgs";
import { UpdateStockReservationEntryArgs } from "./UpdateStockReservationEntryArgs";
import { DeleteStockReservationEntryArgs } from "./DeleteStockReservationEntryArgs";
import { StockReservationEntryService } from "../stockReservationEntry.service";
@graphql.Resolver(() => StockReservationEntry)
export class StockReservationEntryResolverBase {
  constructor(protected readonly service: StockReservationEntryService) {}

  async _stockReservationEntriesMeta(
    @graphql.Args() args: StockReservationEntryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [StockReservationEntry])
  async stockReservationEntries(
    @graphql.Args() args: StockReservationEntryFindManyArgs
  ): Promise<StockReservationEntry[]> {
    return this.service.stockReservationEntries(args);
  }

  @graphql.Query(() => StockReservationEntry, { nullable: true })
  async stockReservationEntry(
    @graphql.Args() args: StockReservationEntryFindUniqueArgs
  ): Promise<StockReservationEntry | null> {
    const result = await this.service.stockReservationEntry(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => StockReservationEntry)
  async createStockReservationEntry(
    @graphql.Args() args: CreateStockReservationEntryArgs
  ): Promise<StockReservationEntry> {
    return await this.service.createStockReservationEntry({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => StockReservationEntry)
  async updateStockReservationEntry(
    @graphql.Args() args: UpdateStockReservationEntryArgs
  ): Promise<StockReservationEntry | null> {
    try {
      return await this.service.updateStockReservationEntry({
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

  @graphql.Mutation(() => StockReservationEntry)
  async deleteStockReservationEntry(
    @graphql.Args() args: DeleteStockReservationEntryArgs
  ): Promise<StockReservationEntry | null> {
    try {
      return await this.service.deleteStockReservationEntry(args);
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
