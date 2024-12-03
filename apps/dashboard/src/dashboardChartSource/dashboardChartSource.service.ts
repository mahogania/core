import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DashboardChartSourceServiceBase } from "./base/dashboardChartSource.service.base";

@Injectable()
export class DashboardChartSourceService extends DashboardChartSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
