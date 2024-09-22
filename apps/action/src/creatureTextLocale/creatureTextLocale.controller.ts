import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureTextLocaleService } from "./creatureTextLocale.service";
import { CreatureTextLocaleControllerBase } from "./base/creatureTextLocale.controller.base";

@swagger.ApiTags("creatureTextLocales")
@common.Controller("creatureTextLocales")
export class CreatureTextLocaleController extends CreatureTextLocaleControllerBase {
  constructor(
    protected readonly service: CreatureTextLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
