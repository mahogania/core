import { Module } from "@nestjs/common";
import { ItemManufacturerModuleBase } from "./base/itemManufacturer.module.base";
import { ItemManufacturerService } from "./itemManufacturer.service";
import { ItemManufacturerController } from "./itemManufacturer.controller";
import { ItemManufacturerResolver } from "./itemManufacturer.resolver";

@Module({
  imports: [ItemManufacturerModuleBase],
  controllers: [ItemManufacturerController],
  providers: [ItemManufacturerService, ItemManufacturerResolver],
  exports: [ItemManufacturerService],
})
export class ItemManufacturerModule {}
