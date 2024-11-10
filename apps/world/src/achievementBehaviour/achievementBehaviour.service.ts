import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AchievementBehaviourServiceBase } from "./base/achievementBehaviour.service.base";

@Injectable()
export class AchievementBehaviourService extends AchievementBehaviourServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
