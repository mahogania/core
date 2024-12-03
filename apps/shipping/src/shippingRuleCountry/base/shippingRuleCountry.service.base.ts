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
  ShippingRuleCountry as PrismaShippingRuleCountry,
} from "@prisma/client";

export class ShippingRuleCountryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ShippingRuleCountryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.shippingRuleCountry.count(args);
  }

  async shippingRuleCountries(
    args: Prisma.ShippingRuleCountryFindManyArgs
  ): Promise<PrismaShippingRuleCountry[]> {
    return this.prisma.shippingRuleCountry.findMany(args);
  }
  async shippingRuleCountry(
    args: Prisma.ShippingRuleCountryFindUniqueArgs
  ): Promise<PrismaShippingRuleCountry | null> {
    return this.prisma.shippingRuleCountry.findUnique(args);
  }
  async createShippingRuleCountry(
    args: Prisma.ShippingRuleCountryCreateArgs
  ): Promise<PrismaShippingRuleCountry> {
    return this.prisma.shippingRuleCountry.create(args);
  }
  async updateShippingRuleCountry(
    args: Prisma.ShippingRuleCountryUpdateArgs
  ): Promise<PrismaShippingRuleCountry> {
    return this.prisma.shippingRuleCountry.update(args);
  }
  async deleteShippingRuleCountry(
    args: Prisma.ShippingRuleCountryDeleteArgs
  ): Promise<PrismaShippingRuleCountry> {
    return this.prisma.shippingRuleCountry.delete(args);
  }
}