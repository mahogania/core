import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventArenaSeasonsService } from "./gameEventArenaSeasons.service";
import { GameEventArenaSeasonsGrpcControllerBase } from "./base/gameEventArenaSeasons.grpc.controller.base";

@swagger.ApiTags("gameEventArenaSeasons")
@common.Controller("gameEventArenaSeasons")
export class GameEventArenaSeasonsGrpcController extends GameEventArenaSeasonsGrpcControllerBase {
  constructor(protected readonly service: GameEventArenaSeasonsService) {
    super(service);
  }
}
