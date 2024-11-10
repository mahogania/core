import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventConditionModuleBase } from "./base/gameEventCondition.module.base";
import { GameEventConditionService } from "./gameEventCondition.service";
import { GameEventConditionController } from "./gameEventCondition.controller";
import { GameEventConditionGrpcController } from "./gameEventCondition.grpc.controller";
import { GameEventConditionResolver } from "./gameEventCondition.resolver";

@Module({
  imports: [GameEventConditionModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameEventConditionController, GameEventConditionGrpcController],
  providers: [GameEventConditionService, GameEventConditionResolver],
  exports: [GameEventConditionService],
})
export class GameEventConditionModule {}
