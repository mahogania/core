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
import { SalesInvoiceItem } from "./SalesInvoiceItem";
import { SalesInvoiceItemCountArgs } from "./SalesInvoiceItemCountArgs";
import { SalesInvoiceItemFindManyArgs } from "./SalesInvoiceItemFindManyArgs";
import { SalesInvoiceItemFindUniqueArgs } from "./SalesInvoiceItemFindUniqueArgs";
import { CreateSalesInvoiceItemArgs } from "./CreateSalesInvoiceItemArgs";
import { UpdateSalesInvoiceItemArgs } from "./UpdateSalesInvoiceItemArgs";
import { DeleteSalesInvoiceItemArgs } from "./DeleteSalesInvoiceItemArgs";
import { SalesInvoiceItemService } from "../salesInvoiceItem.service";
@graphql.Resolver(() => SalesInvoiceItem)
export class SalesInvoiceItemResolverBase {
  constructor(protected readonly service: SalesInvoiceItemService) {}

  async _salesInvoiceItemsMeta(
    @graphql.Args() args: SalesInvoiceItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SalesInvoiceItem])
  async salesInvoiceItems(
    @graphql.Args() args: SalesInvoiceItemFindManyArgs
  ): Promise<SalesInvoiceItem[]> {
    return this.service.salesInvoiceItems(args);
  }

  @graphql.Query(() => SalesInvoiceItem, { nullable: true })
  async salesInvoiceItem(
    @graphql.Args() args: SalesInvoiceItemFindUniqueArgs
  ): Promise<SalesInvoiceItem | null> {
    const result = await this.service.salesInvoiceItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SalesInvoiceItem)
  async createSalesInvoiceItem(
    @graphql.Args() args: CreateSalesInvoiceItemArgs
  ): Promise<SalesInvoiceItem> {
    return await this.service.createSalesInvoiceItem({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SalesInvoiceItem)
  async updateSalesInvoiceItem(
    @graphql.Args() args: UpdateSalesInvoiceItemArgs
  ): Promise<SalesInvoiceItem | null> {
    try {
      return await this.service.updateSalesInvoiceItem({
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

  @graphql.Mutation(() => SalesInvoiceItem)
  async deleteSalesInvoiceItem(
    @graphql.Args() args: DeleteSalesInvoiceItemArgs
  ): Promise<SalesInvoiceItem | null> {
    try {
      return await this.service.deleteSalesInvoiceItem(args);
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
