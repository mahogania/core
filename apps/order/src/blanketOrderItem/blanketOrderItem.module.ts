import { Module } from "@nestjs/common";
import { BlanketOrderItemModuleBase } from "./base/blanketOrderItem.module.base";
import { BlanketOrderItemService } from "./blanketOrderItem.service";
import { BlanketOrderItemController } from "./blanketOrderItem.controller";
import { BlanketOrderItemResolver } from "./blanketOrderItem.resolver";

@Module({
  imports: [BlanketOrderItemModuleBase],
  controllers: [BlanketOrderItemController],
  providers: [BlanketOrderItemService, BlanketOrderItemResolver],
  exports: [BlanketOrderItemService],
})
export class BlanketOrderItemModule {}
