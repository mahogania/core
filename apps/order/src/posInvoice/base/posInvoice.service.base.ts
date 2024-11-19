/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PosInvoice as PrismaPosInvoice } from "@prisma/client";

export class PosInvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PosInvoiceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.posInvoice.count(args);
  }

  async posInvoices(
    args: Prisma.PosInvoiceFindManyArgs
  ): Promise<PrismaPosInvoice[]> {
    return this.prisma.posInvoice.findMany(args);
  }
  async posInvoice(
    args: Prisma.PosInvoiceFindUniqueArgs
  ): Promise<PrismaPosInvoice | null> {
    return this.prisma.posInvoice.findUnique(args);
  }
  async createPosInvoice(
    args: Prisma.PosInvoiceCreateArgs
  ): Promise<PrismaPosInvoice> {
    return this.prisma.posInvoice.create(args);
  }
  async updatePosInvoice(
    args: Prisma.PosInvoiceUpdateArgs
  ): Promise<PrismaPosInvoice> {
    return this.prisma.posInvoice.update(args);
  }
  async deletePosInvoice(
    args: Prisma.PosInvoiceDeleteArgs
  ): Promise<PrismaPosInvoice> {
    return this.prisma.posInvoice.delete(args);
  }
}