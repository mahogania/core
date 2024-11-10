import { Module } from "@nestjs/common";
import { LedgerMergeModuleBase } from "./base/ledgerMerge.module.base";
import { LedgerMergeService } from "./ledgerMerge.service";
import { LedgerMergeController } from "./ledgerMerge.controller";
import { LedgerMergeResolver } from "./ledgerMerge.resolver";

@Module({
  imports: [LedgerMergeModuleBase],
  controllers: [LedgerMergeController],
  providers: [LedgerMergeService, LedgerMergeResolver],
  exports: [LedgerMergeService],
})
export class LedgerMergeModule {}
