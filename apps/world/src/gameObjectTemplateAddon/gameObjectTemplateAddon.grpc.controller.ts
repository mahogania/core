import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameObjectTemplateAddonService } from "./gameObjectTemplateAddon.service";
import { GameObjectTemplateAddonGrpcControllerBase } from "./base/gameObjectTemplateAddon.grpc.controller.base";

@swagger.ApiTags("gameObjectTemplateAddons")
@common.Controller("gameObjectTemplateAddons")
export class GameObjectTemplateAddonGrpcController extends GameObjectTemplateAddonGrpcControllerBase {
  constructor(protected readonly service: GameObjectTemplateAddonService) {
    super(service);
  }
}
