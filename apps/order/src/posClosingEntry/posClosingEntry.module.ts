import { Module } from "@nestjs/common";
import { PosClosingEntryModuleBase } from "./base/posClosingEntry.module.base";
import { PosClosingEntryService } from "./posClosingEntry.service";
import { PosClosingEntryController } from "./posClosingEntry.controller";
import { PosClosingEntryResolver } from "./posClosingEntry.resolver";

@Module({
  imports: [PosClosingEntryModuleBase],
  controllers: [PosClosingEntryController],
  providers: [PosClosingEntryService, PosClosingEntryResolver],
  exports: [PosClosingEntryService],
})
export class PosClosingEntryModule {}
