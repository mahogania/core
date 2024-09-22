import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventSeasonalQuestRelationModuleBase } from "./base/gameEventSeasonalQuestRelation.module.base";
import { GameEventSeasonalQuestRelationService } from "./gameEventSeasonalQuestRelation.service";
import { GameEventSeasonalQuestRelationController } from "./gameEventSeasonalQuestRelation.controller";
import { GameEventSeasonalQuestRelationGrpcController } from "./gameEventSeasonalQuestRelation.grpc.controller";
import { GameEventSeasonalQuestRelationResolver } from "./gameEventSeasonalQuestRelation.resolver";

@Module({
  imports: [
    GameEventSeasonalQuestRelationModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    GameEventSeasonalQuestRelationController,
    GameEventSeasonalQuestRelationGrpcController,
  ],
  providers: [
    GameEventSeasonalQuestRelationService,
    GameEventSeasonalQuestRelationResolver,
  ],
  exports: [GameEventSeasonalQuestRelationService],
})
export class GameEventSeasonalQuestRelationModule {}
