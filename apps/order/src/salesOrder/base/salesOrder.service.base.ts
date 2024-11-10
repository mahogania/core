/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SalesOrder as PrismaSalesOrder } from "@prisma/client";

export class SalesOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SalesOrderCountArgs, "select">
  ): Promise<number> {
    return this.prisma.salesOrder.count(args);
  }

  async salesOrders(
    args: Prisma.SalesOrderFindManyArgs
  ): Promise<PrismaSalesOrder[]> {
    return this.prisma.salesOrder.findMany(args);
  }
  async salesOrder(
    args: Prisma.SalesOrderFindUniqueArgs
  ): Promise<PrismaSalesOrder | null> {
    return this.prisma.salesOrder.findUnique(args);
  }
  async createSalesOrder(
    args: Prisma.SalesOrderCreateArgs
  ): Promise<PrismaSalesOrder> {
    return this.prisma.salesOrder.create(args);
  }
  async updateSalesOrder(
    args: Prisma.SalesOrderUpdateArgs
  ): Promise<PrismaSalesOrder> {
    return this.prisma.salesOrder.update(args);
  }
  async deleteSalesOrder(
    args: Prisma.SalesOrderDeleteArgs
  ): Promise<PrismaSalesOrder> {
    return this.prisma.salesOrder.delete(args);
  }
}
