import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerFactionAchievementService } from "./playerFactionAchievement.service";
import { PlayerFactionAchievementControllerBase } from "./base/playerFactionAchievement.controller.base";

@swagger.ApiTags("playerFactionAchievements")
@common.Controller("playerFactionAchievements")
export class PlayerFactionAchievementController extends PlayerFactionAchievementControllerBase {
  constructor(
    protected readonly service: PlayerFactionAchievementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
