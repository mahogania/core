/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AssetRepair as PrismaAssetRepair } from "@prisma/client";

export class AssetRepairServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AssetRepairCountArgs, "select">
  ): Promise<number> {
    return this.prisma.assetRepair.count(args);
  }

  async assetRepairs(
    args: Prisma.AssetRepairFindManyArgs
  ): Promise<PrismaAssetRepair[]> {
    return this.prisma.assetRepair.findMany(args);
  }
  async assetRepair(
    args: Prisma.AssetRepairFindUniqueArgs
  ): Promise<PrismaAssetRepair | null> {
    return this.prisma.assetRepair.findUnique(args);
  }
  async createAssetRepair(
    args: Prisma.AssetRepairCreateArgs
  ): Promise<PrismaAssetRepair> {
    return this.prisma.assetRepair.create(args);
  }
  async updateAssetRepair(
    args: Prisma.AssetRepairUpdateArgs
  ): Promise<PrismaAssetRepair> {
    return this.prisma.assetRepair.update(args);
  }
  async deleteAssetRepair(
    args: Prisma.AssetRepairDeleteArgs
  ): Promise<PrismaAssetRepair> {
    return this.prisma.assetRepair.delete(args);
  }
}
