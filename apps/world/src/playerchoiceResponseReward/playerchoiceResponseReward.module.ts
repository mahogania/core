import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerchoiceResponseRewardModuleBase } from "./base/playerchoiceResponseReward.module.base";
import { PlayerchoiceResponseRewardService } from "./playerchoiceResponseReward.service";
import { PlayerchoiceResponseRewardController } from "./playerchoiceResponseReward.controller";
import { PlayerchoiceResponseRewardGrpcController } from "./playerchoiceResponseReward.grpc.controller";
import { PlayerchoiceResponseRewardResolver } from "./playerchoiceResponseReward.resolver";

@Module({
  imports: [PlayerchoiceResponseRewardModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    PlayerchoiceResponseRewardController,
    PlayerchoiceResponseRewardGrpcController,
  ],
  providers: [
    PlayerchoiceResponseRewardService,
    PlayerchoiceResponseRewardResolver,
  ],
  exports: [PlayerchoiceResponseRewardService],
})
export class PlayerchoiceResponseRewardModule {}
