import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerFactionchangeTitlesService } from "./playerFactionchangeTitles.service";
import { PlayerFactionchangeTitlesControllerBase } from "./base/playerFactionchangeTitles.controller.base";

@swagger.ApiTags("playerFactionchangeTitles")
@common.Controller("playerFactionchangeTitles")
export class PlayerFactionchangeTitlesController extends PlayerFactionchangeTitlesControllerBase {
  constructor(
    protected readonly service: PlayerFactionchangeTitlesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
