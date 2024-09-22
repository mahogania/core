import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NpcSpellclickSpellsService } from "./npcSpellclickSpells.service";
import { NpcSpellclickSpellsControllerBase } from "./base/npcSpellclickSpells.controller.base";

@swagger.ApiTags("npcSpellclickSpells")
@common.Controller("npcSpellclickSpells")
export class NpcSpellclickSpellsController extends NpcSpellclickSpellsControllerBase {
  constructor(
    protected readonly service: NpcSpellclickSpellsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
