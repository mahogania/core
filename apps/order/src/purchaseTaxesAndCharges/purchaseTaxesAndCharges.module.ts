import { Module } from "@nestjs/common";
import { PurchaseTaxesAndChargesModuleBase } from "./base/purchaseTaxesAndCharges.module.base";
import { PurchaseTaxesAndChargesService } from "./purchaseTaxesAndCharges.service";
import { PurchaseTaxesAndChargesController } from "./purchaseTaxesAndCharges.controller";
import { PurchaseTaxesAndChargesResolver } from "./purchaseTaxesAndCharges.resolver";

@Module({
  imports: [PurchaseTaxesAndChargesModuleBase],
  controllers: [PurchaseTaxesAndChargesController],
  providers: [PurchaseTaxesAndChargesService, PurchaseTaxesAndChargesResolver],
  exports: [PurchaseTaxesAndChargesService],
})
export class PurchaseTaxesAndChargesModule {}
