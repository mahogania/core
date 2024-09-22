import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureLootTemplateService } from "./creatureLootTemplate.service";
import { CreatureLootTemplateControllerBase } from "./base/creatureLootTemplate.controller.base";

@swagger.ApiTags("creatureLootTemplates")
@common.Controller("creatureLootTemplates")
export class CreatureLootTemplateController extends CreatureLootTemplateControllerBase {
  constructor(
    protected readonly service: CreatureLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
