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
  DashboardChartSource as PrismaDashboardChartSource,
} from "@prisma/client";

export class DashboardChartSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DashboardChartSourceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dashboardChartSource.count(args);
  }

  async dashboardChartSources(
    args: Prisma.DashboardChartSourceFindManyArgs
  ): Promise<PrismaDashboardChartSource[]> {
    return this.prisma.dashboardChartSource.findMany(args);
  }
  async dashboardChartSource(
    args: Prisma.DashboardChartSourceFindUniqueArgs
  ): Promise<PrismaDashboardChartSource | null> {
    return this.prisma.dashboardChartSource.findUnique(args);
  }
  async createDashboardChartSource(
    args: Prisma.DashboardChartSourceCreateArgs
  ): Promise<PrismaDashboardChartSource> {
    return this.prisma.dashboardChartSource.create(args);
  }
  async updateDashboardChartSource(
    args: Prisma.DashboardChartSourceUpdateArgs
  ): Promise<PrismaDashboardChartSource> {
    return this.prisma.dashboardChartSource.update(args);
  }
  async deleteDashboardChartSource(
    args: Prisma.DashboardChartSourceDeleteArgs
  ): Promise<PrismaDashboardChartSource> {
    return this.prisma.dashboardChartSource.delete(args);
  }
}
