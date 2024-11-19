import { Module } from "@nestjs/common";
import { BulkTransactionLogDetailModuleBase } from "./base/bulkTransactionLogDetail.module.base";
import { BulkTransactionLogDetailService } from "./bulkTransactionLogDetail.service";
import { BulkTransactionLogDetailController } from "./bulkTransactionLogDetail.controller";
import { BulkTransactionLogDetailResolver } from "./bulkTransactionLogDetail.resolver";

@Module({
  imports: [BulkTransactionLogDetailModuleBase],
  controllers: [BulkTransactionLogDetailController],
  providers: [
    BulkTransactionLogDetailService,
    BulkTransactionLogDetailResolver,
  ],
  exports: [BulkTransactionLogDetailService],
})
export class BulkTransactionLogDetailModule {}
