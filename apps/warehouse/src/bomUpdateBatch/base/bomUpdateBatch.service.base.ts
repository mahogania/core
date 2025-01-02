/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, BomUpdateBatch as PrismaBomUpdateBatch } from "@prisma/client";

export class BomUpdateBatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BomUpdateBatchCountArgs, "select">
  ): Promise<number> {
    return this.prisma.bomUpdateBatch.count(args);
  }

  async bomUpdateBatches(
    args: Prisma.BomUpdateBatchFindManyArgs
  ): Promise<PrismaBomUpdateBatch[]> {
    return this.prisma.bomUpdateBatch.findMany(args);
  }
  async bomUpdateBatch(
    args: Prisma.BomUpdateBatchFindUniqueArgs
  ): Promise<PrismaBomUpdateBatch | null> {
    return this.prisma.bomUpdateBatch.findUnique(args);
  }
  async createBomUpdateBatch(
    args: Prisma.BomUpdateBatchCreateArgs
  ): Promise<PrismaBomUpdateBatch> {
    return this.prisma.bomUpdateBatch.create(args);
  }
  async updateBomUpdateBatch(
    args: Prisma.BomUpdateBatchUpdateArgs
  ): Promise<PrismaBomUpdateBatch> {
    return this.prisma.bomUpdateBatch.update(args);
  }
  async deleteBomUpdateBatch(
    args: Prisma.BomUpdateBatchDeleteArgs
  ): Promise<PrismaBomUpdateBatch> {
    return this.prisma.bomUpdateBatch.delete(args);
  }
}