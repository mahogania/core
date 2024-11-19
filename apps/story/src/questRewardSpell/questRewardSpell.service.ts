import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestRewardSpellServiceBase } from "./base/questRewardSpell.service.base";

@Injectable()
export class QuestRewardSpellService extends QuestRewardSpellServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
