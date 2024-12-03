import { Module } from "@nestjs/common";
import { WarehouseTypeModuleBase } from "./base/warehouseType.module.base";
import { WarehouseTypeService } from "./warehouseType.service";
import { WarehouseTypeController } from "./warehouseType.controller";
import { WarehouseTypeResolver } from "./warehouseType.resolver";

@Module({
  imports: [WarehouseTypeModuleBase],
  controllers: [WarehouseTypeController],
  providers: [WarehouseTypeService, WarehouseTypeResolver],
  exports: [WarehouseTypeService],
})
export class WarehouseTypeModule {}
