import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestTemplateLocaleServiceBase } from "./base/questTemplateLocale.service.base";

@Injectable()
export class QuestTemplateLocaleService extends QuestTemplateLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
