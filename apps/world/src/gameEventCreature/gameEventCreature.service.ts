import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventCreatureServiceBase } from "./base/gameEventCreature.service.base";

@Injectable()
export class GameEventCreatureService extends GameEventCreatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
