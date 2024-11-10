import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestCueEffectServiceBase } from "./base/questCueEffect.service.base";

@Injectable()
export class QuestCueEffectService extends QuestCueEffectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
