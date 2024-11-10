import { Module } from "@nestjs/common";
import { CustomerGroupItemModuleBase } from "./base/customerGroupItem.module.base";
import { CustomerGroupItemService } from "./customerGroupItem.service";
import { CustomerGroupItemController } from "./customerGroupItem.controller";
import { CustomerGroupItemResolver } from "./customerGroupItem.resolver";

@Module({
  imports: [CustomerGroupItemModuleBase],
  controllers: [CustomerGroupItemController],
  providers: [CustomerGroupItemService, CustomerGroupItemResolver],
  exports: [CustomerGroupItemService],
})
export class CustomerGroupItemModule {}
