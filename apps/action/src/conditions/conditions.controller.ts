import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConditionsService } from "./conditions.service";
import { ConditionsControllerBase } from "./base/conditions.controller.base";

@swagger.ApiTags("conditions")
@common.Controller("conditions")
export class ConditionsController extends ConditionsControllerBase {
  constructor(
    protected readonly service: ConditionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
