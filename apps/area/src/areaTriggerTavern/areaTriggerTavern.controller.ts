import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AreaTriggerTavernService } from "./areaTriggerTavern.service";
import { AreaTriggerTavernControllerBase } from "./base/areaTriggerTavern.controller.base";

@swagger.ApiTags("areaTriggerTaverns")
@common.Controller("areaTriggerTaverns")
export class AreaTriggerTavernController extends AreaTriggerTavernControllerBase {
  constructor(
    protected readonly service: AreaTriggerTavernService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
