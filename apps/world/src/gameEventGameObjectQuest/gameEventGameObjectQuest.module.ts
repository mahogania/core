import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventGameObjectQuestModuleBase } from "./base/gameEventGameObjectQuest.module.base";
import { GameEventGameObjectQuestService } from "./gameEventGameObjectQuest.service";
import { GameEventGameObjectQuestController } from "./gameEventGameObjectQuest.controller";
import { GameEventGameObjectQuestGrpcController } from "./gameEventGameObjectQuest.grpc.controller";
import { GameEventGameObjectQuestResolver } from "./gameEventGameObjectQuest.resolver";

@Module({
  imports: [GameEventGameObjectQuestModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GameEventGameObjectQuestController,
    GameEventGameObjectQuestGrpcController,
  ],
  providers: [
    GameEventGameObjectQuestService,
    GameEventGameObjectQuestResolver,
  ],
  exports: [GameEventGameObjectQuestService],
})
export class GameEventGameObjectQuestModule {}
