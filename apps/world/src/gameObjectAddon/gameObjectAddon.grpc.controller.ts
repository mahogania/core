import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameObjectAddonService } from "./gameObjectAddon.service";
import { GameObjectAddonGrpcControllerBase } from "./base/gameObjectAddon.grpc.controller.base";

@swagger.ApiTags("gameObjectAddons")
@common.Controller("gameObjectAddons")
export class GameObjectAddonGrpcController extends GameObjectAddonGrpcControllerBase {
  constructor(protected readonly service: GameObjectAddonService) {
    super(service);
  }
}
