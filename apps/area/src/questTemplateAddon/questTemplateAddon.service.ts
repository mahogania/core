import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestTemplateAddonServiceBase } from "./base/questTemplateAddon.service.base";

@Injectable()
export class QuestTemplateAddonService extends QuestTemplateAddonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
