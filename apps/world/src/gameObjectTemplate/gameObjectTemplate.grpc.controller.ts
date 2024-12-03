import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameObjectTemplateService } from "./gameObjectTemplate.service";
import { GameObjectTemplateGrpcControllerBase } from "./base/gameObjectTemplate.grpc.controller.base";

@swagger.ApiTags("gameObjectTemplates")
@common.Controller("gameObjectTemplates")
export class GameObjectTemplateGrpcController extends GameObjectTemplateGrpcControllerBase {
  constructor(protected readonly service: GameObjectTemplateService) {
    super(service);
  }
}
