import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScriptSplineChainWaypointsService } from "./scriptSplineChainWaypoints.service";
import { ScriptSplineChainWaypointsControllerBase } from "./base/scriptSplineChainWaypoints.controller.base";

@swagger.ApiTags("scriptSplineChainWaypoints")
@common.Controller("scriptSplineChainWaypoints")
export class ScriptSplineChainWaypointsController extends ScriptSplineChainWaypointsControllerBase {
  constructor(
    protected readonly service: ScriptSplineChainWaypointsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
