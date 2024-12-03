import { Module } from "@nestjs/common";
import { PosInvoiceMergeLogModuleBase } from "./base/posInvoiceMergeLog.module.base";
import { PosInvoiceMergeLogService } from "./posInvoiceMergeLog.service";
import { PosInvoiceMergeLogController } from "./posInvoiceMergeLog.controller";
import { PosInvoiceMergeLogResolver } from "./posInvoiceMergeLog.resolver";

@Module({
  imports: [PosInvoiceMergeLogModuleBase],
  controllers: [PosInvoiceMergeLogController],
  providers: [PosInvoiceMergeLogService, PosInvoiceMergeLogResolver],
  exports: [PosInvoiceMergeLogService],
})
export class PosInvoiceMergeLogModule {}
