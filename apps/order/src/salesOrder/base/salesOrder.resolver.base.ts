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
import { SalesOrder } from "./SalesOrder";
import { SalesOrderCountArgs } from "./SalesOrderCountArgs";
import { SalesOrderFindManyArgs } from "./SalesOrderFindManyArgs";
import { SalesOrderFindUniqueArgs } from "./SalesOrderFindUniqueArgs";
import { CreateSalesOrderArgs } from "./CreateSalesOrderArgs";
import { UpdateSalesOrderArgs } from "./UpdateSalesOrderArgs";
import { DeleteSalesOrderArgs } from "./DeleteSalesOrderArgs";
import { SalesOrderService } from "../salesOrder.service";
@graphql.Resolver(() => SalesOrder)
export class SalesOrderResolverBase {
  constructor(protected readonly service: SalesOrderService) {}

  async _salesOrdersMeta(
    @graphql.Args() args: SalesOrderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SalesOrder])
  async salesOrders(
    @graphql.Args() args: SalesOrderFindManyArgs
  ): Promise<SalesOrder[]> {
    return this.service.salesOrders(args);
  }

  @graphql.Query(() => SalesOrder, { nullable: true })
  async salesOrder(
    @graphql.Args() args: SalesOrderFindUniqueArgs
  ): Promise<SalesOrder | null> {
    const result = await this.service.salesOrder(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SalesOrder)
  async createSalesOrder(
    @graphql.Args() args: CreateSalesOrderArgs
  ): Promise<SalesOrder> {
    return await this.service.createSalesOrder({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SalesOrder)
  async updateSalesOrder(
    @graphql.Args() args: UpdateSalesOrderArgs
  ): Promise<SalesOrder | null> {
    try {
      return await this.service.updateSalesOrder({
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

  @graphql.Mutation(() => SalesOrder)
  async deleteSalesOrder(
    @graphql.Args() args: DeleteSalesOrderArgs
  ): Promise<SalesOrder | null> {
    try {
      return await this.service.deleteSalesOrder(args);
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
