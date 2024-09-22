import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventService } from "./gameEvent.service";
import { GameEventControllerBase } from "./base/gameEvent.controller.base";

@swagger.ApiTags("gameEvents")
@common.Controller("gameEvents")
export class GameEventController extends GameEventControllerBase {
  constructor(
    protected readonly service: GameEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
