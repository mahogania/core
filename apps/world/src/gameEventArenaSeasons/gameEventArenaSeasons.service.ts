import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventArenaSeasonsServiceBase } from "./base/gameEventArenaSeasons.service.base";

@Injectable()
export class GameEventArenaSeasonsService extends GameEventArenaSeasonsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
