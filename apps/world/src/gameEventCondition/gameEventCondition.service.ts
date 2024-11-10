import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventConditionServiceBase } from "./base/gameEventCondition.service.base";

@Injectable()
export class GameEventConditionService extends GameEventConditionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
