import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestRewardDisplaySpellServiceBase } from "./base/questRewardDisplaySpell.service.base";

@Injectable()
export class QuestRewardDisplaySpellService extends QuestRewardDisplaySpellServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
