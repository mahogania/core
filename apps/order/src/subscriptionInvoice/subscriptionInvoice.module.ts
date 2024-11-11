import { Module } from "@nestjs/common";
import { SubscriptionInvoiceModuleBase } from "./base/subscriptionInvoice.module.base";
import { SubscriptionInvoiceService } from "./subscriptionInvoice.service";
import { SubscriptionInvoiceController } from "./subscriptionInvoice.controller";
import { SubscriptionInvoiceResolver } from "./subscriptionInvoice.resolver";

@Module({
  imports: [SubscriptionInvoiceModuleBase],
  controllers: [SubscriptionInvoiceController],
  providers: [SubscriptionInvoiceService, SubscriptionInvoiceResolver],
  exports: [SubscriptionInvoiceService],
})
export class SubscriptionInvoiceModule {}
