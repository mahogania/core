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
import { SubscriptionInvoice } from "./SubscriptionInvoice";
import { SubscriptionInvoiceCountArgs } from "./SubscriptionInvoiceCountArgs";
import { SubscriptionInvoiceFindManyArgs } from "./SubscriptionInvoiceFindManyArgs";
import { SubscriptionInvoiceFindUniqueArgs } from "./SubscriptionInvoiceFindUniqueArgs";
import { DeleteSubscriptionInvoiceArgs } from "./DeleteSubscriptionInvoiceArgs";
import { SubscriptionInvoiceService } from "../subscriptionInvoice.service";
@graphql.Resolver(() => SubscriptionInvoice)
export class SubscriptionInvoiceResolverBase {
  constructor(protected readonly service: SubscriptionInvoiceService) {}

  async _subscriptionInvoicesMeta(
    @graphql.Args() args: SubscriptionInvoiceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SubscriptionInvoice])
  async subscriptionInvoices(
    @graphql.Args() args: SubscriptionInvoiceFindManyArgs
  ): Promise<SubscriptionInvoice[]> {
    return this.service.subscriptionInvoices(args);
  }

  @graphql.Query(() => SubscriptionInvoice, { nullable: true })
  async subscriptionInvoice(
    @graphql.Args() args: SubscriptionInvoiceFindUniqueArgs
  ): Promise<SubscriptionInvoice | null> {
    const result = await this.service.subscriptionInvoice(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SubscriptionInvoice)
  async deleteSubscriptionInvoice(
    @graphql.Args() args: DeleteSubscriptionInvoiceArgs
  ): Promise<SubscriptionInvoice | null> {
    try {
      return await this.service.deleteSubscriptionInvoice(args);
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
