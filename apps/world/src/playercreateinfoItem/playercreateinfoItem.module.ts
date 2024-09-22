import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayercreateinfoItemModuleBase } from "./base/playercreateinfoItem.module.base";
import { PlayercreateinfoItemService } from "./playercreateinfoItem.service";
import { PlayercreateinfoItemController } from "./playercreateinfoItem.controller";
import { PlayercreateinfoItemGrpcController } from "./playercreateinfoItem.grpc.controller";
import { PlayercreateinfoItemResolver } from "./playercreateinfoItem.resolver";

@Module({
  imports: [PlayercreateinfoItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    PlayercreateinfoItemController,
    PlayercreateinfoItemGrpcController,
  ],
  providers: [PlayercreateinfoItemService, PlayercreateinfoItemResolver],
  exports: [PlayercreateinfoItemService],
})
export class PlayercreateinfoItemModule {}
