import { Module } from "@nestjs/common";
import { FeatureModuleBase } from "./base/feature.module.base";
import { FeatureService } from "./feature.service";
import { FeatureController } from "./feature.controller";
import { FeatureGrpcController } from "./feature.grpc.controller";
import { FeatureResolver } from "./feature.resolver";

@Module({
  imports: [FeatureModuleBase],
  controllers: [FeatureController, FeatureGrpcController],
  providers: [FeatureService, FeatureResolver],
  exports: [FeatureService],
})
export class FeatureModule {}
