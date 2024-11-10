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
  Currency as PrismaCurrency,
  Discount as PrismaDiscount,
  Price as PrismaPrice,
} from "@prisma/client";

export class CurrencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CurrencyCountArgs, "select">): Promise<number> {
    return this.prisma.currency.count(args);
  }

  async currencies(
    args: Prisma.CurrencyFindManyArgs
  ): Promise<PrismaCurrency[]> {
    return this.prisma.currency.findMany(args);
  }
  async currency(
    args: Prisma.CurrencyFindUniqueArgs
  ): Promise<PrismaCurrency | null> {
    return this.prisma.currency.findUnique(args);
  }
  async createCurrency(
    args: Prisma.CurrencyCreateArgs
  ): Promise<PrismaCurrency> {
    return this.prisma.currency.create(args);
  }
  async updateCurrency(
    args: Prisma.CurrencyUpdateArgs
  ): Promise<PrismaCurrency> {
    return this.prisma.currency.update(args);
  }
  async deleteCurrency(
    args: Prisma.CurrencyDeleteArgs
  ): Promise<PrismaCurrency> {
    return this.prisma.currency.delete(args);
  }

  async findDiscounts(
    parentId: string,
    args: Prisma.DiscountFindManyArgs
  ): Promise<PrismaDiscount[]> {
    return this.prisma.currency
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .discounts(args);
  }

  async findPrices(
    parentId: string,
    args: Prisma.PriceFindManyArgs
  ): Promise<PrismaPrice[]> {
    return this.prisma.currency
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .prices(args);
  }
}