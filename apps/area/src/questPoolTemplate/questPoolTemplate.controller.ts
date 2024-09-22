import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestPoolTemplateService } from "./questPoolTemplate.service";
import { QuestPoolTemplateControllerBase } from "./base/questPoolTemplate.controller.base";

@swagger.ApiTags("questPoolTemplates")
@common.Controller("questPoolTemplates")
export class QuestPoolTemplateController extends QuestPoolTemplateControllerBase {
  constructor(
    protected readonly service: QuestPoolTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
