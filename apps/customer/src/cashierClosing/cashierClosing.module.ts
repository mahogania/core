import { Module } from "@nestjs/common";
import { CashierClosingModuleBase } from "./base/cashierClosing.module.base";
import { CashierClosingService } from "./cashierClosing.service";
import { CashierClosingController } from "./cashierClosing.controller";
import { CashierClosingResolver } from "./cashierClosing.resolver";

@Module({
  imports: [CashierClosingModuleBase],
  controllers: [CashierClosingController],
  providers: [CashierClosingService, CashierClosingResolver],
  exports: [CashierClosingService],
})
export class CashierClosingModule {}
