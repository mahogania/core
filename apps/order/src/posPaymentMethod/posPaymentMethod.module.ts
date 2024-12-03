import { Module } from "@nestjs/common";
import { PosPaymentMethodModuleBase } from "./base/posPaymentMethod.module.base";
import { PosPaymentMethodService } from "./posPaymentMethod.service";
import { PosPaymentMethodController } from "./posPaymentMethod.controller";
import { PosPaymentMethodResolver } from "./posPaymentMethod.resolver";

@Module({
  imports: [PosPaymentMethodModuleBase],
  controllers: [PosPaymentMethodController],
  providers: [PosPaymentMethodService, PosPaymentMethodResolver],
  exports: [PosPaymentMethodService],
})
export class PosPaymentMethodModule {}
