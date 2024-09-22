import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EventScriptsService } from "./eventScripts.service";
import { EventScriptsControllerBase } from "./base/eventScripts.controller.base";

@swagger.ApiTags("eventScripts")
@common.Controller("eventScripts")
export class EventScriptsController extends EventScriptsControllerBase {
  constructor(
    protected readonly service: EventScriptsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
