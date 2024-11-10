import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AreaScenarioTriggerModuleBase } from "./base/areaScenarioTrigger.module.base";
import { AreaScenarioTriggerService } from "./areaScenarioTrigger.service";
import { AreaScenarioTriggerController } from "./areaScenarioTrigger.controller";
import { AreaScenarioTriggerGrpcController } from "./areaScenarioTrigger.grpc.controller";
import { AreaScenarioTriggerResolver } from "./areaScenarioTrigger.resolver";

@Module({
  imports: [AreaScenarioTriggerModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    AreaScenarioTriggerController,
    AreaScenarioTriggerGrpcController,
  ],
  providers: [AreaScenarioTriggerService, AreaScenarioTriggerResolver],
  exports: [AreaScenarioTriggerService],
})
export class AreaScenarioTriggerModule {}
