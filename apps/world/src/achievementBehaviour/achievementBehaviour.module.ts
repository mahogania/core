import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AchievementBehaviourModuleBase } from "./base/achievementBehaviour.module.base";
import { AchievementBehaviourService } from "./achievementBehaviour.service";
import { AchievementBehaviourController } from "./achievementBehaviour.controller";
import { AchievementBehaviourGrpcController } from "./achievementBehaviour.grpc.controller";
import { AchievementBehaviourResolver } from "./achievementBehaviour.resolver";

@Module({
  imports: [AchievementBehaviourModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    AchievementBehaviourController,
    AchievementBehaviourGrpcController,
  ],
  providers: [AchievementBehaviourService, AchievementBehaviourResolver],
  exports: [AchievementBehaviourService],
})
export class AchievementBehaviourModule {}
