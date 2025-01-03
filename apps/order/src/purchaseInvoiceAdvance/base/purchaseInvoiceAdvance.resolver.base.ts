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
import { PurchaseInvoiceAdvance } from "./PurchaseInvoiceAdvance";
import { PurchaseInvoiceAdvanceCountArgs } from "./PurchaseInvoiceAdvanceCountArgs";
import { PurchaseInvoiceAdvanceFindManyArgs } from "./PurchaseInvoiceAdvanceFindManyArgs";
import { PurchaseInvoiceAdvanceFindUniqueArgs } from "./PurchaseInvoiceAdvanceFindUniqueArgs";
import { CreatePurchaseInvoiceAdvanceArgs } from "./CreatePurchaseInvoiceAdvanceArgs";
import { UpdatePurchaseInvoiceAdvanceArgs } from "./UpdatePurchaseInvoiceAdvanceArgs";
import { DeletePurchaseInvoiceAdvanceArgs } from "./DeletePurchaseInvoiceAdvanceArgs";
import { PurchaseInvoiceAdvanceService } from "../purchaseInvoiceAdvance.service";
@graphql.Resolver(() => PurchaseInvoiceAdvance)
export class PurchaseInvoiceAdvanceResolverBase {
  constructor(protected readonly service: PurchaseInvoiceAdvanceService) {}

  async _purchaseInvoiceAdvancesMeta(
    @graphql.Args() args: PurchaseInvoiceAdvanceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PurchaseInvoiceAdvance])
  async purchaseInvoiceAdvances(
    @graphql.Args() args: PurchaseInvoiceAdvanceFindManyArgs
  ): Promise<PurchaseInvoiceAdvance[]> {
    return this.service.purchaseInvoiceAdvances(args);
  }

  @graphql.Query(() => PurchaseInvoiceAdvance, { nullable: true })
  async purchaseInvoiceAdvance(
    @graphql.Args() args: PurchaseInvoiceAdvanceFindUniqueArgs
  ): Promise<PurchaseInvoiceAdvance | null> {
    const result = await this.service.purchaseInvoiceAdvance(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PurchaseInvoiceAdvance)
  async createPurchaseInvoiceAdvance(
    @graphql.Args() args: CreatePurchaseInvoiceAdvanceArgs
  ): Promise<PurchaseInvoiceAdvance> {
    return await this.service.createPurchaseInvoiceAdvance({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PurchaseInvoiceAdvance)
  async updatePurchaseInvoiceAdvance(
    @graphql.Args() args: UpdatePurchaseInvoiceAdvanceArgs
  ): Promise<PurchaseInvoiceAdvance | null> {
    try {
      return await this.service.updatePurchaseInvoiceAdvance({
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

  @graphql.Mutation(() => PurchaseInvoiceAdvance)
  async deletePurchaseInvoiceAdvance(
    @graphql.Args() args: DeletePurchaseInvoiceAdvanceArgs
  ): Promise<PurchaseInvoiceAdvance | null> {
    try {
      return await this.service.deletePurchaseInvoiceAdvance(args);
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
