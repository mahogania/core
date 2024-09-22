import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameTeleService } from "./gameTele.service";
import { GameTeleGrpcControllerBase } from "./base/gameTele.grpc.controller.base";

@swagger.ApiTags("gameTeles")
@common.Controller("gameTeles")
export class GameTeleGrpcController extends GameTeleGrpcControllerBase {
  constructor(protected readonly service: GameTeleService) {
    super(service);
  }
}
