import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerClasslevelstatsService } from "./playerClasslevelstats.service";
import { PlayerClasslevelstatsGrpcControllerBase } from "./base/playerClasslevelstats.grpc.controller.base";

@swagger.ApiTags("playerClasslevelstats")
@common.Controller("playerClasslevelstats")
export class PlayerClasslevelstatsGrpcController extends PlayerClasslevelstatsGrpcControllerBase {
  constructor(protected readonly service: PlayerClasslevelstatsService) {
    super(service);
  }
}
