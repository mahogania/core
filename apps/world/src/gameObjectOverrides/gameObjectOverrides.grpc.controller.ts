import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameObjectOverridesService } from "./gameObjectOverrides.service";
import { GameObjectOverridesGrpcControllerBase } from "./base/gameObjectOverrides.grpc.controller.base";

@swagger.ApiTags("gameObjectOverrides")
@common.Controller("gameObjectOverrides")
export class GameObjectOverridesGrpcController extends GameObjectOverridesGrpcControllerBase {
  constructor(protected readonly service: GameObjectOverridesService) {
    super(service);
  }
}
