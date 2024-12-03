import { Module } from "@nestjs/common";
import { LandedCostItemModuleBase } from "./base/landedCostItem.module.base";
import { LandedCostItemService } from "./landedCostItem.service";
import { LandedCostItemController } from "./landedCostItem.controller";
import { LandedCostItemResolver } from "./landedCostItem.resolver";

@Module({
  imports: [LandedCostItemModuleBase],
  controllers: [LandedCostItemController],
  providers: [LandedCostItemService, LandedCostItemResolver],
  exports: [LandedCostItemService],
})
export class LandedCostItemModule {}
