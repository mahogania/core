import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AreaTriggerScriptService } from "./areaTriggerScript.service";
import { AreaTriggerScriptControllerBase } from "./base/areaTriggerScript.controller.base";

@swagger.ApiTags("areaTriggerScripts")
@common.Controller("areaTriggerScripts")
export class AreaTriggerScriptController extends AreaTriggerScriptControllerBase {
  constructor(
    protected readonly service: AreaTriggerScriptService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
