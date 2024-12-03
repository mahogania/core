import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PointsOfInterestLocaleModuleBase } from "./base/pointsOfInterestLocale.module.base";
import { PointsOfInterestLocaleService } from "./pointsOfInterestLocale.service";
import { PointsOfInterestLocaleController } from "./pointsOfInterestLocale.controller";
import { PointsOfInterestLocaleGrpcController } from "./pointsOfInterestLocale.grpc.controller";
import { PointsOfInterestLocaleResolver } from "./pointsOfInterestLocale.resolver";

@Module({
  imports: [PointsOfInterestLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    PointsOfInterestLocaleController,
    PointsOfInterestLocaleGrpcController,
  ],
  providers: [PointsOfInterestLocaleService, PointsOfInterestLocaleResolver],
  exports: [PointsOfInterestLocaleService],
})
export class PointsOfInterestLocaleModule {}
