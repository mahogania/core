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
  PurchaseInvoiceAdvance as PrismaPurchaseInvoiceAdvance,
} from "@prisma/client";

export class PurchaseInvoiceAdvanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PurchaseInvoiceAdvanceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.purchaseInvoiceAdvance.count(args);
  }

  async purchaseInvoiceAdvances(
    args: Prisma.PurchaseInvoiceAdvanceFindManyArgs
  ): Promise<PrismaPurchaseInvoiceAdvance[]> {
    return this.prisma.purchaseInvoiceAdvance.findMany(args);
  }
  async purchaseInvoiceAdvance(
    args: Prisma.PurchaseInvoiceAdvanceFindUniqueArgs
  ): Promise<PrismaPurchaseInvoiceAdvance | null> {
    return this.prisma.purchaseInvoiceAdvance.findUnique(args);
  }
  async createPurchaseInvoiceAdvance(
    args: Prisma.PurchaseInvoiceAdvanceCreateArgs
  ): Promise<PrismaPurchaseInvoiceAdvance> {
    return this.prisma.purchaseInvoiceAdvance.create(args);
  }
  async updatePurchaseInvoiceAdvance(
    args: Prisma.PurchaseInvoiceAdvanceUpdateArgs
  ): Promise<PrismaPurchaseInvoiceAdvance> {
    return this.prisma.purchaseInvoiceAdvance.update(args);
  }
  async deletePurchaseInvoiceAdvance(
    args: Prisma.PurchaseInvoiceAdvanceDeleteArgs
  ): Promise<PrismaPurchaseInvoiceAdvance> {
    return this.prisma.purchaseInvoiceAdvance.delete(args);
  }
}