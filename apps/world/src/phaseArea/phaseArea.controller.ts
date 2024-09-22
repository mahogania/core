import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PhaseAreaService } from "./phaseArea.service";
import { PhaseAreaControllerBase } from "./base/phaseArea.controller.base";

@swagger.ApiTags("phaseAreas")
@common.Controller("phaseAreas")
export class PhaseAreaController extends PhaseAreaControllerBase {
  constructor(
    protected readonly service: PhaseAreaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
