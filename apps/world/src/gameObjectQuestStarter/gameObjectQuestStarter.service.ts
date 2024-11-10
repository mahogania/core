import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameObjectQuestStarterServiceBase } from "./base/gameObjectQuestStarter.service.base";

@Injectable()
export class GameObjectQuestStarterService extends GameObjectQuestStarterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
