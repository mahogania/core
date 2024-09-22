import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayercreateinfoCastSpellService } from "./playercreateinfoCastSpell.service";
import { PlayercreateinfoCastSpellControllerBase } from "./base/playercreateinfoCastSpell.controller.base";

@swagger.ApiTags("playercreateinfoCastSpells")
@common.Controller("playercreateinfoCastSpells")
export class PlayercreateinfoCastSpellController extends PlayercreateinfoCastSpellControllerBase {
  constructor(
    protected readonly service: PlayercreateinfoCastSpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
