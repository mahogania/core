import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SmartScriptsService } from "./smartScripts.service";
import { SmartScriptsControllerBase } from "./base/smartScripts.controller.base";

@swagger.ApiTags("smartScripts")
@common.Controller("smartScripts")
export class SmartScriptsController extends SmartScriptsControllerBase {
  constructor(
    protected readonly service: SmartScriptsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
