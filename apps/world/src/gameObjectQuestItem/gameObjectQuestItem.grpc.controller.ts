import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameObjectQuestItemService } from "./gameObjectQuestItem.service";
import { GameObjectQuestItemGrpcControllerBase } from "./base/gameObjectQuestItem.grpc.controller.base";

@swagger.ApiTags("gameObjectQuestItems")
@common.Controller("gameObjectQuestItems")
export class GameObjectQuestItemGrpcController extends GameObjectQuestItemGrpcControllerBase {
  constructor(protected readonly service: GameObjectQuestItemService) {
    super(service);
  }
}
