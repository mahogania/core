import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PointsOfInterestModuleBase } from "./base/pointsOfInterest.module.base";
import { PointsOfInterestService } from "./pointsOfInterest.service";
import { PointsOfInterestController } from "./pointsOfInterest.controller";
import { PointsOfInterestGrpcController } from "./pointsOfInterest.grpc.controller";
import { PointsOfInterestResolver } from "./pointsOfInterest.resolver";

@Module({
  imports: [PointsOfInterestModuleBase, forwardRef(() => AuthModule)],
  controllers: [PointsOfInterestController, PointsOfInterestGrpcController],
  providers: [PointsOfInterestService, PointsOfInterestResolver],
  exports: [PointsOfInterestService],
})
export class PointsOfInterestModule {}
