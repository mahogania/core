import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerFactionAchievementModuleBase } from "./base/playerFactionAchievement.module.base";
import { PlayerFactionAchievementService } from "./playerFactionAchievement.service";
import { PlayerFactionAchievementController } from "./playerFactionAchievement.controller";
import { PlayerFactionAchievementGrpcController } from "./playerFactionAchievement.grpc.controller";
import { PlayerFactionAchievementResolver } from "./playerFactionAchievement.resolver";

@Module({
  imports: [PlayerFactionAchievementModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    PlayerFactionAchievementController,
    PlayerFactionAchievementGrpcController,
  ],
  providers: [
    PlayerFactionAchievementService,
    PlayerFactionAchievementResolver,
  ],
  exports: [PlayerFactionAchievementService],
})
export class PlayerFactionAchievementModule {}
