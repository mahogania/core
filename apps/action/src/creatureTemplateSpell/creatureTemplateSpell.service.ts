import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureTemplateSpellServiceBase } from "./base/creatureTemplateSpell.service.base";

@Injectable()
export class CreatureTemplateSpellService extends CreatureTemplateSpellServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
