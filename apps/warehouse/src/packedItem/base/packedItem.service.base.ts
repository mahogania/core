/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PackedItem as PrismaPackedItem } from "@prisma/client";

export class PackedItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PackedItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.packedItem.count(args);
  }

  async packedItems(
    args: Prisma.PackedItemFindManyArgs
  ): Promise<PrismaPackedItem[]> {
    return this.prisma.packedItem.findMany(args);
  }
  async packedItem(
    args: Prisma.PackedItemFindUniqueArgs
  ): Promise<PrismaPackedItem | null> {
    return this.prisma.packedItem.findUnique(args);
  }
  async createPackedItem(
    args: Prisma.PackedItemCreateArgs
  ): Promise<PrismaPackedItem> {
    return this.prisma.packedItem.create(args);
  }
  async updatePackedItem(
    args: Prisma.PackedItemUpdateArgs
  ): Promise<PrismaPackedItem> {
    return this.prisma.packedItem.update(args);
  }
  async deletePackedItem(
    args: Prisma.PackedItemDeleteArgs
  ): Promise<PrismaPackedItem> {
    return this.prisma.packedItem.delete(args);
  }
}
