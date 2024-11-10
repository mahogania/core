import { Module } from "@nestjs/common";
import { InventoryDimensionModuleBase } from "./base/inventoryDimension.module.base";
import { InventoryDimensionService } from "./inventoryDimension.service";
import { InventoryDimensionController } from "./inventoryDimension.controller";
import { InventoryDimensionResolver } from "./inventoryDimension.resolver";

@Module({
  imports: [InventoryDimensionModuleBase],
  controllers: [InventoryDimensionController],
  providers: [InventoryDimensionService, InventoryDimensionResolver],
  exports: [InventoryDimensionService],
})
export class InventoryDimensionModule {}
