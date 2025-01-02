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
  AssetMaintenance as PrismaAssetMaintenance,
} from "@prisma/client";

export class AssetMaintenanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AssetMaintenanceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.assetMaintenance.count(args);
  }

  async assetMaintenances(
    args: Prisma.AssetMaintenanceFindManyArgs
  ): Promise<PrismaAssetMaintenance[]> {
    return this.prisma.assetMaintenance.findMany(args);
  }
  async assetMaintenance(
    args: Prisma.AssetMaintenanceFindUniqueArgs
  ): Promise<PrismaAssetMaintenance | null> {
    return this.prisma.assetMaintenance.findUnique(args);
  }
  async createAssetMaintenance(
    args: Prisma.AssetMaintenanceCreateArgs
  ): Promise<PrismaAssetMaintenance> {
    return this.prisma.assetMaintenance.create(args);
  }
  async updateAssetMaintenance(
    args: Prisma.AssetMaintenanceUpdateArgs
  ): Promise<PrismaAssetMaintenance> {
    return this.prisma.assetMaintenance.update(args);
  }
  async deleteAssetMaintenance(
    args: Prisma.AssetMaintenanceDeleteArgs
  ): Promise<PrismaAssetMaintenance> {
    return this.prisma.assetMaintenance.delete(args);
  }
}