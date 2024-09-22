import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventGameObjectService } from "./gameEventGameObject.service";
import { GameEventGameObjectGrpcControllerBase } from "./base/gameEventGameObject.grpc.controller.base";

@swagger.ApiTags("gameEventGameObjects")
@common.Controller("gameEventGameObjects")
export class GameEventGameObjectGrpcController extends GameEventGameObjectGrpcControllerBase {
  constructor(protected readonly service: GameEventGameObjectService) {
    super(service);
  }
}
