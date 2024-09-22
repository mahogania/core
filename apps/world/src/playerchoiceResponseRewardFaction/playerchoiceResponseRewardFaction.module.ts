import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerchoiceResponseRewardFactionModuleBase } from "./base/playerchoiceResponseRewardFaction.module.base";
import { PlayerchoiceResponseRewardFactionService } from "./playerchoiceResponseRewardFaction.service";
import { PlayerchoiceResponseRewardFactionController } from "./playerchoiceResponseRewardFaction.controller";
import { PlayerchoiceResponseRewardFactionGrpcController } from "./playerchoiceResponseRewardFaction.grpc.controller";
import { PlayerchoiceResponseRewardFactionResolver } from "./playerchoiceResponseRewardFaction.resolver";

@Module({
  imports: [
    PlayerchoiceResponseRewardFactionModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    PlayerchoiceResponseRewardFactionController,
    PlayerchoiceResponseRewardFactionGrpcController,
  ],
  providers: [
    PlayerchoiceResponseRewardFactionService,
    PlayerchoiceResponseRewardFactionResolver,
  ],
  exports: [PlayerchoiceResponseRewardFactionService],
})
export class PlayerchoiceResponseRewardFactionModule {}
