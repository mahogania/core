import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpellEffectService } from "./spellEffect.service";
import { SpellEffectControllerBase } from "./base/spellEffect.controller.base";

@swagger.ApiTags("spellEffects")
@common.Controller("spellEffects")
export class SpellEffectController extends SpellEffectControllerBase {
  constructor(
    protected readonly service: SpellEffectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
