import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AchievementRewardLocaleService } from "./achievementRewardLocale.service";
import { AchievementRewardLocaleControllerBase } from "./base/achievementRewardLocale.controller.base";

@swagger.ApiTags("achievementRewardLocales")
@common.Controller("achievementRewardLocales")
export class AchievementRewardLocaleController extends AchievementRewardLocaleControllerBase {
  constructor(
    protected readonly service: AchievementRewardLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
