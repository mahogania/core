import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AreaTriggerCreatePropertiesSplinePointModuleBase } from "./base/areaTriggerCreatePropertiesSplinePoint.module.base";
import { AreaTriggerCreatePropertiesSplinePointService } from "./areaTriggerCreatePropertiesSplinePoint.service";
import { AreaTriggerCreatePropertiesSplinePointController } from "./areaTriggerCreatePropertiesSplinePoint.controller";
import { AreaTriggerCreatePropertiesSplinePointGrpcController } from "./areaTriggerCreatePropertiesSplinePoint.grpc.controller";
import { AreaTriggerCreatePropertiesSplinePointResolver } from "./areaTriggerCreatePropertiesSplinePoint.resolver";

@Module({
  imports: [
    AreaTriggerCreatePropertiesSplinePointModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    AreaTriggerCreatePropertiesSplinePointController,
    AreaTriggerCreatePropertiesSplinePointGrpcController,
  ],
  providers: [
    AreaTriggerCreatePropertiesSplinePointService,
    AreaTriggerCreatePropertiesSplinePointResolver,
  ],
  exports: [AreaTriggerCreatePropertiesSplinePointService],
})
export class AreaTriggerCreatePropertiesSplinePointModule {}
