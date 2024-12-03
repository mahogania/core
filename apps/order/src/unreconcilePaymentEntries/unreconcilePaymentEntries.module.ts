import { Module } from "@nestjs/common";
import { UnreconcilePaymentEntriesModuleBase } from "./base/unreconcilePaymentEntries.module.base";
import { UnreconcilePaymentEntriesService } from "./unreconcilePaymentEntries.service";
import { UnreconcilePaymentEntriesController } from "./unreconcilePaymentEntries.controller";
import { UnreconcilePaymentEntriesResolver } from "./unreconcilePaymentEntries.resolver";

@Module({
  imports: [UnreconcilePaymentEntriesModuleBase],
  controllers: [UnreconcilePaymentEntriesController],
  providers: [
    UnreconcilePaymentEntriesService,
    UnreconcilePaymentEntriesResolver,
  ],
  exports: [UnreconcilePaymentEntriesService],
})
export class UnreconcilePaymentEntriesModule {}
