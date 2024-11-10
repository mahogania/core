import { Module } from "@nestjs/common";
import { ItemTaxTemplateDetailModuleBase } from "./base/itemTaxTemplateDetail.module.base";
import { ItemTaxTemplateDetailService } from "./itemTaxTemplateDetail.service";
import { ItemTaxTemplateDetailController } from "./itemTaxTemplateDetail.controller";
import { ItemTaxTemplateDetailResolver } from "./itemTaxTemplateDetail.resolver";

@Module({
  imports: [ItemTaxTemplateDetailModuleBase],
  controllers: [ItemTaxTemplateDetailController],
  providers: [ItemTaxTemplateDetailService, ItemTaxTemplateDetailResolver],
  exports: [ItemTaxTemplateDetailService],
})
export class ItemTaxTemplateDetailModule {}
