import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScenarioRegionService } from "./scenarioRegion.service";
import { ScenarioRegionControllerBase } from "./base/scenarioRegion.controller.base";

@swagger.ApiTags("scenarioRegions")
@common.Controller("scenarioRegions")
export class ScenarioRegionController extends ScenarioRegionControllerBase {
  constructor(
    protected readonly service: ScenarioRegionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
