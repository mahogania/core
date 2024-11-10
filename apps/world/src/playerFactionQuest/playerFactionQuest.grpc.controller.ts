import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerFactionQuestService } from "./playerFactionQuest.service";
import { PlayerFactionQuestGrpcControllerBase } from "./base/playerFactionQuest.grpc.controller.base";

@swagger.ApiTags("playerFactionQuests")
@common.Controller("playerFactionQuests")
export class PlayerFactionQuestGrpcController extends PlayerFactionQuestGrpcControllerBase {
  constructor(protected readonly service: PlayerFactionQuestService) {
    super(service);
  }
}
