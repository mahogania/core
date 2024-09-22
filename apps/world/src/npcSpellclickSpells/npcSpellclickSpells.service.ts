import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NpcSpellclickSpellsServiceBase } from "./base/npcSpellclickSpells.service.base";

@Injectable()
export class NpcSpellclickSpellsService extends NpcSpellclickSpellsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
