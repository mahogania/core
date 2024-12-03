import { Module } from "@nestjs/common";
import { ShipmentDeliveryNoteModuleBase } from "./base/shipmentDeliveryNote.module.base";
import { ShipmentDeliveryNoteService } from "./shipmentDeliveryNote.service";
import { ShipmentDeliveryNoteController } from "./shipmentDeliveryNote.controller";
import { ShipmentDeliveryNoteGrpcController } from "./shipmentDeliveryNote.grpc.controller";
import { ShipmentDeliveryNoteResolver } from "./shipmentDeliveryNote.resolver";

@Module({
  imports: [ShipmentDeliveryNoteModuleBase],
  controllers: [
    ShipmentDeliveryNoteController,
    ShipmentDeliveryNoteGrpcController,
  ],
  providers: [ShipmentDeliveryNoteService, ShipmentDeliveryNoteResolver],
  exports: [ShipmentDeliveryNoteService],
})
export class ShipmentDeliveryNoteModule {}
