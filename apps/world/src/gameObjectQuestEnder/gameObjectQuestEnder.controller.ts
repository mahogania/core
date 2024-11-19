import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameObjectQuestEnderService } from "./gameObjectQuestEnder.service";
import { GameObjectQuestEnderControllerBase } from "./base/gameObjectQuestEnder.controller.base";

@swagger.ApiTags("gameObjectQuestEnders")
@common.Controller("gameObjectQuestEnders")
export class GameObjectQuestEnderController extends GameObjectQuestEnderControllerBase {
  constructor(
    protected readonly service: GameObjectQuestEnderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
