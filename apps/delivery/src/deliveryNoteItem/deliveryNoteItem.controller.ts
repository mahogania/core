import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryNoteItemService } from "./deliveryNoteItem.service";
import { DeliveryNoteItemControllerBase } from "./base/deliveryNoteItem.controller.base";

@swagger.ApiTags("deliveryNoteItems")
@common.Controller("deliveryNoteItems")
export class DeliveryNoteItemController extends DeliveryNoteItemControllerBase {
  constructor(protected readonly service: DeliveryNoteItemService) {
    super(service);
  }
}
