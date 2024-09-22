import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventPoolServiceBase } from "./base/gameEventPool.service.base";

@Injectable()
export class GameEventPoolService extends GameEventPoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
