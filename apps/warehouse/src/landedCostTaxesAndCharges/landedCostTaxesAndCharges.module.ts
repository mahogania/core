import { Module } from "@nestjs/common";
import { LandedCostTaxesAndChargesModuleBase } from "./base/landedCostTaxesAndCharges.module.base";
import { LandedCostTaxesAndChargesService } from "./landedCostTaxesAndCharges.service";
import { LandedCostTaxesAndChargesController } from "./landedCostTaxesAndCharges.controller";
import { LandedCostTaxesAndChargesResolver } from "./landedCostTaxesAndCharges.resolver";

@Module({
  imports: [LandedCostTaxesAndChargesModuleBase],
  controllers: [LandedCostTaxesAndChargesController],
  providers: [
    LandedCostTaxesAndChargesService,
    LandedCostTaxesAndChargesResolver,
  ],
  exports: [LandedCostTaxesAndChargesService],
})
export class LandedCostTaxesAndChargesModule {}
