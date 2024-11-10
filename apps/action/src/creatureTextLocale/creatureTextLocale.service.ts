import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureTextLocaleServiceBase } from "./base/creatureTextLocale.service.base";

@Injectable()
export class CreatureTextLocaleService extends CreatureTextLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
