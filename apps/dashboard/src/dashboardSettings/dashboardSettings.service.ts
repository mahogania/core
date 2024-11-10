import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DashboardSettingsServiceBase } from "./base/dashboardSettings.service.base";

@Injectable()
export class DashboardSettingsService extends DashboardSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
