import { Module } from "@nestjs/common";
import { BlanketOrderModuleBase } from "./base/blanketOrder.module.base";
import { BlanketOrderService } from "./blanketOrder.service";
import { BlanketOrderController } from "./blanketOrder.controller";
import { BlanketOrderResolver } from "./blanketOrder.resolver";

@Module({
  imports: [BlanketOrderModuleBase],
  controllers: [BlanketOrderController],
  providers: [BlanketOrderService, BlanketOrderResolver],
  exports: [BlanketOrderService],
})
export class BlanketOrderModule {}
