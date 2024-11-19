/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, LedgerHealth as PrismaLedgerHealth } from "@prisma/client";

export class LedgerHealthServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LedgerHealthCountArgs, "select">
  ): Promise<number> {
    return this.prisma.ledgerHealth.count(args);
  }

  async ledgerHealths(
    args: Prisma.LedgerHealthFindManyArgs
  ): Promise<PrismaLedgerHealth[]> {
    return this.prisma.ledgerHealth.findMany(args);
  }
  async ledgerHealth(
    args: Prisma.LedgerHealthFindUniqueArgs
  ): Promise<PrismaLedgerHealth | null> {
    return this.prisma.ledgerHealth.findUnique(args);
  }
  async createLedgerHealth(
    args: Prisma.LedgerHealthCreateArgs
  ): Promise<PrismaLedgerHealth> {
    return this.prisma.ledgerHealth.create(args);
  }
  async updateLedgerHealth(
    args: Prisma.LedgerHealthUpdateArgs
  ): Promise<PrismaLedgerHealth> {
    return this.prisma.ledgerHealth.update(args);
  }
  async deleteLedgerHealth(
    args: Prisma.LedgerHealthDeleteArgs
  ): Promise<PrismaLedgerHealth> {
    return this.prisma.ledgerHealth.delete(args);
  }
}