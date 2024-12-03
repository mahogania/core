import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShipmentDeliveryNoteService } from "./shipmentDeliveryNote.service";
import { ShipmentDeliveryNoteGrpcControllerBase } from "./base/shipmentDeliveryNote.grpc.controller.base";

@swagger.ApiTags("shipmentDeliveryNotes")
@common.Controller("shipmentDeliveryNotes")
export class ShipmentDeliveryNoteGrpcController extends ShipmentDeliveryNoteGrpcControllerBase {
  constructor(protected readonly service: ShipmentDeliveryNoteService) {
    super(service);
  }
}
