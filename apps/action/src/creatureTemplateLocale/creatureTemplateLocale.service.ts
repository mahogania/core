import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureTemplateLocaleServiceBase } from "./base/creatureTemplateLocale.service.base";

@Injectable()
export class CreatureTemplateLocaleService extends CreatureTemplateLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
