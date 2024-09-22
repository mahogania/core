import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GuildRewardsReqAchievementsModuleBase } from "./base/guildRewardsReqAchievements.module.base";
import { GuildRewardsReqAchievementsService } from "./guildRewardsReqAchievements.service";
import { GuildRewardsReqAchievementsController } from "./guildRewardsReqAchievements.controller";
import { GuildRewardsReqAchievementsGrpcController } from "./guildRewardsReqAchievements.grpc.controller";
import { GuildRewardsReqAchievementsResolver } from "./guildRewardsReqAchievements.resolver";

@Module({
  imports: [
    GuildRewardsReqAchievementsModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    GuildRewardsReqAchievementsController,
    GuildRewardsReqAchievementsGrpcController,
  ],
  providers: [
    GuildRewardsReqAchievementsService,
    GuildRewardsReqAchievementsResolver,
  ],
  exports: [GuildRewardsReqAchievementsService],
})
export class GuildRewardsReqAchievementsModule {}
