import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GuildRewardsModuleBase } from "./base/guildRewards.module.base";
import { GuildRewardsService } from "./guildRewards.service";
import { GuildRewardsController } from "./guildRewards.controller";
import { GuildRewardsGrpcController } from "./guildRewards.grpc.controller";
import { GuildRewardsResolver } from "./guildRewards.resolver";

@Module({
  imports: [GuildRewardsModuleBase, forwardRef(() => AuthModule)],
  controllers: [GuildRewardsController, GuildRewardsGrpcController],
  providers: [GuildRewardsService, GuildRewardsResolver],
  exports: [GuildRewardsService],
})
export class GuildRewardsModule {}
