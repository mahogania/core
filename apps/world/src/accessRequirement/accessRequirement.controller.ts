import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccessRequirementService } from "./accessRequirement.service";
import { AccessRequirementControllerBase } from "./base/accessRequirement.controller.base";

@swagger.ApiTags("accessRequirements")
@common.Controller("accessRequirements")
export class AccessRequirementController extends AccessRequirementControllerBase {
  constructor(
    protected readonly service: AccessRequirementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
