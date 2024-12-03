import { Module } from "@nestjs/common";
import { ModeOfPaymentModuleBase } from "./base/modeOfPayment.module.base";
import { ModeOfPaymentService } from "./modeOfPayment.service";
import { ModeOfPaymentController } from "./modeOfPayment.controller";
import { ModeOfPaymentResolver } from "./modeOfPayment.resolver";

@Module({
  imports: [ModeOfPaymentModuleBase],
  controllers: [ModeOfPaymentController],
  providers: [ModeOfPaymentService, ModeOfPaymentResolver],
  exports: [ModeOfPaymentService],
})
export class ModeOfPaymentModule {}
