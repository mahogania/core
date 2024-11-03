import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScenarioService } from "./scenario.service";
import { ScenarioControllerBase } from "./base/scenario.controller.base";

@swagger.ApiTags("scenarios")
@common.Controller("scenarios")
export class ScenarioController extends ScenarioControllerBase {
  constructor(
    protected readonly service: ScenarioService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
