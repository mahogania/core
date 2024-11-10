import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameObjectQuestEnderServiceBase } from "./base/gameObjectQuestEnder.service.base";

@Injectable()
export class GameObjectQuestEnderService extends GameObjectQuestEnderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
