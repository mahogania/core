import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameObjectQuestEnderService } from "./gameObjectQuestEnder.service";
import { GameObjectQuestEnderGrpcControllerBase } from "./base/gameObjectQuestEnder.grpc.controller.base";

@swagger.ApiTags("gameObjectQuestEnders")
@common.Controller("gameObjectQuestEnders")
export class GameObjectQuestEnderGrpcController extends GameObjectQuestEnderGrpcControllerBase {
  constructor(protected readonly service: GameObjectQuestEnderService) {
    super(service);
  }
}
