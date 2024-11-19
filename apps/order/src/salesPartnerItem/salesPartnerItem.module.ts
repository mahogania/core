import { Module } from "@nestjs/common";
import { SalesPartnerItemModuleBase } from "./base/salesPartnerItem.module.base";
import { SalesPartnerItemService } from "./salesPartnerItem.service";
import { SalesPartnerItemController } from "./salesPartnerItem.controller";
import { SalesPartnerItemResolver } from "./salesPartnerItem.resolver";

@Module({
  imports: [SalesPartnerItemModuleBase],
  controllers: [SalesPartnerItemController],
  providers: [SalesPartnerItemService, SalesPartnerItemResolver],
  exports: [SalesPartnerItemService],
})
export class SalesPartnerItemModule {}
