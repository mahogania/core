import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestOfferRewardConditionalServiceBase } from "./base/questOfferRewardConditional.service.base";

@Injectable()
export class QuestOfferRewardConditionalService extends QuestOfferRewardConditionalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
