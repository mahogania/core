import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerFactionReputationService } from "./playerFactionReputation.service";
import { PlayerFactionReputationGrpcControllerBase } from "./base/playerFactionReputation.grpc.controller.base";

@swagger.ApiTags("playerFactionReputations")
@common.Controller("playerFactionReputations")
export class PlayerFactionReputationGrpcController extends PlayerFactionReputationGrpcControllerBase {
  constructor(protected readonly service: PlayerFactionReputationService) {
    super(service);
  }
}
