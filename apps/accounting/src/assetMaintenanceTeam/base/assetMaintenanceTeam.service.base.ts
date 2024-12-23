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
  AssetMaintenanceTeam as PrismaAssetMaintenanceTeam,
} from "@prisma/client";

export class AssetMaintenanceTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AssetMaintenanceTeamCountArgs, "select">
  ): Promise<number> {
    return this.prisma.assetMaintenanceTeam.count(args);
  }

  async assetMaintenanceTeams(
    args: Prisma.AssetMaintenanceTeamFindManyArgs
  ): Promise<PrismaAssetMaintenanceTeam[]> {
    return this.prisma.assetMaintenanceTeam.findMany(args);
  }
  async assetMaintenanceTeam(
    args: Prisma.AssetMaintenanceTeamFindUniqueArgs
  ): Promise<PrismaAssetMaintenanceTeam | null> {
    return this.prisma.assetMaintenanceTeam.findUnique(args);
  }
  async createAssetMaintenanceTeam(
    args: Prisma.AssetMaintenanceTeamCreateArgs
  ): Promise<PrismaAssetMaintenanceTeam> {
    return this.prisma.assetMaintenanceTeam.create(args);
  }
  async updateAssetMaintenanceTeam(
    args: Prisma.AssetMaintenanceTeamUpdateArgs
  ): Promise<PrismaAssetMaintenanceTeam> {
    return this.prisma.assetMaintenanceTeam.update(args);
  }
  async deleteAssetMaintenanceTeam(
    args: Prisma.AssetMaintenanceTeamDeleteArgs
  ): Promise<PrismaAssetMaintenanceTeam> {
    return this.prisma.assetMaintenanceTeam.delete(args);
  }
}
