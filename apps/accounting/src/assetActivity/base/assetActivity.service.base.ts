/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AssetActivity as PrismaAssetActivity } from "@prisma/client";

export class AssetActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AssetActivityCountArgs, "select">
  ): Promise<number> {
    return this.prisma.assetActivity.count(args);
  }

  async assetActivities(
    args: Prisma.AssetActivityFindManyArgs
  ): Promise<PrismaAssetActivity[]> {
    return this.prisma.assetActivity.findMany(args);
  }
  async assetActivity(
    args: Prisma.AssetActivityFindUniqueArgs
  ): Promise<PrismaAssetActivity | null> {
    return this.prisma.assetActivity.findUnique(args);
  }
  async createAssetActivity(
    args: Prisma.AssetActivityCreateArgs
  ): Promise<PrismaAssetActivity> {
    return this.prisma.assetActivity.create(args);
  }
  async updateAssetActivity(
    args: Prisma.AssetActivityUpdateArgs
  ): Promise<PrismaAssetActivity> {
    return this.prisma.assetActivity.update(args);
  }
  async deleteAssetActivity(
    args: Prisma.AssetActivityDeleteArgs
  ): Promise<PrismaAssetActivity> {
    return this.prisma.assetActivity.delete(args);
  }
}
