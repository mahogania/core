import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventCreatureQuestServiceBase } from "./base/gameEventCreatureQuest.service.base";

@Injectable()
export class GameEventCreatureQuestService extends GameEventCreatureQuestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
