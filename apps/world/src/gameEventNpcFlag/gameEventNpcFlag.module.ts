import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventNpcFlagModuleBase } from "./base/gameEventNpcFlag.module.base";
import { GameEventNpcFlagService } from "./gameEventNpcFlag.service";
import { GameEventNpcFlagController } from "./gameEventNpcFlag.controller";
import { GameEventNpcFlagGrpcController } from "./gameEventNpcFlag.grpc.controller";
import { GameEventNpcFlagResolver } from "./gameEventNpcFlag.resolver";

@Module({
  imports: [GameEventNpcFlagModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameEventNpcFlagController, GameEventNpcFlagGrpcController],
  providers: [GameEventNpcFlagService, GameEventNpcFlagResolver],
  exports: [GameEventNpcFlagService],
})
export class GameEventNpcFlagModule {}
