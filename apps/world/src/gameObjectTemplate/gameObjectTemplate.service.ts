import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameObjectTemplateServiceBase } from "./base/gameObjectTemplate.service.base";

@Injectable()
export class GameObjectTemplateService extends GameObjectTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
