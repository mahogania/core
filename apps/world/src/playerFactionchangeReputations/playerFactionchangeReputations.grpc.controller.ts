import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerFactionchangeReputationsService } from "./playerFactionchangeReputations.service";
import { PlayerFactionchangeReputationsGrpcControllerBase } from "./base/playerFactionchangeReputations.grpc.controller.base";

@swagger.ApiTags("playerFactionchangeReputations")
@common.Controller("playerFactionchangeReputations")
export class PlayerFactionchangeReputationsGrpcController extends PlayerFactionchangeReputationsGrpcControllerBase {
  constructor(
    protected readonly service: PlayerFactionchangeReputationsService
  ) {
    super(service);
  }
}
