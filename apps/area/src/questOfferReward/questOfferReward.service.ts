import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestOfferRewardServiceBase } from "./base/questOfferReward.service.base";

@Injectable()
export class QuestOfferRewardService extends QuestOfferRewardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
