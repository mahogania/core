import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpellService } from "./spell.service";
import { SpellControllerBase } from "./base/spell.controller.base";

@swagger.ApiTags("spells")
@common.Controller("spells")
export class SpellController extends SpellControllerBase {
  constructor(
    protected readonly service: SpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
