import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestObjectivesCompletionEffectServiceBase } from "./base/questObjectivesCompletionEffect.service.base";

@Injectable()
export class QuestObjectivesCompletionEffectService extends QuestObjectivesCompletionEffectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
