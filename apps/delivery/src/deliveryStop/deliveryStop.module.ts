import { Module } from "@nestjs/common";
import { DeliveryStopModuleBase } from "./base/deliveryStop.module.base";
import { DeliveryStopService } from "./deliveryStop.service";
import { DeliveryStopController } from "./deliveryStop.controller";
import { DeliveryStopResolver } from "./deliveryStop.resolver";

@Module({
  imports: [DeliveryStopModuleBase],
  controllers: [DeliveryStopController],
  providers: [DeliveryStopService, DeliveryStopResolver],
  exports: [DeliveryStopService],
})
export class DeliveryStopModule {}
