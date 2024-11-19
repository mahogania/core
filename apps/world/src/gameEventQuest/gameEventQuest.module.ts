import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventQuestModuleBase } from "./base/gameEventQuest.module.base";
import { GameEventQuestService } from "./gameEventQuest.service";
import { GameEventQuestController } from "./gameEventQuest.controller";
import { GameEventQuestGrpcController } from "./gameEventQuest.grpc.controller";
import { GameEventQuestResolver } from "./gameEventQuest.resolver";

@Module({
  imports: [GameEventQuestModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameEventQuestController, GameEventQuestGrpcController],
  providers: [GameEventQuestService, GameEventQuestResolver],
  exports: [GameEventQuestService],
})
export class GameEventQuestModule {}
