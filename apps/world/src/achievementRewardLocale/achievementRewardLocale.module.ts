import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AchievementRewardLocaleModuleBase } from "./base/achievementRewardLocale.module.base";
import { AchievementRewardLocaleService } from "./achievementRewardLocale.service";
import { AchievementRewardLocaleController } from "./achievementRewardLocale.controller";
import { AchievementRewardLocaleGrpcController } from "./achievementRewardLocale.grpc.controller";
import { AchievementRewardLocaleResolver } from "./achievementRewardLocale.resolver";

@Module({
  imports: [AchievementRewardLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    AchievementRewardLocaleController,
    AchievementRewardLocaleGrpcController,
  ],
  providers: [AchievementRewardLocaleService, AchievementRewardLocaleResolver],
  exports: [AchievementRewardLocaleService],
})
export class AchievementRewardLocaleModule {}
