import { Module } from "@nestjs/common";
import { LedgerHealthModuleBase } from "./base/ledgerHealth.module.base";
import { LedgerHealthService } from "./ledgerHealth.service";
import { LedgerHealthController } from "./ledgerHealth.controller";
import { LedgerHealthResolver } from "./ledgerHealth.resolver";

@Module({
  imports: [LedgerHealthModuleBase],
  controllers: [LedgerHealthController],
  providers: [LedgerHealthService, LedgerHealthResolver],
  exports: [LedgerHealthService],
})
export class LedgerHealthModule {}
