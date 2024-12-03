import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestOfferRewardLocaleServiceBase } from "./base/questOfferRewardLocale.service.base";

@Injectable()
export class QuestOfferRewardLocaleService extends QuestOfferRewardLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
