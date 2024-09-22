import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AchievementRewardModuleBase } from "./base/achievementReward.module.base";
import { AchievementRewardService } from "./achievementReward.service";
import { AchievementRewardController } from "./achievementReward.controller";
import { AchievementRewardGrpcController } from "./achievementReward.grpc.controller";
import { AchievementRewardResolver } from "./achievementReward.resolver";

@Module({
  imports: [AchievementRewardModuleBase, forwardRef(() => AuthModule)],
  controllers: [AchievementRewardController, AchievementRewardGrpcController],
  providers: [AchievementRewardService, AchievementRewardResolver],
  exports: [AchievementRewardService],
})
export class AchievementRewardModule {}
