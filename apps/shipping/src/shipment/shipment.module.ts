import { Module } from "@nestjs/common";
import { ShipmentModuleBase } from "./base/shipment.module.base";
import { ShipmentService } from "./shipment.service";
import { ShipmentController } from "./shipment.controller";
import { ShipmentGrpcController } from "./shipment.grpc.controller";
import { ShipmentResolver } from "./shipment.resolver";

@Module({
  imports: [ShipmentModuleBase],
  controllers: [ShipmentController, ShipmentGrpcController],
  providers: [ShipmentService, ShipmentResolver],
  exports: [ShipmentService],
})
export class ShipmentModule {}
