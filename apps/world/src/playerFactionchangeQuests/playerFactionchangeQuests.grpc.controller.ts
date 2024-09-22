import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerFactionchangeQuestsService } from "./playerFactionchangeQuests.service";
import { PlayerFactionchangeQuestsGrpcControllerBase } from "./base/playerFactionchangeQuests.grpc.controller.base";

@swagger.ApiTags("playerFactionchangeQuests")
@common.Controller("playerFactionchangeQuests")
export class PlayerFactionchangeQuestsGrpcController extends PlayerFactionchangeQuestsGrpcControllerBase {
  constructor(protected readonly service: PlayerFactionchangeQuestsService) {
    super(service);
  }
}
