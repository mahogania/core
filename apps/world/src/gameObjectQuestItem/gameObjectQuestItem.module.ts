import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameObjectQuestItemModuleBase } from "./base/gameObjectQuestItem.module.base";
import { GameObjectQuestItemService } from "./gameObjectQuestItem.service";
import { GameObjectQuestItemController } from "./gameObjectQuestItem.controller";
import { GameObjectQuestItemGrpcController } from "./gameObjectQuestItem.grpc.controller";
import { GameObjectQuestItemResolver } from "./gameObjectQuestItem.resolver";

@Module({
  imports: [GameObjectQuestItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GameObjectQuestItemController,
    GameObjectQuestItemGrpcController,
  ],
  providers: [GameObjectQuestItemService, GameObjectQuestItemResolver],
  exports: [GameObjectQuestItemService],
})
export class GameObjectQuestItemModule {}
