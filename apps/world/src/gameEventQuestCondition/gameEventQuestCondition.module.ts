import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventQuestConditionModuleBase } from "./base/gameEventQuestCondition.module.base";
import { GameEventQuestConditionService } from "./gameEventQuestCondition.service";
import { GameEventQuestConditionController } from "./gameEventQuestCondition.controller";
import { GameEventQuestConditionGrpcController } from "./gameEventQuestCondition.grpc.controller";
import { GameEventQuestConditionResolver } from "./gameEventQuestCondition.resolver";

@Module({
  imports: [GameEventQuestConditionModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GameEventQuestConditionController,
    GameEventQuestConditionGrpcController,
  ],
  providers: [GameEventQuestConditionService, GameEventQuestConditionResolver],
  exports: [GameEventQuestConditionService],
})
export class GameEventQuestConditionModule {}
