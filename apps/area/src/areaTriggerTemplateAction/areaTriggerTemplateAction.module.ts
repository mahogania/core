import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AreaTriggerTemplateActionModuleBase } from "./base/areaTriggerTemplateAction.module.base";
import { AreaTriggerTemplateActionService } from "./areaTriggerTemplateAction.service";
import { AreaTriggerTemplateActionController } from "./areaTriggerTemplateAction.controller";
import { AreaTriggerTemplateActionGrpcController } from "./areaTriggerTemplateAction.grpc.controller";
import { AreaTriggerTemplateActionResolver } from "./areaTriggerTemplateAction.resolver";

@Module({
  imports: [AreaTriggerTemplateActionModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    AreaTriggerTemplateActionController,
    AreaTriggerTemplateActionGrpcController,
  ],
  providers: [
    AreaTriggerTemplateActionService,
    AreaTriggerTemplateActionResolver,
  ],
  exports: [AreaTriggerTemplateActionService],
})
export class AreaTriggerTemplateActionModule {}
