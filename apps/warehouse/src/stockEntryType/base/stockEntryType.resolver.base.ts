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
import { StockEntryType } from "./StockEntryType";
import { StockEntryTypeCountArgs } from "./StockEntryTypeCountArgs";
import { StockEntryTypeFindManyArgs } from "./StockEntryTypeFindManyArgs";
import { StockEntryTypeFindUniqueArgs } from "./StockEntryTypeFindUniqueArgs";
import { CreateStockEntryTypeArgs } from "./CreateStockEntryTypeArgs";
import { UpdateStockEntryTypeArgs } from "./UpdateStockEntryTypeArgs";
import { DeleteStockEntryTypeArgs } from "./DeleteStockEntryTypeArgs";
import { StockEntryTypeService } from "../stockEntryType.service";
@graphql.Resolver(() => StockEntryType)
export class StockEntryTypeResolverBase {
  constructor(protected readonly service: StockEntryTypeService) {}

  async _stockEntryTypesMeta(
    @graphql.Args() args: StockEntryTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [StockEntryType])
  async stockEntryTypes(
    @graphql.Args() args: StockEntryTypeFindManyArgs
  ): Promise<StockEntryType[]> {
    return this.service.stockEntryTypes(args);
  }

  @graphql.Query(() => StockEntryType, { nullable: true })
  async stockEntryType(
    @graphql.Args() args: StockEntryTypeFindUniqueArgs
  ): Promise<StockEntryType | null> {
    const result = await this.service.stockEntryType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => StockEntryType)
  async createStockEntryType(
    @graphql.Args() args: CreateStockEntryTypeArgs
  ): Promise<StockEntryType> {
    return await this.service.createStockEntryType({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => StockEntryType)
  async updateStockEntryType(
    @graphql.Args() args: UpdateStockEntryTypeArgs
  ): Promise<StockEntryType | null> {
    try {
      return await this.service.updateStockEntryType({
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

  @graphql.Mutation(() => StockEntryType)
  async deleteStockEntryType(
    @graphql.Args() args: DeleteStockEntryTypeArgs
  ): Promise<StockEntryType | null> {
    try {
      return await this.service.deleteStockEntryType(args);
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