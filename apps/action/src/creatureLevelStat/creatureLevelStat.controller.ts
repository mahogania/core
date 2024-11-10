import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureLevelStatService } from "./creatureLevelStat.service";
import { CreatureLevelStatControllerBase } from "./base/creatureLevelStat.controller.base";

@swagger.ApiTags("creatureLevelStats")
@common.Controller("creatureLevelStats")
export class CreatureLevelStatController extends CreatureLevelStatControllerBase {
  constructor(
    protected readonly service: CreatureLevelStatService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
