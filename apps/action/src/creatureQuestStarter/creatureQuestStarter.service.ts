import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureQuestStarterServiceBase } from "./base/creatureQuestStarter.service.base";

@Injectable()
export class CreatureQuestStarterService extends CreatureQuestStarterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
