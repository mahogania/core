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
  DiscountedInvoice as PrismaDiscountedInvoice,
} from "@prisma/client";

export class DiscountedInvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DiscountedInvoiceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.discountedInvoice.count(args);
  }

  async discountedInvoices(
    args: Prisma.DiscountedInvoiceFindManyArgs
  ): Promise<PrismaDiscountedInvoice[]> {
    return this.prisma.discountedInvoice.findMany(args);
  }
  async discountedInvoice(
    args: Prisma.DiscountedInvoiceFindUniqueArgs
  ): Promise<PrismaDiscountedInvoice | null> {
    return this.prisma.discountedInvoice.findUnique(args);
  }
  async createDiscountedInvoice(
    args: Prisma.DiscountedInvoiceCreateArgs
  ): Promise<PrismaDiscountedInvoice> {
    return this.prisma.discountedInvoice.create(args);
  }
  async updateDiscountedInvoice(
    args: Prisma.DiscountedInvoiceUpdateArgs
  ): Promise<PrismaDiscountedInvoice> {
    return this.prisma.discountedInvoice.update(args);
  }
  async deleteDiscountedInvoice(
    args: Prisma.DiscountedInvoiceDeleteArgs
  ): Promise<PrismaDiscountedInvoice> {
    return this.prisma.discountedInvoice.delete(args);
  }
}