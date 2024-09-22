import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScenarioPoiPointsService } from "./scenarioPoiPoints.service";
import { ScenarioPoiPointsControllerBase } from "./base/scenarioPoiPoints.controller.base";

@swagger.ApiTags("scenarioPoiPoints")
@common.Controller("scenarioPoiPoints")
export class ScenarioPoiPointsController extends ScenarioPoiPointsControllerBase {
  constructor(
    protected readonly service: ScenarioPoiPointsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
