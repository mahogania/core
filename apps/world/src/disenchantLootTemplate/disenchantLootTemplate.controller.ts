import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DisenchantLootTemplateService } from "./disenchantLootTemplate.service";
import { DisenchantLootTemplateControllerBase } from "./base/disenchantLootTemplate.controller.base";

@swagger.ApiTags("disenchantLootTemplates")
@common.Controller("disenchantLootTemplates")
export class DisenchantLootTemplateController extends DisenchantLootTemplateControllerBase {
  constructor(
    protected readonly service: DisenchantLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
