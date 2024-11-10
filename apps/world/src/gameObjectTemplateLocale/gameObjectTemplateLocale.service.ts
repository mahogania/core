import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameObjectTemplateLocaleServiceBase } from "./base/gameObjectTemplateLocale.service.base";

@Injectable()
export class GameObjectTemplateLocaleService extends GameObjectTemplateLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
