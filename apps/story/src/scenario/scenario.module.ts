import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScenarioModuleBase } from "./base/scenario.module.base";
import { ScenarioService } from "./scenario.service";
import { ScenarioController } from "./scenario.controller";
import { ScenarioGrpcController } from "./scenario.grpc.controller";
import { ScenarioResolver } from "./scenario.resolver";

@Module({
  imports: [ScenarioModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScenarioController, ScenarioGrpcController],
  providers: [ScenarioService, ScenarioResolver],
  exports: [ScenarioService],
})
export class ScenarioModule {}
