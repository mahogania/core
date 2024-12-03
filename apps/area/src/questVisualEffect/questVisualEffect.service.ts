import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestVisualEffectServiceBase } from "./base/questVisualEffect.service.base";

@Injectable()
export class QuestVisualEffectService extends QuestVisualEffectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
