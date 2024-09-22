import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScenarioPoiPointsModuleBase } from "./base/scenarioPoiPoints.module.base";
import { ScenarioPoiPointsService } from "./scenarioPoiPoints.service";
import { ScenarioPoiPointsController } from "./scenarioPoiPoints.controller";
import { ScenarioPoiPointsGrpcController } from "./scenarioPoiPoints.grpc.controller";
import { ScenarioPoiPointsResolver } from "./scenarioPoiPoints.resolver";

@Module({
  imports: [ScenarioPoiPointsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScenarioPoiPointsController, ScenarioPoiPointsGrpcController],
  providers: [ScenarioPoiPointsService, ScenarioPoiPointsResolver],
  exports: [ScenarioPoiPointsService],
})
export class ScenarioPoiPointsModule {}
