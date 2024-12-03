import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProspectingLootTemplateService } from "./prospectingLootTemplate.service";
import { ProspectingLootTemplateControllerBase } from "./base/prospectingLootTemplate.controller.base";

@swagger.ApiTags("prospectingLootTemplates")
@common.Controller("prospectingLootTemplates")
export class ProspectingLootTemplateController extends ProspectingLootTemplateControllerBase {
  constructor(
    protected readonly service: ProspectingLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
