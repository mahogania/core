import { Module } from "@nestjs/common";
import { ShipmentParcelModuleBase } from "./base/shipmentParcel.module.base";
import { ShipmentParcelService } from "./shipmentParcel.service";
import { ShipmentParcelController } from "./shipmentParcel.controller";
import { ShipmentParcelGrpcController } from "./shipmentParcel.grpc.controller";
import { ShipmentParcelResolver } from "./shipmentParcel.resolver";

@Module({
  imports: [ShipmentParcelModuleBase],
  controllers: [ShipmentParcelController, ShipmentParcelGrpcController],
  providers: [ShipmentParcelService, ShipmentParcelResolver],
  exports: [ShipmentParcelService],
})
export class ShipmentParcelModule {}
