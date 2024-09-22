import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameObjectOverridesServiceBase } from "./base/gameObjectOverrides.service.base";

@Injectable()
export class GameObjectOverridesService extends GameObjectOverridesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
