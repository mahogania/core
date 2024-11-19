import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaintenanceVisitServiceBase } from "./base/maintenanceVisit.service.base";

@Injectable()
export class MaintenanceVisitService extends MaintenanceVisitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
