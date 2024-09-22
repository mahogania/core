import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServersideSpellEffectService } from "./serversideSpellEffect.service";
import { ServersideSpellEffectControllerBase } from "./base/serversideSpellEffect.controller.base";

@swagger.ApiTags("serversideSpellEffects")
@common.Controller("serversideSpellEffects")
export class ServersideSpellEffectController extends ServersideSpellEffectControllerBase {
  constructor(
    protected readonly service: ServersideSpellEffectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
