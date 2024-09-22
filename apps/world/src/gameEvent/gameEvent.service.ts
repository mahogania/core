import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventServiceBase } from "./base/gameEvent.service.base";

@Injectable()
export class GameEventService extends GameEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
