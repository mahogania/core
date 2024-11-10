import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerFactionTitleService } from "./playerFactionTitle.service";
import { PlayerFactionTitleControllerBase } from "./base/playerFactionTitle.controller.base";

@swagger.ApiTags("playerFactionTitles")
@common.Controller("playerFactionTitles")
export class PlayerFactionTitleController extends PlayerFactionTitleControllerBase {
  constructor(
    protected readonly service: PlayerFactionTitleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
