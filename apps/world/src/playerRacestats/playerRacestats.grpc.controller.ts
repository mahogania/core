import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerRacestatsService } from "./playerRacestats.service";
import { PlayerRacestatsGrpcControllerBase } from "./base/playerRacestats.grpc.controller.base";

@swagger.ApiTags("playerRacestats")
@common.Controller("playerRacestats")
export class PlayerRacestatsGrpcController extends PlayerRacestatsGrpcControllerBase {
  constructor(protected readonly service: PlayerRacestatsService) {
    super(service);
  }
}
