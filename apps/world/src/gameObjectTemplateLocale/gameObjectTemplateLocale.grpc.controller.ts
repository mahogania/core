import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameObjectTemplateLocaleService } from "./gameObjectTemplateLocale.service";
import { GameObjectTemplateLocaleGrpcControllerBase } from "./base/gameObjectTemplateLocale.grpc.controller.base";

@swagger.ApiTags("gameObjectTemplateLocales")
@common.Controller("gameObjectTemplateLocales")
export class GameObjectTemplateLocaleGrpcController extends GameObjectTemplateLocaleGrpcControllerBase {
  constructor(protected readonly service: GameObjectTemplateLocaleService) {
    super(service);
  }
}
