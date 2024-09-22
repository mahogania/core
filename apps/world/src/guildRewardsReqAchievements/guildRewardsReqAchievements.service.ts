import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GuildRewardsReqAchievementsServiceBase } from "./base/guildRewardsReqAchievements.service.base";

@Injectable()
export class GuildRewardsReqAchievementsService extends GuildRewardsReqAchievementsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
