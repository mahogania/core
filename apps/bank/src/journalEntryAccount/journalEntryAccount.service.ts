import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JournalEntryAccountServiceBase } from "./base/journalEntryAccount.service.base";

@Injectable()
export class JournalEntryAccountService extends JournalEntryAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
