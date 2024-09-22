import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PhaseNameService } from "./phaseName.service";
import { PhaseNameControllerBase } from "./base/phaseName.controller.base";

@swagger.ApiTags("phaseNames")
@common.Controller("phaseNames")
export class PhaseNameController extends PhaseNameControllerBase {
  constructor(
    protected readonly service: PhaseNameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
