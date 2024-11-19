import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerFactionReputationServiceBase } from "./base/playerFactionReputation.service.base";

@Injectable()
export class PlayerFactionReputationService extends PlayerFactionReputationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
