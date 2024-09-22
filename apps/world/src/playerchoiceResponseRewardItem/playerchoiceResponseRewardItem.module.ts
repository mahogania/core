import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerchoiceResponseRewardItemModuleBase } from "./base/playerchoiceResponseRewardItem.module.base";
import { PlayerchoiceResponseRewardItemService } from "./playerchoiceResponseRewardItem.service";
import { PlayerchoiceResponseRewardItemController } from "./playerchoiceResponseRewardItem.controller";
import { PlayerchoiceResponseRewardItemGrpcController } from "./playerchoiceResponseRewardItem.grpc.controller";
import { PlayerchoiceResponseRewardItemResolver } from "./playerchoiceResponseRewardItem.resolver";

@Module({
  imports: [
    PlayerchoiceResponseRewardItemModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    PlayerchoiceResponseRewardItemController,
    PlayerchoiceResponseRewardItemGrpcController,
  ],
  providers: [
    PlayerchoiceResponseRewardItemService,
    PlayerchoiceResponseRewardItemResolver,
  ],
  exports: [PlayerchoiceResponseRewardItemService],
})
export class PlayerchoiceResponseRewardItemModule {}
