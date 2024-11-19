import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventQuestService } from "./gameEventQuest.service";
import { GameEventQuestControllerBase } from "./base/gameEventQuest.controller.base";

@swagger.ApiTags("gameEventQuests")
@common.Controller("gameEventQuests")
export class GameEventQuestController extends GameEventQuestControllerBase {
  constructor(
    protected readonly service: GameEventQuestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
