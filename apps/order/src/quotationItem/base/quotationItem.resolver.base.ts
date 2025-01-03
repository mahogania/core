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
import { QuotationItem } from "./QuotationItem";
import { QuotationItemCountArgs } from "./QuotationItemCountArgs";
import { QuotationItemFindManyArgs } from "./QuotationItemFindManyArgs";
import { QuotationItemFindUniqueArgs } from "./QuotationItemFindUniqueArgs";
import { CreateQuotationItemArgs } from "./CreateQuotationItemArgs";
import { UpdateQuotationItemArgs } from "./UpdateQuotationItemArgs";
import { DeleteQuotationItemArgs } from "./DeleteQuotationItemArgs";
import { QuotationItemService } from "../quotationItem.service";
@graphql.Resolver(() => QuotationItem)
export class QuotationItemResolverBase {
  constructor(protected readonly service: QuotationItemService) {}

  async _quotationItemsMeta(
    @graphql.Args() args: QuotationItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [QuotationItem])
  async quotationItems(
    @graphql.Args() args: QuotationItemFindManyArgs
  ): Promise<QuotationItem[]> {
    return this.service.quotationItems(args);
  }

  @graphql.Query(() => QuotationItem, { nullable: true })
  async quotationItem(
    @graphql.Args() args: QuotationItemFindUniqueArgs
  ): Promise<QuotationItem | null> {
    const result = await this.service.quotationItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => QuotationItem)
  async createQuotationItem(
    @graphql.Args() args: CreateQuotationItemArgs
  ): Promise<QuotationItem> {
    return await this.service.createQuotationItem({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => QuotationItem)
  async updateQuotationItem(
    @graphql.Args() args: UpdateQuotationItemArgs
  ): Promise<QuotationItem | null> {
    try {
      return await this.service.updateQuotationItem({
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

  @graphql.Mutation(() => QuotationItem)
  async deleteQuotationItem(
    @graphql.Args() args: DeleteQuotationItemArgs
  ): Promise<QuotationItem | null> {
    try {
      return await this.service.deleteQuotationItem(args);
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
