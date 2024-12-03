import { Module } from "@nestjs/common";
import { PaymentRequestModuleBase } from "./base/paymentRequest.module.base";
import { PaymentRequestService } from "./paymentRequest.service";
import { PaymentRequestController } from "./paymentRequest.controller";
import { PaymentRequestResolver } from "./paymentRequest.resolver";

@Module({
  imports: [PaymentRequestModuleBase],
  controllers: [PaymentRequestController],
  providers: [PaymentRequestService, PaymentRequestResolver],
  exports: [PaymentRequestService],
})
export class PaymentRequestModule {}
