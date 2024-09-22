import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventNpcFlagService } from "./gameEventNpcFlag.service";
import { GameEventNpcFlagGrpcControllerBase } from "./base/gameEventNpcFlag.grpc.controller.base";

@swagger.ApiTags("gameEventNpcFlags")
@common.Controller("gameEventNpcFlags")
export class GameEventNpcFlagGrpcController extends GameEventNpcFlagGrpcControllerBase {
  constructor(protected readonly service: GameEventNpcFlagService) {
    super(service);
  }
}
