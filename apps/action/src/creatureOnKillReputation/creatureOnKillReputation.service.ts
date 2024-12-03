import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureOnKillReputationServiceBase } from "./base/creatureOnKillReputation.service.base";

@Injectable()
export class CreatureOnKillReputationService extends CreatureOnKillReputationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
