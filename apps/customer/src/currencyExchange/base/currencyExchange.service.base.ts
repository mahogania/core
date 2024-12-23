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
  CurrencyExchange as PrismaCurrencyExchange,
} from "@prisma/client";

export class CurrencyExchangeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CurrencyExchangeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.currencyExchange.count(args);
  }

  async currencyExchanges(
    args: Prisma.CurrencyExchangeFindManyArgs
  ): Promise<PrismaCurrencyExchange[]> {
    return this.prisma.currencyExchange.findMany(args);
  }
  async currencyExchange(
    args: Prisma.CurrencyExchangeFindUniqueArgs
  ): Promise<PrismaCurrencyExchange | null> {
    return this.prisma.currencyExchange.findUnique(args);
  }
  async createCurrencyExchange(
    args: Prisma.CurrencyExchangeCreateArgs
  ): Promise<PrismaCurrencyExchange> {
    return this.prisma.currencyExchange.create(args);
  }
  async updateCurrencyExchange(
    args: Prisma.CurrencyExchangeUpdateArgs
  ): Promise<PrismaCurrencyExchange> {
    return this.prisma.currencyExchange.update(args);
  }
  async deleteCurrencyExchange(
    args: Prisma.CurrencyExchangeDeleteArgs
  ): Promise<PrismaCurrencyExchange> {
    return this.prisma.currencyExchange.delete(args);
  }
}
