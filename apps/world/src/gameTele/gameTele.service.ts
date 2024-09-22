import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameTeleServiceBase } from "./base/gameTele.service.base";

@Injectable()
export class GameTeleService extends GameTeleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
