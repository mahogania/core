import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureTemplateResistanceService } from "./creatureTemplateResistance.service";
import { CreatureTemplateResistanceControllerBase } from "./base/creatureTemplateResistance.controller.base";

@swagger.ApiTags("creatureTemplateResistances")
@common.Controller("creatureTemplateResistances")
export class CreatureTemplateResistanceController extends CreatureTemplateResistanceControllerBase {
  constructor(
    protected readonly service: CreatureTemplateResistanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
