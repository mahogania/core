import { Module } from "@nestjs/common";
import { QuotationItemModuleBase } from "./base/quotationItem.module.base";
import { QuotationItemService } from "./quotationItem.service";
import { QuotationItemController } from "./quotationItem.controller";
import { QuotationItemResolver } from "./quotationItem.resolver";

@Module({
  imports: [QuotationItemModuleBase],
  controllers: [QuotationItemController],
  providers: [QuotationItemService, QuotationItemResolver],
  exports: [QuotationItemService],
})
export class QuotationItemModule {}
