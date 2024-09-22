import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AchievementScriptsService } from "./achievementScripts.service";
import { AchievementScriptsControllerBase } from "./base/achievementScripts.controller.base";

@swagger.ApiTags("achievementScripts")
@common.Controller("achievementScripts")
export class AchievementScriptsController extends AchievementScriptsControllerBase {
  constructor(
    protected readonly service: AchievementScriptsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
