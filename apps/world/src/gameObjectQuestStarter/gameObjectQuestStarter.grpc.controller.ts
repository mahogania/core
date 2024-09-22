import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameObjectQuestStarterService } from "./gameObjectQuestStarter.service";
import { GameObjectQuestStarterGrpcControllerBase } from "./base/gameObjectQuestStarter.grpc.controller.base";

@swagger.ApiTags("gameObjectQuestStarters")
@common.Controller("gameObjectQuestStarters")
export class GameObjectQuestStarterGrpcController extends GameObjectQuestStarterGrpcControllerBase {
  constructor(protected readonly service: GameObjectQuestStarterService) {
    super(service);
  }
}
