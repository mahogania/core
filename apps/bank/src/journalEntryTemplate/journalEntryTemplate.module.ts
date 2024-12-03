import { Module } from "@nestjs/common";
import { JournalEntryTemplateModuleBase } from "./base/journalEntryTemplate.module.base";
import { JournalEntryTemplateService } from "./journalEntryTemplate.service";
import { JournalEntryTemplateController } from "./journalEntryTemplate.controller";
import { JournalEntryTemplateResolver } from "./journalEntryTemplate.resolver";

@Module({
  imports: [JournalEntryTemplateModuleBase],
  controllers: [JournalEntryTemplateController],
  providers: [JournalEntryTemplateService, JournalEntryTemplateResolver],
  exports: [JournalEntryTemplateService],
})
export class JournalEntryTemplateModule {}
