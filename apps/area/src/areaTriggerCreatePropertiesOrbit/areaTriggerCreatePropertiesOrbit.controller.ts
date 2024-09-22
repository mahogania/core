import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AreaTriggerCreatePropertiesOrbitService } from "./areaTriggerCreatePropertiesOrbit.service";
import { AreaTriggerCreatePropertiesOrbitControllerBase } from "./base/areaTriggerCreatePropertiesOrbit.controller.base";

@swagger.ApiTags("areaTriggerCreatePropertiesOrbits")
@common.Controller("areaTriggerCreatePropertiesOrbits")
export class AreaTriggerCreatePropertiesOrbitController extends AreaTriggerCreatePropertiesOrbitControllerBase {
  constructor(
    protected readonly service: AreaTriggerCreatePropertiesOrbitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
