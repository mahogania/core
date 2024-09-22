import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServersideSpellService } from "./serversideSpell.service";
import { ServersideSpellControllerBase } from "./base/serversideSpell.controller.base";

@swagger.ApiTags("serversideSpells")
@common.Controller("serversideSpells")
export class ServersideSpellController extends ServersideSpellControllerBase {
  constructor(
    protected readonly service: ServersideSpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
