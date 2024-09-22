import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerFactionchangeAchievementModuleBase } from "./base/playerFactionchangeAchievement.module.base";
import { PlayerFactionchangeAchievementService } from "./playerFactionchangeAchievement.service";
import { PlayerFactionchangeAchievementController } from "./playerFactionchangeAchievement.controller";
import { PlayerFactionchangeAchievementGrpcController } from "./playerFactionchangeAchievement.grpc.controller";
import { PlayerFactionchangeAchievementResolver } from "./playerFactionchangeAchievement.resolver";

@Module({
  imports: [
    PlayerFactionchangeAchievementModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    PlayerFactionchangeAchievementController,
    PlayerFactionchangeAchievementGrpcController,
  ],
  providers: [
    PlayerFactionchangeAchievementService,
    PlayerFactionchangeAchievementResolver,
  ],
  exports: [PlayerFactionchangeAchievementService],
})
export class PlayerFactionchangeAchievementModule {}
