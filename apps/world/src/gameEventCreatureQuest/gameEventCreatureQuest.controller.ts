import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventCreatureQuestService } from "./gameEventCreatureQuest.service";
import { GameEventCreatureQuestControllerBase } from "./base/gameEventCreatureQuest.controller.base";

@swagger.ApiTags("gameEventCreatureQuests")
@common.Controller("gameEventCreatureQuests")
export class GameEventCreatureQuestController extends GameEventCreatureQuestControllerBase {
  constructor(
    protected readonly service: GameEventCreatureQuestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
