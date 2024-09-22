import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AreaTriggerTemplateModuleBase } from "./base/areaTriggerTemplate.module.base";
import { AreaTriggerTemplateService } from "./areaTriggerTemplate.service";
import { AreaTriggerTemplateController } from "./areaTriggerTemplate.controller";
import { AreaTriggerTemplateGrpcController } from "./areaTriggerTemplate.grpc.controller";
import { AreaTriggerTemplateResolver } from "./areaTriggerTemplate.resolver";

@Module({
  imports: [AreaTriggerTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    AreaTriggerTemplateController,
    AreaTriggerTemplateGrpcController,
  ],
  providers: [AreaTriggerTemplateService, AreaTriggerTemplateResolver],
  exports: [AreaTriggerTemplateService],
})
export class AreaTriggerTemplateModule {}
