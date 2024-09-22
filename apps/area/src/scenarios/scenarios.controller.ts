import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScenariosService } from "./scenarios.service";
import { ScenariosControllerBase } from "./base/scenarios.controller.base";

@swagger.ApiTags("scenarios")
@common.Controller("scenarios")
export class ScenariosController extends ScenariosControllerBase {
  constructor(
    protected readonly service: ScenariosService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
