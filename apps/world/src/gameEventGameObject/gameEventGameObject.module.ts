import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventGameObjectModuleBase } from "./base/gameEventGameObject.module.base";
import { GameEventGameObjectService } from "./gameEventGameObject.service";
import { GameEventGameObjectController } from "./gameEventGameObject.controller";
import { GameEventGameObjectGrpcController } from "./gameEventGameObject.grpc.controller";
import { GameEventGameObjectResolver } from "./gameEventGameObject.resolver";

@Module({
  imports: [GameEventGameObjectModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GameEventGameObjectController,
    GameEventGameObjectGrpcController,
  ],
  providers: [GameEventGameObjectService, GameEventGameObjectResolver],
  exports: [GameEventGameObjectService],
})
export class GameEventGameObjectModule {}
