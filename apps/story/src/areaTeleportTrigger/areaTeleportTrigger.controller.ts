import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AreaTeleportTriggerService } from "./areaTeleportTrigger.service";
import { AreaTeleportTriggerControllerBase } from "./base/areaTeleportTrigger.controller.base";

@swagger.ApiTags("areaTeleportTriggers")
@common.Controller("areaTeleportTriggers")
export class AreaTeleportTriggerController extends AreaTeleportTriggerControllerBase {
  constructor(
    protected readonly service: AreaTeleportTriggerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
