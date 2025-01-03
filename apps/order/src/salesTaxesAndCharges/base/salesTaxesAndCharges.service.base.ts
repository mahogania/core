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
  SalesTaxesAndCharges as PrismaSalesTaxesAndCharges,
} from "@prisma/client";

export class SalesTaxesAndChargesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SalesTaxesAndChargesCountArgs, "select">
  ): Promise<number> {
    return this.prisma.salesTaxesAndCharges.count(args);
  }

  async salesTaxesAndChargesItems(
    args: Prisma.SalesTaxesAndChargesFindManyArgs
  ): Promise<PrismaSalesTaxesAndCharges[]> {
    return this.prisma.salesTaxesAndCharges.findMany(args);
  }
  async salesTaxesAndCharges(
    args: Prisma.SalesTaxesAndChargesFindUniqueArgs
  ): Promise<PrismaSalesTaxesAndCharges | null> {
    return this.prisma.salesTaxesAndCharges.findUnique(args);
  }
  async createSalesTaxesAndCharges(
    args: Prisma.SalesTaxesAndChargesCreateArgs
  ): Promise<PrismaSalesTaxesAndCharges> {
    return this.prisma.salesTaxesAndCharges.create(args);
  }
  async updateSalesTaxesAndCharges(
    args: Prisma.SalesTaxesAndChargesUpdateArgs
  ): Promise<PrismaSalesTaxesAndCharges> {
    return this.prisma.salesTaxesAndCharges.update(args);
  }
  async deleteSalesTaxesAndCharges(
    args: Prisma.SalesTaxesAndChargesDeleteArgs
  ): Promise<PrismaSalesTaxesAndCharges> {
    return this.prisma.salesTaxesAndCharges.delete(args);
  }
}
