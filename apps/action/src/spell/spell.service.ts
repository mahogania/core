import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpellServiceBase } from "./base/spell.service.base";

@Injectable()
export class SpellService extends SpellServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
