import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerFactionchangeAchievementService } from "./playerFactionchangeAchievement.service";
import { PlayerFactionchangeAchievementControllerBase } from "./base/playerFactionchangeAchievement.controller.base";

@swagger.ApiTags("playerFactionchangeAchievements")
@common.Controller("playerFactionchangeAchievements")
export class PlayerFactionchangeAchievementController extends PlayerFactionchangeAchievementControllerBase {
  constructor(
    protected readonly service: PlayerFactionchangeAchievementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
