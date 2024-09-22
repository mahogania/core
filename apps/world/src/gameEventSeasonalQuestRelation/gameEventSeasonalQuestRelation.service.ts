import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventSeasonalQuestRelationServiceBase } from "./base/gameEventSeasonalQuestRelation.service.base";

@Injectable()
export class GameEventSeasonalQuestRelationService extends GameEventSeasonalQuestRelationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
