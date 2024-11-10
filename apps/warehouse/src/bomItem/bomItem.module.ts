import { Module } from "@nestjs/common";
import { BomItemModuleBase } from "./base/bomItem.module.base";
import { BomItemService } from "./bomItem.service";
import { BomItemController } from "./bomItem.controller";
import { BomItemResolver } from "./bomItem.resolver";

@Module({
  imports: [BomItemModuleBase],
  controllers: [BomItemController],
  providers: [BomItemService, BomItemResolver],
  exports: [BomItemService],
})
export class BomItemModule {}
