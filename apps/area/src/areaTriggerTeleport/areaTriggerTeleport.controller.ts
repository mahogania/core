import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AreaTriggerTeleportService } from "./areaTriggerTeleport.service";
import { AreaTriggerTeleportControllerBase } from "./base/areaTriggerTeleport.controller.base";

@swagger.ApiTags("areaTriggerTeleports")
@common.Controller("areaTriggerTeleports")
export class AreaTriggerTeleportController extends AreaTriggerTeleportControllerBase {
  constructor(
    protected readonly service: AreaTriggerTeleportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
