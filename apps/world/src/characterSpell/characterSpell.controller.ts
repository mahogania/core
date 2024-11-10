import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CharacterSpellService } from "./characterSpell.service";
import { CharacterSpellControllerBase } from "./base/characterSpell.controller.base";

@swagger.ApiTags("characterSpells")
@common.Controller("characterSpells")
export class CharacterSpellController extends CharacterSpellControllerBase {
  constructor(
    protected readonly service: CharacterSpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
