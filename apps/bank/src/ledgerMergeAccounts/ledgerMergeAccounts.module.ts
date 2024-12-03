import { Module } from "@nestjs/common";
import { LedgerMergeAccountsModuleBase } from "./base/ledgerMergeAccounts.module.base";
import { LedgerMergeAccountsService } from "./ledgerMergeAccounts.service";
import { LedgerMergeAccountsController } from "./ledgerMergeAccounts.controller";
import { LedgerMergeAccountsResolver } from "./ledgerMergeAccounts.resolver";

@Module({
  imports: [LedgerMergeAccountsModuleBase],
  controllers: [LedgerMergeAccountsController],
  providers: [LedgerMergeAccountsService, LedgerMergeAccountsResolver],
  exports: [LedgerMergeAccountsService],
})
export class LedgerMergeAccountsModule {}
