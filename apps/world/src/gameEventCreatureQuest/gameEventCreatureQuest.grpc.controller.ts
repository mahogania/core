import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventCreatureQuestService } from "./gameEventCreatureQuest.service";
import { GameEventCreatureQuestGrpcControllerBase } from "./base/gameEventCreatureQuest.grpc.controller.base";

@swagger.ApiTags("gameEventCreatureQuests")
@common.Controller("gameEventCreatureQuests")
export class GameEventCreatureQuestGrpcController extends GameEventCreatureQuestGrpcControllerBase {
  constructor(protected readonly service: GameEventCreatureQuestService) {
    super(service);
  }
}
