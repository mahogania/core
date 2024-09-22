import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EventScriptNamesService } from "./eventScriptNames.service";
import { EventScriptNamesControllerBase } from "./base/eventScriptNames.controller.base";

@swagger.ApiTags("eventScriptNames")
@common.Controller("eventScriptNames")
export class EventScriptNamesController extends EventScriptNamesControllerBase {
  constructor(
    protected readonly service: EventScriptNamesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
