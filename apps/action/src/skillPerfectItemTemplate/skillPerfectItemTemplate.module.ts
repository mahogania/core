import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SkillPerfectItemTemplateModuleBase } from "./base/skillPerfectItemTemplate.module.base";
import { SkillPerfectItemTemplateService } from "./skillPerfectItemTemplate.service";
import { SkillPerfectItemTemplateController } from "./skillPerfectItemTemplate.controller";
import { SkillPerfectItemTemplateGrpcController } from "./skillPerfectItemTemplate.grpc.controller";
import { SkillPerfectItemTemplateResolver } from "./skillPerfectItemTemplate.resolver";

@Module({
  imports: [SkillPerfectItemTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    SkillPerfectItemTemplateController,
    SkillPerfectItemTemplateGrpcController,
  ],
  providers: [
    SkillPerfectItemTemplateService,
    SkillPerfectItemTemplateResolver,
  ],
  exports: [SkillPerfectItemTemplateService],
})
export class SkillPerfectItemTemplateModule {}
