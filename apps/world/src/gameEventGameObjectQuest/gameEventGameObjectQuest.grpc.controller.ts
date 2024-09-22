import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventGameObjectQuestService } from "./gameEventGameObjectQuest.service";
import { GameEventGameObjectQuestGrpcControllerBase } from "./base/gameEventGameObjectQuest.grpc.controller.base";

@swagger.ApiTags("gameEventGameObjectQuests")
@common.Controller("gameEventGameObjectQuests")
export class GameEventGameObjectQuestGrpcController extends GameEventGameObjectQuestGrpcControllerBase {
  constructor(protected readonly service: GameEventGameObjectQuestService) {
    super(service);
  }
}
