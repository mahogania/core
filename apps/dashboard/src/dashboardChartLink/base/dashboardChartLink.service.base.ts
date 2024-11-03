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
  DashboardChartLink as PrismaDashboardChartLink,
} from "@prisma/client";

export class DashboardChartLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DashboardChartLinkCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dashboardChartLink.count(args);
  }

  async dashboardChartLinks(
    args: Prisma.DashboardChartLinkFindManyArgs
  ): Promise<PrismaDashboardChartLink[]> {
    return this.prisma.dashboardChartLink.findMany(args);
  }
  async dashboardChartLink(
    args: Prisma.DashboardChartLinkFindUniqueArgs
  ): Promise<PrismaDashboardChartLink | null> {
    return this.prisma.dashboardChartLink.findUnique(args);
  }
  async createDashboardChartLink(
    args: Prisma.DashboardChartLinkCreateArgs
  ): Promise<PrismaDashboardChartLink> {
    return this.prisma.dashboardChartLink.create(args);
  }
  async updateDashboardChartLink(
    args: Prisma.DashboardChartLinkUpdateArgs
  ): Promise<PrismaDashboardChartLink> {
    return this.prisma.dashboardChartLink.update(args);
  }
  async deleteDashboardChartLink(
    args: Prisma.DashboardChartLinkDeleteArgs
  ): Promise<PrismaDashboardChartLink> {
    return this.prisma.dashboardChartLink.delete(args);
  }
}
