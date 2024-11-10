import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameObjectQuestStarterModuleBase } from "./base/gameObjectQuestStarter.module.base";
import { GameObjectQuestStarterService } from "./gameObjectQuestStarter.service";
import { GameObjectQuestStarterController } from "./gameObjectQuestStarter.controller";
import { GameObjectQuestStarterGrpcController } from "./gameObjectQuestStarter.grpc.controller";
import { GameObjectQuestStarterResolver } from "./gameObjectQuestStarter.resolver";

@Module({
  imports: [GameObjectQuestStarterModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GameObjectQuestStarterController,
    GameObjectQuestStarterGrpcController,
  ],
  providers: [GameObjectQuestStarterService, GameObjectQuestStarterResolver],
  exports: [GameObjectQuestStarterService],
})
export class GameObjectQuestStarterModule {}
