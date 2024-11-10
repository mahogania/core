import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DepreciationScheduleServiceBase } from "./base/depreciationSchedule.service.base";

@Injectable()
export class DepreciationScheduleService extends DepreciationScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
