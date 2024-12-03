import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameObjectLootTemplateService } from "./gameObjectLootTemplate.service";
import { GameObjectLootTemplateGrpcControllerBase } from "./base/gameObjectLootTemplate.grpc.controller.base";

@swagger.ApiTags("gameObjectLootTemplates")
@common.Controller("gameObjectLootTemplates")
export class GameObjectLootTemplateGrpcController extends GameObjectLootTemplateGrpcControllerBase {
  constructor(protected readonly service: GameObjectLootTemplateService) {
    super(service);
  }
}
