import { Module } from "@nestjs/common";
import { SalesTaxesAndChargesModuleBase } from "./base/salesTaxesAndCharges.module.base";
import { SalesTaxesAndChargesService } from "./salesTaxesAndCharges.service";
import { SalesTaxesAndChargesController } from "./salesTaxesAndCharges.controller";
import { SalesTaxesAndChargesResolver } from "./salesTaxesAndCharges.resolver";

@Module({
  imports: [SalesTaxesAndChargesModuleBase],
  controllers: [SalesTaxesAndChargesController],
  providers: [SalesTaxesAndChargesService, SalesTaxesAndChargesResolver],
  exports: [SalesTaxesAndChargesService],
})
export class SalesTaxesAndChargesModule {}
