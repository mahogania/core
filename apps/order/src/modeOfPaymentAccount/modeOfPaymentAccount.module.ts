import { Module } from "@nestjs/common";
import { ModeOfPaymentAccountModuleBase } from "./base/modeOfPaymentAccount.module.base";
import { ModeOfPaymentAccountService } from "./modeOfPaymentAccount.service";
import { ModeOfPaymentAccountController } from "./modeOfPaymentAccount.controller";
import { ModeOfPaymentAccountResolver } from "./modeOfPaymentAccount.resolver";

@Module({
  imports: [ModeOfPaymentAccountModuleBase],
  controllers: [ModeOfPaymentAccountController],
  providers: [ModeOfPaymentAccountService, ModeOfPaymentAccountResolver],
  exports: [ModeOfPaymentAccountService],
})
export class ModeOfPaymentAccountModule {}
