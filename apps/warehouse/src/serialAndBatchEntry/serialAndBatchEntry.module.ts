import { Module } from "@nestjs/common";
import { SerialAndBatchEntryModuleBase } from "./base/serialAndBatchEntry.module.base";
import { SerialAndBatchEntryService } from "./serialAndBatchEntry.service";
import { SerialAndBatchEntryController } from "./serialAndBatchEntry.controller";
import { SerialAndBatchEntryResolver } from "./serialAndBatchEntry.resolver";

@Module({
  imports: [SerialAndBatchEntryModuleBase],
  controllers: [SerialAndBatchEntryController],
  providers: [SerialAndBatchEntryService, SerialAndBatchEntryResolver],
  exports: [SerialAndBatchEntryService],
})
export class SerialAndBatchEntryModule {}
