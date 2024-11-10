import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameObjectService } from "./gameObject.service";
import { GameObjectGrpcControllerBase } from "./base/gameObject.grpc.controller.base";

@swagger.ApiTags("gameObjects")
@common.Controller("gameObjects")
export class GameObjectGrpcController extends GameObjectGrpcControllerBase {
  constructor(protected readonly service: GameObjectService) {
    super(service);
  }
}
