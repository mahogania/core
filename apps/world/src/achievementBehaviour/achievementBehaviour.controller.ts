import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AchievementBehaviourService } from "./achievementBehaviour.service";
import { AchievementBehaviourControllerBase } from "./base/achievementBehaviour.controller.base";

@swagger.ApiTags("achievementBehaviours")
@common.Controller("achievementBehaviours")
export class AchievementBehaviourController extends AchievementBehaviourControllerBase {
  constructor(
    protected readonly service: AchievementBehaviourService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
