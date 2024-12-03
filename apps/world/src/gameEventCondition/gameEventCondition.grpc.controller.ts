import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventConditionService } from "./gameEventCondition.service";
import { GameEventConditionGrpcControllerBase } from "./base/gameEventCondition.grpc.controller.base";

@swagger.ApiTags("gameEventConditions")
@common.Controller("gameEventConditions")
export class GameEventConditionGrpcController extends GameEventConditionGrpcControllerBase {
  constructor(protected readonly service: GameEventConditionService) {
    super(service);
  }
}
