import { Module } from "@nestjs/common";
import { AdvanceTaxesAndChargesModuleBase } from "./base/advanceTaxesAndCharges.module.base";
import { AdvanceTaxesAndChargesService } from "./advanceTaxesAndCharges.service";
import { AdvanceTaxesAndChargesController } from "./advanceTaxesAndCharges.controller";
import { AdvanceTaxesAndChargesResolver } from "./advanceTaxesAndCharges.resolver";

@Module({
  imports: [AdvanceTaxesAndChargesModuleBase],
  controllers: [AdvanceTaxesAndChargesController],
  providers: [AdvanceTaxesAndChargesService, AdvanceTaxesAndChargesResolver],
  exports: [AdvanceTaxesAndChargesService],
})
export class AdvanceTaxesAndChargesModule {}
