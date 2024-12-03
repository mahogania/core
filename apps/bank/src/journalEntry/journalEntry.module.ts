import { Module } from "@nestjs/common";
import { JournalEntryModuleBase } from "./base/journalEntry.module.base";
import { JournalEntryService } from "./journalEntry.service";
import { JournalEntryController } from "./journalEntry.controller";
import { JournalEntryResolver } from "./journalEntry.resolver";

@Module({
  imports: [JournalEntryModuleBase],
  controllers: [JournalEntryController],
  providers: [JournalEntryService, JournalEntryResolver],
  exports: [JournalEntryService],
})
export class JournalEntryModule {}
