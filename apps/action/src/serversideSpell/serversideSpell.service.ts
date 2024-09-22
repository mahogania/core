import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServersideSpellServiceBase } from "./base/serversideSpell.service.base";

@Injectable()
export class ServersideSpellService extends ServersideSpellServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
