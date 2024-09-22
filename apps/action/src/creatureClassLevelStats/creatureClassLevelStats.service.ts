import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureClassLevelStatsServiceBase } from "./base/creatureClassLevelStats.service.base";

@Injectable()
export class CreatureClassLevelStatsService extends CreatureClassLevelStatsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
