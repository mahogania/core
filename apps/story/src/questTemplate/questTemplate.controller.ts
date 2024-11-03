import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestTemplateService } from "./questTemplate.service";
import { QuestTemplateControllerBase } from "./base/questTemplate.controller.base";

@swagger.ApiTags("questTemplates")
@common.Controller("questTemplates")
export class QuestTemplateController extends QuestTemplateControllerBase {
  constructor(
    protected readonly service: QuestTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
