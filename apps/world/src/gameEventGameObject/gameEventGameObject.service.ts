import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventGameObjectServiceBase } from "./base/gameEventGameObject.service.base";

@Injectable()
export class GameEventGameObjectService extends GameEventGameObjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
