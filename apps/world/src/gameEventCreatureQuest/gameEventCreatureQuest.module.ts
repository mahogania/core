import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventCreatureQuestModuleBase } from "./base/gameEventCreatureQuest.module.base";
import { GameEventCreatureQuestService } from "./gameEventCreatureQuest.service";
import { GameEventCreatureQuestController } from "./gameEventCreatureQuest.controller";
import { GameEventCreatureQuestGrpcController } from "./gameEventCreatureQuest.grpc.controller";
import { GameEventCreatureQuestResolver } from "./gameEventCreatureQuest.resolver";

@Module({
  imports: [GameEventCreatureQuestModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GameEventCreatureQuestController,
    GameEventCreatureQuestGrpcController,
  ],
  providers: [GameEventCreatureQuestService, GameEventCreatureQuestResolver],
  exports: [GameEventCreatureQuestService],
})
export class GameEventCreatureQuestModule {}
