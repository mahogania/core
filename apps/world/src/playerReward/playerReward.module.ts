import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerRewardModuleBase } from "./base/playerReward.module.base";
import { PlayerRewardService } from "./playerReward.service";
import { PlayerRewardController } from "./playerReward.controller";
import { PlayerRewardGrpcController } from "./playerReward.grpc.controller";
import { PlayerRewardResolver } from "./playerReward.resolver";

@Module({
  imports: [PlayerRewardModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlayerRewardController, PlayerRewardGrpcController],
  providers: [PlayerRewardService, PlayerRewardResolver],
  exports: [PlayerRewardService],
})
export class PlayerRewardModule {}
