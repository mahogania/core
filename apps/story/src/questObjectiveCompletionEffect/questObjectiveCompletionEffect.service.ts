import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestObjectiveCompletionEffectServiceBase } from "./base/questObjectiveCompletionEffect.service.base";

@Injectable()
export class QuestObjectiveCompletionEffectService extends QuestObjectiveCompletionEffectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
