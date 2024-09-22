import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameObjectQuestEnderModuleBase } from "./base/gameObjectQuestEnder.module.base";
import { GameObjectQuestEnderService } from "./gameObjectQuestEnder.service";
import { GameObjectQuestEnderController } from "./gameObjectQuestEnder.controller";
import { GameObjectQuestEnderGrpcController } from "./gameObjectQuestEnder.grpc.controller";
import { GameObjectQuestEnderResolver } from "./gameObjectQuestEnder.resolver";

@Module({
  imports: [GameObjectQuestEnderModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GameObjectQuestEnderController,
    GameObjectQuestEnderGrpcController,
  ],
  providers: [GameObjectQuestEnderService, GameObjectQuestEnderResolver],
  exports: [GameObjectQuestEnderService],
})
export class GameObjectQuestEnderModule {}
