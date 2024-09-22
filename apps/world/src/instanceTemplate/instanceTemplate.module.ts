import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InstanceTemplateModuleBase } from "./base/instanceTemplate.module.base";
import { InstanceTemplateService } from "./instanceTemplate.service";
import { InstanceTemplateController } from "./instanceTemplate.controller";
import { InstanceTemplateGrpcController } from "./instanceTemplate.grpc.controller";
import { InstanceTemplateResolver } from "./instanceTemplate.resolver";

@Module({
  imports: [InstanceTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [InstanceTemplateController, InstanceTemplateGrpcController],
  providers: [InstanceTemplateService, InstanceTemplateResolver],
  exports: [InstanceTemplateService],
})
export class InstanceTemplateModule {}
