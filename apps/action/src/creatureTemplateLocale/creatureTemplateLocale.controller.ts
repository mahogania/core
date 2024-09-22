import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureTemplateLocaleService } from "./creatureTemplateLocale.service";
import { CreatureTemplateLocaleControllerBase } from "./base/creatureTemplateLocale.controller.base";

@swagger.ApiTags("creatureTemplateLocales")
@common.Controller("creatureTemplateLocales")
export class CreatureTemplateLocaleController extends CreatureTemplateLocaleControllerBase {
  constructor(
    protected readonly service: CreatureTemplateLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
