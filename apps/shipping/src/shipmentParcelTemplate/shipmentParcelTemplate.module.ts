import { Module } from "@nestjs/common";
import { ShipmentParcelTemplateModuleBase } from "./base/shipmentParcelTemplate.module.base";
import { ShipmentParcelTemplateService } from "./shipmentParcelTemplate.service";
import { ShipmentParcelTemplateController } from "./shipmentParcelTemplate.controller";
import { ShipmentParcelTemplateGrpcController } from "./shipmentParcelTemplate.grpc.controller";
import { ShipmentParcelTemplateResolver } from "./shipmentParcelTemplate.resolver";

@Module({
  imports: [ShipmentParcelTemplateModuleBase],
  controllers: [
    ShipmentParcelTemplateController,
    ShipmentParcelTemplateGrpcController,
  ],
  providers: [ShipmentParcelTemplateService, ShipmentParcelTemplateResolver],
  exports: [ShipmentParcelTemplateService],
})
export class ShipmentParcelTemplateModule {}
