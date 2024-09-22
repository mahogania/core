import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameObjectQuestStarterService } from "./gameObjectQuestStarter.service";
import { GameObjectQuestStarterControllerBase } from "./base/gameObjectQuestStarter.controller.base";

@swagger.ApiTags("gameObjectQuestStarters")
@common.Controller("gameObjectQuestStarters")
export class GameObjectQuestStarterController extends GameObjectQuestStarterControllerBase {
  constructor(
    protected readonly service: GameObjectQuestStarterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
