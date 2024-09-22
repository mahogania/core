import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MailLevelRewardServiceBase } from "./base/mailLevelReward.service.base";

@Injectable()
export class MailLevelRewardService extends MailLevelRewardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
