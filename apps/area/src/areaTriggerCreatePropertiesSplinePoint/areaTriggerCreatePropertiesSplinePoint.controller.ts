import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AreaTriggerCreatePropertiesSplinePointService } from "./areaTriggerCreatePropertiesSplinePoint.service";
import { AreaTriggerCreatePropertiesSplinePointControllerBase } from "./base/areaTriggerCreatePropertiesSplinePoint.controller.base";

@swagger.ApiTags("areaTriggerCreatePropertiesSplinePoints")
@common.Controller("areaTriggerCreatePropertiesSplinePoints")
export class AreaTriggerCreatePropertiesSplinePointController extends AreaTriggerCreatePropertiesSplinePointControllerBase {
  constructor(
    protected readonly service: AreaTriggerCreatePropertiesSplinePointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
