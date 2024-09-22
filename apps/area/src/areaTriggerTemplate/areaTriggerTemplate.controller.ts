import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AreaTriggerTemplateService } from "./areaTriggerTemplate.service";
import { AreaTriggerTemplateControllerBase } from "./base/areaTriggerTemplate.controller.base";

@swagger.ApiTags("areaTriggerTemplates")
@common.Controller("areaTriggerTemplates")
export class AreaTriggerTemplateController extends AreaTriggerTemplateControllerBase {
  constructor(
    protected readonly service: AreaTriggerTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
