import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MailLootTemplateServiceBase } from "./base/mailLootTemplate.service.base";

@Injectable()
export class MailLootTemplateService extends MailLootTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
