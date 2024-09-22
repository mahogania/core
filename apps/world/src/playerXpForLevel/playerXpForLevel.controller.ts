import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerXpForLevelService } from "./playerXpForLevel.service";
import { PlayerXpForLevelControllerBase } from "./base/playerXpForLevel.controller.base";

@swagger.ApiTags("playerXpForLevels")
@common.Controller("playerXpForLevels")
export class PlayerXpForLevelController extends PlayerXpForLevelControllerBase {
  constructor(
    protected readonly service: PlayerXpForLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
