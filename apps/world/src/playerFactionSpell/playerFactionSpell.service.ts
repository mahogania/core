import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerFactionSpellServiceBase } from "./base/playerFactionSpell.service.base";

@Injectable()
export class PlayerFactionSpellService extends PlayerFactionSpellServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
