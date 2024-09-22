import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventArenaSeasonsService } from "./gameEventArenaSeasons.service";
import { GameEventArenaSeasonsControllerBase } from "./base/gameEventArenaSeasons.controller.base";

@swagger.ApiTags("gameEventArenaSeasons")
@common.Controller("gameEventArenaSeasons")
export class GameEventArenaSeasonsController extends GameEventArenaSeasonsControllerBase {
  constructor(
    protected readonly service: GameEventArenaSeasonsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
