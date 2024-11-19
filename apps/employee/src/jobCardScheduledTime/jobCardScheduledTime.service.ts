import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobCardScheduledTimeServiceBase } from "./base/jobCardScheduledTime.service.base";

@Injectable()
export class JobCardScheduledTimeService extends JobCardScheduledTimeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
