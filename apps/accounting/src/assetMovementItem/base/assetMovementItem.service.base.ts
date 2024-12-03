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
  AssetMovementItem as PrismaAssetMovementItem,
} from "@prisma/client";

export class AssetMovementItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AssetMovementItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.assetMovementItem.count(args);
  }

  async assetMovementItems(
    args: Prisma.AssetMovementItemFindManyArgs
  ): Promise<PrismaAssetMovementItem[]> {
    return this.prisma.assetMovementItem.findMany(args);
  }
  async assetMovementItem(
    args: Prisma.AssetMovementItemFindUniqueArgs
  ): Promise<PrismaAssetMovementItem | null> {
    return this.prisma.assetMovementItem.findUnique(args);
  }
  async createAssetMovementItem(
    args: Prisma.AssetMovementItemCreateArgs
  ): Promise<PrismaAssetMovementItem> {
    return this.prisma.assetMovementItem.create(args);
  }
  async updateAssetMovementItem(
    args: Prisma.AssetMovementItemUpdateArgs
  ): Promise<PrismaAssetMovementItem> {
    return this.prisma.assetMovementItem.update(args);
  }
  async deleteAssetMovementItem(
    args: Prisma.AssetMovementItemDeleteArgs
  ): Promise<PrismaAssetMovementItem> {
    return this.prisma.assetMovementItem.delete(args);
  }
}
