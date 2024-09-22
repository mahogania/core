import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AchievementRewardServiceBase } from "./base/achievementReward.service.base";

@Injectable()
export class AchievementRewardService extends AchievementRewardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
