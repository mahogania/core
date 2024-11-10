import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SkillFishingBaseLevelServiceBase } from "./base/skillFishingBaseLevel.service.base";

@Injectable()
export class SkillFishingBaseLevelService extends SkillFishingBaseLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
