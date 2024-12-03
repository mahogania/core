/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, LedgerMerge as PrismaLedgerMerge } from "@prisma/client";

export class LedgerMergeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LedgerMergeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.ledgerMerge.count(args);
  }

  async ledgerMerges(
    args: Prisma.LedgerMergeFindManyArgs
  ): Promise<PrismaLedgerMerge[]> {
    return this.prisma.ledgerMerge.findMany(args);
  }
  async ledgerMerge(
    args: Prisma.LedgerMergeFindUniqueArgs
  ): Promise<PrismaLedgerMerge | null> {
    return this.prisma.ledgerMerge.findUnique(args);
  }
  async createLedgerMerge(
    args: Prisma.LedgerMergeCreateArgs
  ): Promise<PrismaLedgerMerge> {
    return this.prisma.ledgerMerge.create(args);
  }
  async updateLedgerMerge(
    args: Prisma.LedgerMergeUpdateArgs
  ): Promise<PrismaLedgerMerge> {
    return this.prisma.ledgerMerge.update(args);
  }
  async deleteLedgerMerge(
    args: Prisma.LedgerMergeDeleteArgs
  ): Promise<PrismaLedgerMerge> {
    return this.prisma.ledgerMerge.delete(args);
  }
}
