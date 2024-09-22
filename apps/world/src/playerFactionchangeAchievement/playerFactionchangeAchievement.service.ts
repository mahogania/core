import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerFactionchangeAchievementServiceBase } from "./base/playerFactionchangeAchievement.service.base";

@Injectable()
export class PlayerFactionchangeAchievementService extends PlayerFactionchangeAchievementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
