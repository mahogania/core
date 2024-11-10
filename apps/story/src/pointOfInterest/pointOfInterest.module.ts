import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PointOfInterestModuleBase } from "./base/pointOfInterest.module.base";
import { PointOfInterestService } from "./pointOfInterest.service";
import { PointOfInterestController } from "./pointOfInterest.controller";
import { PointOfInterestGrpcController } from "./pointOfInterest.grpc.controller";
import { PointOfInterestResolver } from "./pointOfInterest.resolver";

@Module({
  imports: [PointOfInterestModuleBase, forwardRef(() => AuthModule)],
  controllers: [PointOfInterestController, PointOfInterestGrpcController],
  providers: [PointOfInterestService, PointOfInterestResolver],
  exports: [PointOfInterestService],
})
export class PointOfInterestModule {}
