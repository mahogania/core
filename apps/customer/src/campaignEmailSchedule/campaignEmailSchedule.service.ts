import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CampaignEmailScheduleServiceBase } from "./base/campaignEmailSchedule.service.base";

@Injectable()
export class CampaignEmailScheduleService extends CampaignEmailScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
