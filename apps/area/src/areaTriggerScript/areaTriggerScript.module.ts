import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AreaTriggerScriptModuleBase } from "./base/areaTriggerScript.module.base";
import { AreaTriggerScriptService } from "./areaTriggerScript.service";
import { AreaTriggerScriptController } from "./areaTriggerScript.controller";
import { AreaTriggerScriptGrpcController } from "./areaTriggerScript.grpc.controller";
import { AreaTriggerScriptResolver } from "./areaTriggerScript.resolver";

@Module({
  imports: [AreaTriggerScriptModuleBase, forwardRef(() => AuthModule)],
  controllers: [AreaTriggerScriptController, AreaTriggerScriptGrpcController],
  providers: [AreaTriggerScriptService, AreaTriggerScriptResolver],
  exports: [AreaTriggerScriptService],
})
export class AreaTriggerScriptModule {}
