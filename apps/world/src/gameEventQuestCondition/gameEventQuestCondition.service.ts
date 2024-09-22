import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventQuestConditionServiceBase } from "./base/gameEventQuestCondition.service.base";

@Injectable()
export class GameEventQuestConditionService extends GameEventQuestConditionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
