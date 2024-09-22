import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayercreateinfoActionModuleBase } from "./base/playercreateinfoAction.module.base";
import { PlayercreateinfoActionService } from "./playercreateinfoAction.service";
import { PlayercreateinfoActionController } from "./playercreateinfoAction.controller";
import { PlayercreateinfoActionGrpcController } from "./playercreateinfoAction.grpc.controller";
import { PlayercreateinfoActionResolver } from "./playercreateinfoAction.resolver";

@Module({
  imports: [PlayercreateinfoActionModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    PlayercreateinfoActionController,
    PlayercreateinfoActionGrpcController,
  ],
  providers: [PlayercreateinfoActionService, PlayercreateinfoActionResolver],
  exports: [PlayercreateinfoActionService],
})
export class PlayercreateinfoActionModule {}
