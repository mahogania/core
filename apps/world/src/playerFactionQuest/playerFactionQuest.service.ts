import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerFactionQuestServiceBase } from "./base/playerFactionQuest.service.base";

@Injectable()
export class PlayerFactionQuestService extends PlayerFactionQuestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
