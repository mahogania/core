import { Module } from "@nestjs/common";
import { CrmNoteModuleBase } from "./base/crmNote.module.base";
import { CrmNoteService } from "./crmNote.service";
import { CrmNoteController } from "./crmNote.controller";
import { CrmNoteResolver } from "./crmNote.resolver";

@Module({
  imports: [CrmNoteModuleBase],
  controllers: [CrmNoteController],
  providers: [CrmNoteService, CrmNoteResolver],
  exports: [CrmNoteService],
})
export class CrmNoteModule {}
