import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventGameObjectQuestServiceBase } from "./base/gameEventGameObjectQuest.service.base";

@Injectable()
export class GameEventGameObjectQuestService extends GameEventGameObjectQuestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
