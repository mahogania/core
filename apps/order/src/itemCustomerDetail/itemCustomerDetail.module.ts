import { Module } from "@nestjs/common";
import { ItemCustomerDetailModuleBase } from "./base/itemCustomerDetail.module.base";
import { ItemCustomerDetailService } from "./itemCustomerDetail.service";
import { ItemCustomerDetailController } from "./itemCustomerDetail.controller";
import { ItemCustomerDetailResolver } from "./itemCustomerDetail.resolver";

@Module({
  imports: [ItemCustomerDetailModuleBase],
  controllers: [ItemCustomerDetailController],
  providers: [ItemCustomerDetailService, ItemCustomerDetailResolver],
  exports: [ItemCustomerDetailService],
})
export class ItemCustomerDetailModule {}
