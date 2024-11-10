import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventQuestServiceBase } from "./base/gameEventQuest.service.base";

@Injectable()
export class GameEventQuestService extends GameEventQuestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
