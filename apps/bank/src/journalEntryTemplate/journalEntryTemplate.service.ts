import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JournalEntryTemplateServiceBase } from "./base/journalEntryTemplate.service.base";

@Injectable()
export class JournalEntryTemplateService extends JournalEntryTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
