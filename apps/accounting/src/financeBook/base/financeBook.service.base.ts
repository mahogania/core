/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, FinanceBook as PrismaFinanceBook } from "@prisma/client";

export class FinanceBookServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FinanceBookCountArgs, "select">
  ): Promise<number> {
    return this.prisma.financeBook.count(args);
  }

  async financeBooks(
    args: Prisma.FinanceBookFindManyArgs
  ): Promise<PrismaFinanceBook[]> {
    return this.prisma.financeBook.findMany(args);
  }
  async financeBook(
    args: Prisma.FinanceBookFindUniqueArgs
  ): Promise<PrismaFinanceBook | null> {
    return this.prisma.financeBook.findUnique(args);
  }
  async createFinanceBook(
    args: Prisma.FinanceBookCreateArgs
  ): Promise<PrismaFinanceBook> {
    return this.prisma.financeBook.create(args);
  }
  async updateFinanceBook(
    args: Prisma.FinanceBookUpdateArgs
  ): Promise<PrismaFinanceBook> {
    return this.prisma.financeBook.update(args);
  }
  async deleteFinanceBook(
    args: Prisma.FinanceBookDeleteArgs
  ): Promise<PrismaFinanceBook> {
    return this.prisma.financeBook.delete(args);
  }
}
