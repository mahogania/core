import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShipmentDeliveryNoteService } from "./shipmentDeliveryNote.service";
import { ShipmentDeliveryNoteControllerBase } from "./base/shipmentDeliveryNote.controller.base";

@swagger.ApiTags("shipmentDeliveryNotes")
@common.Controller("shipmentDeliveryNotes")
export class ShipmentDeliveryNoteController extends ShipmentDeliveryNoteControllerBase {
  constructor(protected readonly service: ShipmentDeliveryNoteService) {
    super(service);
  }
}
