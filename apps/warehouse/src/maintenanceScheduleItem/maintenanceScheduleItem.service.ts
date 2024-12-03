import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaintenanceScheduleItemServiceBase } from "./base/maintenanceScheduleItem.service.base";

@Injectable()
export class MaintenanceScheduleItemService extends MaintenanceScheduleItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
