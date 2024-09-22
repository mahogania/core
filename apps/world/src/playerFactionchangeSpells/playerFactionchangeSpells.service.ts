import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerFactionchangeSpellsServiceBase } from "./base/playerFactionchangeSpells.service.base";

@Injectable()
export class PlayerFactionchangeSpellsService extends PlayerFactionchangeSpellsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
