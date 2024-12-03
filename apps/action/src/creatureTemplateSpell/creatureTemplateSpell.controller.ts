import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureTemplateSpellService } from "./creatureTemplateSpell.service";
import { CreatureTemplateSpellControllerBase } from "./base/creatureTemplateSpell.controller.base";

@swagger.ApiTags("creatureTemplateSpells")
@common.Controller("creatureTemplateSpells")
export class CreatureTemplateSpellController extends CreatureTemplateSpellControllerBase {
  constructor(
    protected readonly service: CreatureTemplateSpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
