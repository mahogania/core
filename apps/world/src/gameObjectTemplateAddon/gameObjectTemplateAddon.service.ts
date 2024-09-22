import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameObjectTemplateAddonServiceBase } from "./base/gameObjectTemplateAddon.service.base";

@Injectable()
export class GameObjectTemplateAddonService extends GameObjectTemplateAddonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
