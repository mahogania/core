import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AchievementRewardLocaleServiceBase } from "./base/achievementRewardLocale.service.base";

@Injectable()
export class AchievementRewardLocaleService extends AchievementRewardLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
