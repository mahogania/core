import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JumpChargeParamsService } from "./jumpChargeParams.service";
import { JumpChargeParamsControllerBase } from "./base/jumpChargeParams.controller.base";

@swagger.ApiTags("jumpChargeParams")
@common.Controller("jumpChargeParams")
export class JumpChargeParamsController extends JumpChargeParamsControllerBase {
  constructor(
    protected readonly service: JumpChargeParamsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
