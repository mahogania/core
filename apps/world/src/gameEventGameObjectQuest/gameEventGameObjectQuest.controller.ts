import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventGameObjectQuestService } from "./gameEventGameObjectQuest.service";
import { GameEventGameObjectQuestControllerBase } from "./base/gameEventGameObjectQuest.controller.base";

@swagger.ApiTags("gameEventGameObjectQuests")
@common.Controller("gameEventGameObjectQuests")
export class GameEventGameObjectQuestController extends GameEventGameObjectQuestControllerBase {
  constructor(
    protected readonly service: GameEventGameObjectQuestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
