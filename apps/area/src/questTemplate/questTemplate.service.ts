import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestTemplateServiceBase } from "./base/questTemplate.service.base";

@Injectable()
export class QuestTemplateService extends QuestTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
