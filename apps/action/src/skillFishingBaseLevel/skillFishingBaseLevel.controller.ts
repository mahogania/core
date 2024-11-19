import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SkillFishingBaseLevelService } from "./skillFishingBaseLevel.service";
import { SkillFishingBaseLevelControllerBase } from "./base/skillFishingBaseLevel.controller.base";

@swagger.ApiTags("skillFishingBaseLevels")
@common.Controller("skillFishingBaseLevels")
export class SkillFishingBaseLevelController extends SkillFishingBaseLevelControllerBase {
  constructor(
    protected readonly service: SkillFishingBaseLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
