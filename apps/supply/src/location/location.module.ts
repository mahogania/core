import { Module } from "@nestjs/common";
import { LocationModuleBase } from "./base/location.module.base";
import { LocationService } from "./location.service";
import { LocationController } from "./location.controller";
import { LocationGrpcController } from "./location.grpc.controller";
import { LocationResolver } from "./location.resolver";

@Module({
  imports: [LocationModuleBase],
  controllers: [LocationController, LocationGrpcController],
  providers: [LocationService, LocationResolver],
  exports: [LocationService],
})
export class LocationModule {}
