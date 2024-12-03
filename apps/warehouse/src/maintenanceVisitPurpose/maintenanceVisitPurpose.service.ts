import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaintenanceVisitPurposeServiceBase } from "./base/maintenanceVisitPurpose.service.base";

@Injectable()
export class MaintenanceVisitPurposeService extends MaintenanceVisitPurposeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
