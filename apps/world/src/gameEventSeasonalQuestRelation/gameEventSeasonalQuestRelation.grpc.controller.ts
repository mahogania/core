import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventSeasonalQuestRelationService } from "./gameEventSeasonalQuestRelation.service";
import { GameEventSeasonalQuestRelationGrpcControllerBase } from "./base/gameEventSeasonalQuestRelation.grpc.controller.base";

@swagger.ApiTags("gameEventSeasonalQuestRelations")
@common.Controller("gameEventSeasonalQuestRelations")
export class GameEventSeasonalQuestRelationGrpcController extends GameEventSeasonalQuestRelationGrpcControllerBase {
  constructor(
    protected readonly service: GameEventSeasonalQuestRelationService
  ) {
    super(service);
  }
}
