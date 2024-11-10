import { Module } from "@nestjs/common";
import { JournalEntryAccountModuleBase } from "./base/journalEntryAccount.module.base";
import { JournalEntryAccountService } from "./journalEntryAccount.service";
import { JournalEntryAccountController } from "./journalEntryAccount.controller";
import { JournalEntryAccountResolver } from "./journalEntryAccount.resolver";

@Module({
  imports: [JournalEntryAccountModuleBase],
  controllers: [JournalEntryAccountController],
  providers: [JournalEntryAccountService, JournalEntryAccountResolver],
  exports: [JournalEntryAccountService],
})
export class JournalEntryAccountModule {}
