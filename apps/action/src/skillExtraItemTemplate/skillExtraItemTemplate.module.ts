import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SkillExtraItemTemplateModuleBase } from "./base/skillExtraItemTemplate.module.base";
import { SkillExtraItemTemplateService } from "./skillExtraItemTemplate.service";
import { SkillExtraItemTemplateController } from "./skillExtraItemTemplate.controller";
import { SkillExtraItemTemplateGrpcController } from "./skillExtraItemTemplate.grpc.controller";
import { SkillExtraItemTemplateResolver } from "./skillExtraItemTemplate.resolver";

@Module({
  imports: [SkillExtraItemTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    SkillExtraItemTemplateController,
    SkillExtraItemTemplateGrpcController,
  ],
  providers: [SkillExtraItemTemplateService, SkillExtraItemTemplateResolver],
  exports: [SkillExtraItemTemplateService],
})
export class SkillExtraItemTemplateModule {}
