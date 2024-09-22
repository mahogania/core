import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameObjectQuestItemService } from "./gameObjectQuestItem.service";
import { GameObjectQuestItemControllerBase } from "./base/gameObjectQuestItem.controller.base";

@swagger.ApiTags("gameObjectQuestItems")
@common.Controller("gameObjectQuestItems")
export class GameObjectQuestItemController extends GameObjectQuestItemControllerBase {
  constructor(
    protected readonly service: GameObjectQuestItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
