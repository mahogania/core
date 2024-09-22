import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServersideSpellEffectServiceBase } from "./base/serversideSpellEffect.service.base";

@Injectable()
export class ServersideSpellEffectService extends ServersideSpellEffectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
