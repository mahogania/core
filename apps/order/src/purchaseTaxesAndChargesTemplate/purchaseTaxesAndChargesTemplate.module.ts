import { Module } from "@nestjs/common";
import { PurchaseTaxesAndChargesTemplateModuleBase } from "./base/purchaseTaxesAndChargesTemplate.module.base";
import { PurchaseTaxesAndChargesTemplateService } from "./purchaseTaxesAndChargesTemplate.service";
import { PurchaseTaxesAndChargesTemplateController } from "./purchaseTaxesAndChargesTemplate.controller";
import { PurchaseTaxesAndChargesTemplateResolver } from "./purchaseTaxesAndChargesTemplate.resolver";

@Module({
  imports: [PurchaseTaxesAndChargesTemplateModuleBase],
  controllers: [PurchaseTaxesAndChargesTemplateController],
  providers: [
    PurchaseTaxesAndChargesTemplateService,
    PurchaseTaxesAndChargesTemplateResolver,
  ],
  exports: [PurchaseTaxesAndChargesTemplateService],
})
export class PurchaseTaxesAndChargesTemplateModule {}
