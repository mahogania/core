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
import { PurchaseOrder } from "./PurchaseOrder";
import { PurchaseOrderCountArgs } from "./PurchaseOrderCountArgs";
import { PurchaseOrderFindManyArgs } from "./PurchaseOrderFindManyArgs";
import { PurchaseOrderFindUniqueArgs } from "./PurchaseOrderFindUniqueArgs";
import { CreatePurchaseOrderArgs } from "./CreatePurchaseOrderArgs";
import { UpdatePurchaseOrderArgs } from "./UpdatePurchaseOrderArgs";
import { DeletePurchaseOrderArgs } from "./DeletePurchaseOrderArgs";
import { PurchaseOrderService } from "../purchaseOrder.service";
@graphql.Resolver(() => PurchaseOrder)
export class PurchaseOrderResolverBase {
  constructor(protected readonly service: PurchaseOrderService) {}

  async _purchaseOrdersMeta(
    @graphql.Args() args: PurchaseOrderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PurchaseOrder])
  async purchaseOrders(
    @graphql.Args() args: PurchaseOrderFindManyArgs
  ): Promise<PurchaseOrder[]> {
    return this.service.purchaseOrders(args);
  }

  @graphql.Query(() => PurchaseOrder, { nullable: true })
  async purchaseOrder(
    @graphql.Args() args: PurchaseOrderFindUniqueArgs
  ): Promise<PurchaseOrder | null> {
    const result = await this.service.purchaseOrder(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PurchaseOrder)
  async createPurchaseOrder(
    @graphql.Args() args: CreatePurchaseOrderArgs
  ): Promise<PurchaseOrder> {
    return await this.service.createPurchaseOrder({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PurchaseOrder)
  async updatePurchaseOrder(
    @graphql.Args() args: UpdatePurchaseOrderArgs
  ): Promise<PurchaseOrder | null> {
    try {
      return await this.service.updatePurchaseOrder({
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

  @graphql.Mutation(() => PurchaseOrder)
  async deletePurchaseOrder(
    @graphql.Args() args: DeletePurchaseOrderArgs
  ): Promise<PurchaseOrder | null> {
    try {
      return await this.service.deletePurchaseOrder(args);
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
