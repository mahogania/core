import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameObjectAddonServiceBase } from "./base/gameObjectAddon.service.base";

@Injectable()
export class GameObjectAddonService extends GameObjectAddonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
