import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CraftLevelStatService } from "./craftLevelStat.service";
import { CraftLevelStatControllerBase } from "./base/craftLevelStat.controller.base";

@swagger.ApiTags("craftLevelStats")
@common.Controller("craftLevelStats")
export class CraftLevelStatController extends CraftLevelStatControllerBase {
  constructor(
    protected readonly service: CraftLevelStatService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
