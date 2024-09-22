import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventPoolModuleBase } from "./base/gameEventPool.module.base";
import { GameEventPoolService } from "./gameEventPool.service";
import { GameEventPoolController } from "./gameEventPool.controller";
import { GameEventPoolGrpcController } from "./gameEventPool.grpc.controller";
import { GameEventPoolResolver } from "./gameEventPool.resolver";

@Module({
  imports: [GameEventPoolModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameEventPoolController, GameEventPoolGrpcController],
  providers: [GameEventPoolService, GameEventPoolResolver],
  exports: [GameEventPoolService],
})
export class GameEventPoolModule {}
