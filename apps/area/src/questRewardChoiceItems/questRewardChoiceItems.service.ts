import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestRewardChoiceItemsServiceBase } from "./base/questRewardChoiceItems.service.base";

@Injectable()
export class QuestRewardChoiceItemsService extends QuestRewardChoiceItemsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
