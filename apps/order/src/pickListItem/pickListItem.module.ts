import { Module } from "@nestjs/common";
import { PickListItemModuleBase } from "./base/pickListItem.module.base";
import { PickListItemService } from "./pickListItem.service";
import { PickListItemController } from "./pickListItem.controller";
import { PickListItemResolver } from "./pickListItem.resolver";

@Module({
  imports: [PickListItemModuleBase],
  controllers: [PickListItemController],
  providers: [PickListItemService, PickListItemResolver],
  exports: [PickListItemService],
})
export class PickListItemModule {}
