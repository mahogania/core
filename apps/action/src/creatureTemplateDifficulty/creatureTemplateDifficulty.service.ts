import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureTemplateDifficultyServiceBase } from "./base/creatureTemplateDifficulty.service.base";

@Injectable()
export class CreatureTemplateDifficultyService extends CreatureTemplateDifficultyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
