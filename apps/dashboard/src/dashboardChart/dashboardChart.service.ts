import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DashboardChartServiceBase } from "./base/dashboardChart.service.base";

@Injectable()
export class DashboardChartService extends DashboardChartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
