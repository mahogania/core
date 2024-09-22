import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventService } from "./gameEvent.service";
import { GameEventGrpcControllerBase } from "./base/gameEvent.grpc.controller.base";

@swagger.ApiTags("gameEvents")
@common.Controller("gameEvents")
export class GameEventGrpcController extends GameEventGrpcControllerBase {
  constructor(protected readonly service: GameEventService) {
    super(service);
  }
}
