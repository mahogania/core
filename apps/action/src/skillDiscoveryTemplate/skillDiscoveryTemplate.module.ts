import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SkillDiscoveryTemplateModuleBase } from "./base/skillDiscoveryTemplate.module.base";
import { SkillDiscoveryTemplateService } from "./skillDiscoveryTemplate.service";
import { SkillDiscoveryTemplateController } from "./skillDiscoveryTemplate.controller";
import { SkillDiscoveryTemplateGrpcController } from "./skillDiscoveryTemplate.grpc.controller";
import { SkillDiscoveryTemplateResolver } from "./skillDiscoveryTemplate.resolver";

@Module({
  imports: [SkillDiscoveryTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    SkillDiscoveryTemplateController,
    SkillDiscoveryTemplateGrpcController,
  ],
  providers: [SkillDiscoveryTemplateService, SkillDiscoveryTemplateResolver],
  exports: [SkillDiscoveryTemplateService],
})
export class SkillDiscoveryTemplateModule {}
