import { Module } from "@nestjs/common";
import { ManufacturerModuleBase } from "./base/manufacturer.module.base";
import { ManufacturerService } from "./manufacturer.service";
import { ManufacturerController } from "./manufacturer.controller";
import { ManufacturerResolver } from "./manufacturer.resolver";

@Module({
  imports: [ManufacturerModuleBase],
  controllers: [ManufacturerController],
  providers: [ManufacturerService, ManufacturerResolver],
  exports: [ManufacturerService],
})
export class ManufacturerModule {}
