import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CharacterSpellServiceBase } from "./base/characterSpell.service.base";

@Injectable()
export class CharacterSpellService extends CharacterSpellServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
