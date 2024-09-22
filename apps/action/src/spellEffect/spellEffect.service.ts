import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpellEffectServiceBase } from "./base/spellEffect.service.base";

@Injectable()
export class SpellEffectService extends SpellEffectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
