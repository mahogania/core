import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventQuestService } from "./gameEventQuest.service";
import { GameEventQuestGrpcControllerBase } from "./base/gameEventQuest.grpc.controller.base";

@swagger.ApiTags("gameEventQuests")
@common.Controller("gameEventQuests")
export class GameEventQuestGrpcController extends GameEventQuestGrpcControllerBase {
  constructor(protected readonly service: GameEventQuestService) {
    super(service);
  }
}
