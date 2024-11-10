import { Module } from "@nestjs/common";
import { ItemTaxTemplateModuleBase } from "./base/itemTaxTemplate.module.base";
import { ItemTaxTemplateService } from "./itemTaxTemplate.service";
import { ItemTaxTemplateController } from "./itemTaxTemplate.controller";
import { ItemTaxTemplateResolver } from "./itemTaxTemplate.resolver";

@Module({
  imports: [ItemTaxTemplateModuleBase],
  controllers: [ItemTaxTemplateController],
  providers: [ItemTaxTemplateService, ItemTaxTemplateResolver],
  exports: [ItemTaxTemplateService],
})
export class ItemTaxTemplateModule {}
