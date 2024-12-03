import { Module } from "@nestjs/common";
import { DeliveryTripModuleBase } from "./base/deliveryTrip.module.base";
import { DeliveryTripService } from "./deliveryTrip.service";
import { DeliveryTripController } from "./deliveryTrip.controller";
import { DeliveryTripResolver } from "./deliveryTrip.resolver";

@Module({
  imports: [DeliveryTripModuleBase],
  controllers: [DeliveryTripController],
  providers: [DeliveryTripService, DeliveryTripResolver],
  exports: [DeliveryTripService],
})
export class DeliveryTripModule {}
