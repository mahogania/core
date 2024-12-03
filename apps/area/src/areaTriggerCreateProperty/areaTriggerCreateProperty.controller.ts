import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AreaTriggerCreatePropertyService } from "./areaTriggerCreateProperty.service";
import { AreaTriggerCreatePropertyControllerBase } from "./base/areaTriggerCreateProperty.controller.base";

@swagger.ApiTags("areaTriggerCreateProperties")
@common.Controller("areaTriggerCreateProperties")
export class AreaTriggerCreatePropertyController extends AreaTriggerCreatePropertyControllerBase {
  constructor(
    protected readonly service: AreaTriggerCreatePropertyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
