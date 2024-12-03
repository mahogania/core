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
  SerialAndBatchBundle as PrismaSerialAndBatchBundle,
} from "@prisma/client";

export class SerialAndBatchBundleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SerialAndBatchBundleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.serialAndBatchBundle.count(args);
  }

  async serialAndBatchBundles(
    args: Prisma.SerialAndBatchBundleFindManyArgs
  ): Promise<PrismaSerialAndBatchBundle[]> {
    return this.prisma.serialAndBatchBundle.findMany(args);
  }
  async serialAndBatchBundle(
    args: Prisma.SerialAndBatchBundleFindUniqueArgs
  ): Promise<PrismaSerialAndBatchBundle | null> {
    return this.prisma.serialAndBatchBundle.findUnique(args);
  }
  async createSerialAndBatchBundle(
    args: Prisma.SerialAndBatchBundleCreateArgs
  ): Promise<PrismaSerialAndBatchBundle> {
    return this.prisma.serialAndBatchBundle.create(args);
  }
  async updateSerialAndBatchBundle(
    args: Prisma.SerialAndBatchBundleUpdateArgs
  ): Promise<PrismaSerialAndBatchBundle> {
    return this.prisma.serialAndBatchBundle.update(args);
  }
  async deleteSerialAndBatchBundle(
    args: Prisma.SerialAndBatchBundleDeleteArgs
  ): Promise<PrismaSerialAndBatchBundle> {
    return this.prisma.serialAndBatchBundle.delete(args);
  }
}
