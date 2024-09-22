import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerFactionchangeReputationsServiceBase } from "./base/playerFactionchangeReputations.service.base";

@Injectable()
export class PlayerFactionchangeReputationsService extends PlayerFactionchangeReputationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
