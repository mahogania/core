import { Module } from "@nestjs/common";
import { UomConversionFactorModuleBase } from "./base/uomConversionFactor.module.base";
import { UomConversionFactorService } from "./uomConversionFactor.service";
import { UomConversionFactorController } from "./uomConversionFactor.controller";
import { UomConversionFactorResolver } from "./uomConversionFactor.resolver";

@Module({
  imports: [UomConversionFactorModuleBase],
  controllers: [UomConversionFactorController],
  providers: [UomConversionFactorService, UomConversionFactorResolver],
  exports: [UomConversionFactorService],
})
export class UomConversionFactorModule {}
