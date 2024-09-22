import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameObjectQuestItemServiceBase } from "./base/gameObjectQuestItem.service.base";

@Injectable()
export class GameObjectQuestItemService extends GameObjectQuestItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
