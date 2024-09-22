import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventNpcFlagServiceBase } from "./base/gameEventNpcFlag.service.base";

@Injectable()
export class GameEventNpcFlagService extends GameEventNpcFlagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
