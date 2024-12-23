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
  PosOpeningEntry as PrismaPosOpeningEntry,
} from "@prisma/client";

export class PosOpeningEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PosOpeningEntryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.posOpeningEntry.count(args);
  }

  async posOpeningEntries(
    args: Prisma.PosOpeningEntryFindManyArgs
  ): Promise<PrismaPosOpeningEntry[]> {
    return this.prisma.posOpeningEntry.findMany(args);
  }
  async posOpeningEntry(
    args: Prisma.PosOpeningEntryFindUniqueArgs
  ): Promise<PrismaPosOpeningEntry | null> {
    return this.prisma.posOpeningEntry.findUnique(args);
  }
  async createPosOpeningEntry(
    args: Prisma.PosOpeningEntryCreateArgs
  ): Promise<PrismaPosOpeningEntry> {
    return this.prisma.posOpeningEntry.create(args);
  }
  async updatePosOpeningEntry(
    args: Prisma.PosOpeningEntryUpdateArgs
  ): Promise<PrismaPosOpeningEntry> {
    return this.prisma.posOpeningEntry.update(args);
  }
  async deletePosOpeningEntry(
    args: Prisma.PosOpeningEntryDeleteArgs
  ): Promise<PrismaPosOpeningEntry> {
    return this.prisma.posOpeningEntry.delete(args);
  }
}
