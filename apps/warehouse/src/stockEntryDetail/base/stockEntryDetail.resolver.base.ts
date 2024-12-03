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
import { StockEntryDetail } from "./StockEntryDetail";
import { StockEntryDetailCountArgs } from "./StockEntryDetailCountArgs";
import { StockEntryDetailFindManyArgs } from "./StockEntryDetailFindManyArgs";
import { StockEntryDetailFindUniqueArgs } from "./StockEntryDetailFindUniqueArgs";
import { CreateStockEntryDetailArgs } from "./CreateStockEntryDetailArgs";
import { UpdateStockEntryDetailArgs } from "./UpdateStockEntryDetailArgs";
import { DeleteStockEntryDetailArgs } from "./DeleteStockEntryDetailArgs";
import { StockEntryDetailService } from "../stockEntryDetail.service";
@graphql.Resolver(() => StockEntryDetail)
export class StockEntryDetailResolverBase {
  constructor(protected readonly service: StockEntryDetailService) {}

  async _stockEntryDetailsMeta(
    @graphql.Args() args: StockEntryDetailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [StockEntryDetail])
  async stockEntryDetails(
    @graphql.Args() args: StockEntryDetailFindManyArgs
  ): Promise<StockEntryDetail[]> {
    return this.service.stockEntryDetails(args);
  }

  @graphql.Query(() => StockEntryDetail, { nullable: true })
  async stockEntryDetail(
    @graphql.Args() args: StockEntryDetailFindUniqueArgs
  ): Promise<StockEntryDetail | null> {
    const result = await this.service.stockEntryDetail(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => StockEntryDetail)
  async createStockEntryDetail(
    @graphql.Args() args: CreateStockEntryDetailArgs
  ): Promise<StockEntryDetail> {
    return await this.service.createStockEntryDetail({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => StockEntryDetail)
  async updateStockEntryDetail(
    @graphql.Args() args: UpdateStockEntryDetailArgs
  ): Promise<StockEntryDetail | null> {
    try {
      return await this.service.updateStockEntryDetail({
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

  @graphql.Mutation(() => StockEntryDetail)
  async deleteStockEntryDetail(
    @graphql.Args() args: DeleteStockEntryDetailArgs
  ): Promise<StockEntryDetail | null> {
    try {
      return await this.service.deleteStockEntryDetail(args);
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