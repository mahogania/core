import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventCreatureService } from "./gameEventCreature.service";
import { GameEventCreatureGrpcControllerBase } from "./base/gameEventCreature.grpc.controller.base";

@swagger.ApiTags("gameEventCreatures")
@common.Controller("gameEventCreatures")
export class GameEventCreatureGrpcController extends GameEventCreatureGrpcControllerBase {
  constructor(protected readonly service: GameEventCreatureService) {
    super(service);
  }
}
