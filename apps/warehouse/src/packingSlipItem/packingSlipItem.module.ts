import { Module } from "@nestjs/common";
import { PackingSlipItemModuleBase } from "./base/packingSlipItem.module.base";
import { PackingSlipItemService } from "./packingSlipItem.service";
import { PackingSlipItemController } from "./packingSlipItem.controller";
import { PackingSlipItemResolver } from "./packingSlipItem.resolver";

@Module({
  imports: [PackingSlipItemModuleBase],
  controllers: [PackingSlipItemController],
  providers: [PackingSlipItemService, PackingSlipItemResolver],
  exports: [PackingSlipItemService],
})
export class PackingSlipItemModule {}
