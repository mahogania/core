/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PosInvoiceItem as PrismaPosInvoiceItem } from "@prisma/client";

export class PosInvoiceItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PosInvoiceItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.posInvoiceItem.count(args);
  }

  async posInvoiceItems(
    args: Prisma.PosInvoiceItemFindManyArgs
  ): Promise<PrismaPosInvoiceItem[]> {
    return this.prisma.posInvoiceItem.findMany(args);
  }
  async posInvoiceItem(
    args: Prisma.PosInvoiceItemFindUniqueArgs
  ): Promise<PrismaPosInvoiceItem | null> {
    return this.prisma.posInvoiceItem.findUnique(args);
  }
  async createPosInvoiceItem(
    args: Prisma.PosInvoiceItemCreateArgs
  ): Promise<PrismaPosInvoiceItem> {
    return this.prisma.posInvoiceItem.create(args);
  }
  async updatePosInvoiceItem(
    args: Prisma.PosInvoiceItemUpdateArgs
  ): Promise<PrismaPosInvoiceItem> {
    return this.prisma.posInvoiceItem.update(args);
  }
  async deletePosInvoiceItem(
    args: Prisma.PosInvoiceItemDeleteArgs
  ): Promise<PrismaPosInvoiceItem> {
    return this.prisma.posInvoiceItem.delete(args);
  }
}