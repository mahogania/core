import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestPoolTemplateServiceBase } from "./base/questPoolTemplate.service.base";

@Injectable()
export class QuestPoolTemplateService extends QuestPoolTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
