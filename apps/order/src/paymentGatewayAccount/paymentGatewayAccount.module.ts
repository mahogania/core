import { Module } from "@nestjs/common";
import { PaymentGatewayAccountModuleBase } from "./base/paymentGatewayAccount.module.base";
import { PaymentGatewayAccountService } from "./paymentGatewayAccount.service";
import { PaymentGatewayAccountController } from "./paymentGatewayAccount.controller";
import { PaymentGatewayAccountResolver } from "./paymentGatewayAccount.resolver";

@Module({
  imports: [PaymentGatewayAccountModuleBase],
  controllers: [PaymentGatewayAccountController],
  providers: [PaymentGatewayAccountService, PaymentGatewayAccountResolver],
  exports: [PaymentGatewayAccountService],
})
export class PaymentGatewayAccountModule {}
