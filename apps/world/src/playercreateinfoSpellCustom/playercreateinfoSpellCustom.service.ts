import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayercreateinfoSpellCustomServiceBase } from "./base/playercreateinfoSpellCustom.service.base";

@Injectable()
export class PlayercreateinfoSpellCustomService extends PlayercreateinfoSpellCustomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
