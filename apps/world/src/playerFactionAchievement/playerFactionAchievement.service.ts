import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerFactionAchievementServiceBase } from "./base/playerFactionAchievement.service.base";

@Injectable()
export class PlayerFactionAchievementService extends PlayerFactionAchievementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
