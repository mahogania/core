import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureEquipTemplateService } from "./creatureEquipTemplate.service";
import { CreatureEquipTemplateControllerBase } from "./base/creatureEquipTemplate.controller.base";

@swagger.ApiTags("creatureEquipTemplates")
@common.Controller("creatureEquipTemplates")
export class CreatureEquipTemplateController extends CreatureEquipTemplateControllerBase {
  constructor(
    protected readonly service: CreatureEquipTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
