import { Module } from "@nestjs/common";
import { PosOpeningEntryModuleBase } from "./base/posOpeningEntry.module.base";
import { PosOpeningEntryService } from "./posOpeningEntry.service";
import { PosOpeningEntryController } from "./posOpeningEntry.controller";
import { PosOpeningEntryResolver } from "./posOpeningEntry.resolver";

@Module({
  imports: [PosOpeningEntryModuleBase],
  controllers: [PosOpeningEntryController],
  providers: [PosOpeningEntryService, PosOpeningEntryResolver],
  exports: [PosOpeningEntryService],
})
export class PosOpeningEntryModule {}
