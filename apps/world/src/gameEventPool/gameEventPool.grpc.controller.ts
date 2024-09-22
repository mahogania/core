import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventPoolService } from "./gameEventPool.service";
import { GameEventPoolGrpcControllerBase } from "./base/gameEventPool.grpc.controller.base";

@swagger.ApiTags("gameEventPools")
@common.Controller("gameEventPools")
export class GameEventPoolGrpcController extends GameEventPoolGrpcControllerBase {
  constructor(protected readonly service: GameEventPoolService) {
    super(service);
  }
}
