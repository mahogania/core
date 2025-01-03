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
  StockLedgerEntry as PrismaStockLedgerEntry,
} from "@prisma/client";

export class StockLedgerEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.StockLedgerEntryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.stockLedgerEntry.count(args);
  }

  async stockLedgerEntries(
    args: Prisma.StockLedgerEntryFindManyArgs
  ): Promise<PrismaStockLedgerEntry[]> {
    return this.prisma.stockLedgerEntry.findMany(args);
  }
  async stockLedgerEntry(
    args: Prisma.StockLedgerEntryFindUniqueArgs
  ): Promise<PrismaStockLedgerEntry | null> {
    return this.prisma.stockLedgerEntry.findUnique(args);
  }
  async createStockLedgerEntry(
    args: Prisma.StockLedgerEntryCreateArgs
  ): Promise<PrismaStockLedgerEntry> {
    return this.prisma.stockLedgerEntry.create(args);
  }
  async updateStockLedgerEntry(
    args: Prisma.StockLedgerEntryUpdateArgs
  ): Promise<PrismaStockLedgerEntry> {
    return this.prisma.stockLedgerEntry.update(args);
  }
  async deleteStockLedgerEntry(
    args: Prisma.StockLedgerEntryDeleteArgs
  ): Promise<PrismaStockLedgerEntry> {
    return this.prisma.stockLedgerEntry.delete(args);
  }
}
