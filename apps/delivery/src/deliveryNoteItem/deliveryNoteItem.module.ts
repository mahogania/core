import { Module } from "@nestjs/common";
import { DeliveryNoteItemModuleBase } from "./base/deliveryNoteItem.module.base";
import { DeliveryNoteItemService } from "./deliveryNoteItem.service";
import { DeliveryNoteItemController } from "./deliveryNoteItem.controller";
import { DeliveryNoteItemResolver } from "./deliveryNoteItem.resolver";

@Module({
  imports: [DeliveryNoteItemModuleBase],
  controllers: [DeliveryNoteItemController],
  providers: [DeliveryNoteItemService, DeliveryNoteItemResolver],
  exports: [DeliveryNoteItemService],
})
export class DeliveryNoteItemModule {}
