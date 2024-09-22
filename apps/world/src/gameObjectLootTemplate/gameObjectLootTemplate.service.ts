import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameObjectLootTemplateServiceBase } from "./base/gameObjectLootTemplate.service.base";

@Injectable()
export class GameObjectLootTemplateService extends GameObjectLootTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
