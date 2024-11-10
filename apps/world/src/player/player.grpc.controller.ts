import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerService } from "./player.service";
import { PlayerGrpcControllerBase } from "./base/player.grpc.controller.base";

@swagger.ApiTags("players")
@common.Controller("players")
export class PlayerGrpcController extends PlayerGrpcControllerBase {
  constructor(protected readonly service: PlayerService) {
    super(service);
  }
}
