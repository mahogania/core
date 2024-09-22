import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerFactionchangeSpellsService } from "./playerFactionchangeSpells.service";
import { PlayerFactionchangeSpellsControllerBase } from "./base/playerFactionchangeSpells.controller.base";

@swagger.ApiTags("playerFactionchangeSpells")
@common.Controller("playerFactionchangeSpells")
export class PlayerFactionchangeSpellsController extends PlayerFactionchangeSpellsControllerBase {
  constructor(
    protected readonly service: PlayerFactionchangeSpellsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
