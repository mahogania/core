import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerFactionSpellService } from "./playerFactionSpell.service";
import { PlayerFactionSpellControllerBase } from "./base/playerFactionSpell.controller.base";

@swagger.ApiTags("playerFactionSpells")
@common.Controller("playerFactionSpells")
export class PlayerFactionSpellController extends PlayerFactionSpellControllerBase {
  constructor(
    protected readonly service: PlayerFactionSpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
