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
  DashboardSettings as PrismaDashboardSettings,
} from "@prisma/client";

export class DashboardSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DashboardSettingsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dashboardSettings.count(args);
  }

  async dashboardSettingsItems(
    args: Prisma.DashboardSettingsFindManyArgs
  ): Promise<PrismaDashboardSettings[]> {
    return this.prisma.dashboardSettings.findMany(args);
  }
  async dashboardSettings(
    args: Prisma.DashboardSettingsFindUniqueArgs
  ): Promise<PrismaDashboardSettings | null> {
    return this.prisma.dashboardSettings.findUnique(args);
  }
  async createDashboardSettings(
    args: Prisma.DashboardSettingsCreateArgs
  ): Promise<PrismaDashboardSettings> {
    return this.prisma.dashboardSettings.create(args);
  }
  async updateDashboardSettings(
    args: Prisma.DashboardSettingsUpdateArgs
  ): Promise<PrismaDashboardSettings> {
    return this.prisma.dashboardSettings.update(args);
  }
  async deleteDashboardSettings(
    args: Prisma.DashboardSettingsDeleteArgs
  ): Promise<PrismaDashboardSettings> {
    return this.prisma.dashboardSettings.delete(args);
  }
}
