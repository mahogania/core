import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScenarioPoiService } from "./scenarioPoi.service";
import { ScenarioPoiControllerBase } from "./base/scenarioPoi.controller.base";

@swagger.ApiTags("scenarioPois")
@common.Controller("scenarioPois")
export class ScenarioPoiController extends ScenarioPoiControllerBase {
  constructor(
    protected readonly service: ScenarioPoiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
