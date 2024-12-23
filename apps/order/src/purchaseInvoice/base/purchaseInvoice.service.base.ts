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
  PurchaseInvoice as PrismaPurchaseInvoice,
} from "@prisma/client";

export class PurchaseInvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PurchaseInvoiceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.purchaseInvoice.count(args);
  }

  async purchaseInvoices(
    args: Prisma.PurchaseInvoiceFindManyArgs
  ): Promise<PrismaPurchaseInvoice[]> {
    return this.prisma.purchaseInvoice.findMany(args);
  }
  async purchaseInvoice(
    args: Prisma.PurchaseInvoiceFindUniqueArgs
  ): Promise<PrismaPurchaseInvoice | null> {
    return this.prisma.purchaseInvoice.findUnique(args);
  }
  async createPurchaseInvoice(
    args: Prisma.PurchaseInvoiceCreateArgs
  ): Promise<PrismaPurchaseInvoice> {
    return this.prisma.purchaseInvoice.create(args);
  }
  async updatePurchaseInvoice(
    args: Prisma.PurchaseInvoiceUpdateArgs
  ): Promise<PrismaPurchaseInvoice> {
    return this.prisma.purchaseInvoice.update(args);
  }
  async deletePurchaseInvoice(
    args: Prisma.PurchaseInvoiceDeleteArgs
  ): Promise<PrismaPurchaseInvoice> {
    return this.prisma.purchaseInvoice.delete(args);
  }
}
