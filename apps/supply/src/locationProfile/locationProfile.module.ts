import { Module } from "@nestjs/common";
import { LocationProfileModuleBase } from "./base/locationProfile.module.base";
import { LocationProfileService } from "./locationProfile.service";
import { LocationProfileController } from "./locationProfile.controller";
import { LocationProfileGrpcController } from "./locationProfile.grpc.controller";
import { LocationProfileResolver } from "./locationProfile.resolver";

@Module({
  imports: [LocationProfileModuleBase],
  controllers: [LocationProfileController, LocationProfileGrpcController],
  providers: [LocationProfileService, LocationProfileResolver],
  exports: [LocationProfileService],
})
export class LocationProfileModule {}
