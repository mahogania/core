import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DashboardChartLinkServiceBase } from "./base/dashboardChartLink.service.base";

@Injectable()
export class DashboardChartLinkService extends DashboardChartLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
