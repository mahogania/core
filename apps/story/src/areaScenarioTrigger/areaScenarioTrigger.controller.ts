import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AreaScenarioTriggerService } from "./areaScenarioTrigger.service";
import { AreaScenarioTriggerControllerBase } from "./base/areaScenarioTrigger.controller.base";

@swagger.ApiTags("areaScenarioTriggers")
@common.Controller("areaScenarioTriggers")
export class AreaScenarioTriggerController extends AreaScenarioTriggerControllerBase {
  constructor(
    protected readonly service: AreaScenarioTriggerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
