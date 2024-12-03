import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestObjectiveLocaleServiceBase } from "./base/questObjectiveLocale.service.base";

@Injectable()
export class QuestObjectiveLocaleService extends QuestObjectiveLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
