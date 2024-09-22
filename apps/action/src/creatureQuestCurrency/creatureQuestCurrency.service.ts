import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureQuestCurrencyServiceBase } from "./base/creatureQuestCurrency.service.base";

@Injectable()
export class CreatureQuestCurrencyService extends CreatureQuestCurrencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
