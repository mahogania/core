import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureTemplateService } from "./creatureTemplate.service";
import { CreatureTemplateControllerBase } from "./base/creatureTemplate.controller.base";

@swagger.ApiTags("creatureTemplates")
@common.Controller("creatureTemplates")
export class CreatureTemplateController extends CreatureTemplateControllerBase {
  constructor(
    protected readonly service: CreatureTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
