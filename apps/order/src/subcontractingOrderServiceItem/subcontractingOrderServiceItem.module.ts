import { Module } from "@nestjs/common";
import { SubcontractingOrderServiceItemModuleBase } from "./base/subcontractingOrderServiceItem.module.base";
import { SubcontractingOrderServiceItemService } from "./subcontractingOrderServiceItem.service";
import { SubcontractingOrderServiceItemController } from "./subcontractingOrderServiceItem.controller";
import { SubcontractingOrderServiceItemResolver } from "./subcontractingOrderServiceItem.resolver";

@Module({
  imports: [SubcontractingOrderServiceItemModuleBase],
  controllers: [SubcontractingOrderServiceItemController],
  providers: [
    SubcontractingOrderServiceItemService,
    SubcontractingOrderServiceItemResolver,
  ],
  exports: [SubcontractingOrderServiceItemService],
})
export class SubcontractingOrderServiceItemModule {}
