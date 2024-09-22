import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestObjectivesLocaleServiceBase } from "./base/questObjectivesLocale.service.base";

@Injectable()
export class QuestObjectivesLocaleService extends QuestObjectivesLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
