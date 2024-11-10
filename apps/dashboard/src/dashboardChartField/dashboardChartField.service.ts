import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DashboardChartFieldServiceBase } from "./base/dashboardChartField.service.base";

@Injectable()
export class DashboardChartFieldService extends DashboardChartFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
