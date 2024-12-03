import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureTemplateDifficultyService } from "./creatureTemplateDifficulty.service";
import { CreatureTemplateDifficultyControllerBase } from "./base/creatureTemplateDifficulty.controller.base";

@swagger.ApiTags("creatureTemplateDifficulties")
@common.Controller("creatureTemplateDifficulties")
export class CreatureTemplateDifficultyController extends CreatureTemplateDifficultyControllerBase {
  constructor(
    protected readonly service: CreatureTemplateDifficultyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
