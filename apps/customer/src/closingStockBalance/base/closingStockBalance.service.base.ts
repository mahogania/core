/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ClosingStockBalance as PrismaClosingStockBalance,
} from "@prisma/client";

export class ClosingStockBalanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ClosingStockBalanceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.closingStockBalance.count(args);
  }

  async closingStockBalances(
    args: Prisma.ClosingStockBalanceFindManyArgs
  ): Promise<PrismaClosingStockBalance[]> {
    return this.prisma.closingStockBalance.findMany(args);
  }
  async closingStockBalance(
    args: Prisma.ClosingStockBalanceFindUniqueArgs
  ): Promise<PrismaClosingStockBalance | null> {
    return this.prisma.closingStockBalance.findUnique(args);
  }
  async createClosingStockBalance(
    args: Prisma.ClosingStockBalanceCreateArgs
  ): Promise<PrismaClosingStockBalance> {
    return this.prisma.closingStockBalance.create(args);
  }
  async updateClosingStockBalance(
    args: Prisma.ClosingStockBalanceUpdateArgs
  ): Promise<PrismaClosingStockBalance> {
    return this.prisma.closingStockBalance.update(args);
  }
  async deleteClosingStockBalance(
    args: Prisma.ClosingStockBalanceDeleteArgs
  ): Promise<PrismaClosingStockBalance> {
    return this.prisma.closingStockBalance.delete(args);
  }
}