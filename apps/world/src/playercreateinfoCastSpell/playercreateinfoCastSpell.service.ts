import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayercreateinfoCastSpellServiceBase } from "./base/playercreateinfoCastSpell.service.base";

@Injectable()
export class PlayercreateinfoCastSpellService extends PlayercreateinfoCastSpellServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
