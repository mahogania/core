import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AchievementScriptsServiceBase } from "./base/achievementScripts.service.base";

@Injectable()
export class AchievementScriptsService extends AchievementScriptsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
