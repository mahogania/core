import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SkillFishingBaseLevelModuleBase } from "./base/skillFishingBaseLevel.module.base";
import { SkillFishingBaseLevelService } from "./skillFishingBaseLevel.service";
import { SkillFishingBaseLevelController } from "./skillFishingBaseLevel.controller";
import { SkillFishingBaseLevelGrpcController } from "./skillFishingBaseLevel.grpc.controller";
import { SkillFishingBaseLevelResolver } from "./skillFishingBaseLevel.resolver";

@Module({
  imports: [SkillFishingBaseLevelModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    SkillFishingBaseLevelController,
    SkillFishingBaseLevelGrpcController,
  ],
  providers: [SkillFishingBaseLevelService, SkillFishingBaseLevelResolver],
  exports: [SkillFishingBaseLevelService],
})
export class SkillFishingBaseLevelModule {}
