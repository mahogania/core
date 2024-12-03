import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerFactionQuestService } from "./playerFactionQuest.service";
import { PlayerFactionQuestControllerBase } from "./base/playerFactionQuest.controller.base";

@swagger.ApiTags("playerFactionQuests")
@common.Controller("playerFactionQuests")
export class PlayerFactionQuestController extends PlayerFactionQuestControllerBase {
  constructor(
    protected readonly service: PlayerFactionQuestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
