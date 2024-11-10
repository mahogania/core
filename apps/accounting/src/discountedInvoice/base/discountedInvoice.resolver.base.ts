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
import { DiscountedInvoice } from "./DiscountedInvoice";
import { DiscountedInvoiceCountArgs } from "./DiscountedInvoiceCountArgs";
import { DiscountedInvoiceFindManyArgs } from "./DiscountedInvoiceFindManyArgs";
import { DiscountedInvoiceFindUniqueArgs } from "./DiscountedInvoiceFindUniqueArgs";
import { CreateDiscountedInvoiceArgs } from "./CreateDiscountedInvoiceArgs";
import { UpdateDiscountedInvoiceArgs } from "./UpdateDiscountedInvoiceArgs";
import { DeleteDiscountedInvoiceArgs } from "./DeleteDiscountedInvoiceArgs";
import { DiscountedInvoiceService } from "../discountedInvoice.service";
@graphql.Resolver(() => DiscountedInvoice)
export class DiscountedInvoiceResolverBase {
  constructor(protected readonly service: DiscountedInvoiceService) {}

  async _discountedInvoicesMeta(
    @graphql.Args() args: DiscountedInvoiceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DiscountedInvoice])
  async discountedInvoices(
    @graphql.Args() args: DiscountedInvoiceFindManyArgs
  ): Promise<DiscountedInvoice[]> {
    return this.service.discountedInvoices(args);
  }

  @graphql.Query(() => DiscountedInvoice, { nullable: true })
  async discountedInvoice(
    @graphql.Args() args: DiscountedInvoiceFindUniqueArgs
  ): Promise<DiscountedInvoice | null> {
    const result = await this.service.discountedInvoice(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DiscountedInvoice)
  async createDiscountedInvoice(
    @graphql.Args() args: CreateDiscountedInvoiceArgs
  ): Promise<DiscountedInvoice> {
    return await this.service.createDiscountedInvoice({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DiscountedInvoice)
  async updateDiscountedInvoice(
    @graphql.Args() args: UpdateDiscountedInvoiceArgs
  ): Promise<DiscountedInvoice | null> {
    try {
      return await this.service.updateDiscountedInvoice({
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

  @graphql.Mutation(() => DiscountedInvoice)
  async deleteDiscountedInvoice(
    @graphql.Args() args: DeleteDiscountedInvoiceArgs
  ): Promise<DiscountedInvoice | null> {
    try {
      return await this.service.deleteDiscountedInvoice(args);
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
