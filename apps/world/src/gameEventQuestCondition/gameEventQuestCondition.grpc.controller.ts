import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventQuestConditionService } from "./gameEventQuestCondition.service";
import { GameEventQuestConditionGrpcControllerBase } from "./base/gameEventQuestCondition.grpc.controller.base";

@swagger.ApiTags("gameEventQuestConditions")
@common.Controller("gameEventQuestConditions")
export class GameEventQuestConditionGrpcController extends GameEventQuestConditionGrpcControllerBase {
  constructor(protected readonly service: GameEventQuestConditionService) {
    super(service);
  }
}
