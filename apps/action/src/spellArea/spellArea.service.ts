import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpellAreaServiceBase } from "./base/spellArea.service.base";

@Injectable()
export class SpellAreaService extends SpellAreaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
