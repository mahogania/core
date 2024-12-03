import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerRewardItemModuleBase } from "./base/playerRewardItem.module.base";
import { PlayerRewardItemService } from "./playerRewardItem.service";
import { PlayerRewardItemController } from "./playerRewardItem.controller";
import { PlayerRewardItemGrpcController } from "./playerRewardItem.grpc.controller";
import { PlayerRewardItemResolver } from "./playerRewardItem.resolver";

@Module({
  imports: [PlayerRewardItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlayerRewardItemController, PlayerRewardItemGrpcController],
  providers: [PlayerRewardItemService, PlayerRewardItemResolver],
  exports: [PlayerRewardItemService],
})
export class PlayerRewardItemModule {}
