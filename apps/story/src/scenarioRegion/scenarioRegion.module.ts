import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScenarioRegionModuleBase } from "./base/scenarioRegion.module.base";
import { ScenarioRegionService } from "./scenarioRegion.service";
import { ScenarioRegionController } from "./scenarioRegion.controller";
import { ScenarioRegionGrpcController } from "./scenarioRegion.grpc.controller";
import { ScenarioRegionResolver } from "./scenarioRegion.resolver";

@Module({
  imports: [ScenarioRegionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScenarioRegionController, ScenarioRegionGrpcController],
  providers: [ScenarioRegionService, ScenarioRegionResolver],
  exports: [ScenarioRegionService],
})
export class ScenarioRegionModule {}
