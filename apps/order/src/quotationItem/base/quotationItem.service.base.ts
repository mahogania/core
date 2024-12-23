/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, QuotationItem as PrismaQuotationItem } from "@prisma/client";

export class QuotationItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QuotationItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.quotationItem.count(args);
  }

  async quotationItems(
    args: Prisma.QuotationItemFindManyArgs
  ): Promise<PrismaQuotationItem[]> {
    return this.prisma.quotationItem.findMany(args);
  }
  async quotationItem(
    args: Prisma.QuotationItemFindUniqueArgs
  ): Promise<PrismaQuotationItem | null> {
    return this.prisma.quotationItem.findUnique(args);
  }
  async createQuotationItem(
    args: Prisma.QuotationItemCreateArgs
  ): Promise<PrismaQuotationItem> {
    return this.prisma.quotationItem.create(args);
  }
  async updateQuotationItem(
    args: Prisma.QuotationItemUpdateArgs
  ): Promise<PrismaQuotationItem> {
    return this.prisma.quotationItem.update(args);
  }
  async deleteQuotationItem(
    args: Prisma.QuotationItemDeleteArgs
  ): Promise<PrismaQuotationItem> {
    return this.prisma.quotationItem.delete(args);
  }
}
