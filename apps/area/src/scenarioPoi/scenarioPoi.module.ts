import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScenarioPoiModuleBase } from "./base/scenarioPoi.module.base";
import { ScenarioPoiService } from "./scenarioPoi.service";
import { ScenarioPoiController } from "./scenarioPoi.controller";
import { ScenarioPoiGrpcController } from "./scenarioPoi.grpc.controller";
import { ScenarioPoiResolver } from "./scenarioPoi.resolver";

@Module({
  imports: [ScenarioPoiModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScenarioPoiController, ScenarioPoiGrpcController],
  providers: [ScenarioPoiService, ScenarioPoiResolver],
  exports: [ScenarioPoiService],
})
export class ScenarioPoiModule {}
