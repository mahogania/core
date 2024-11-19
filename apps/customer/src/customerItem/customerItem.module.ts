import { Module } from "@nestjs/common";
import { CustomerItemModuleBase } from "./base/customerItem.module.base";
import { CustomerItemService } from "./customerItem.service";
import { CustomerItemController } from "./customerItem.controller";
import { CustomerItemResolver } from "./customerItem.resolver";

@Module({
  imports: [CustomerItemModuleBase],
  controllers: [CustomerItemController],
  providers: [CustomerItemService, CustomerItemResolver],
  exports: [CustomerItemService],
})
export class CustomerItemModule {}
