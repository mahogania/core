import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AreaTriggerTemplateActionService } from "./areaTriggerTemplateAction.service";
import { AreaTriggerTemplateActionControllerBase } from "./base/areaTriggerTemplateAction.controller.base";

@swagger.ApiTags("areaTriggerTemplateActions")
@common.Controller("areaTriggerTemplateActions")
export class AreaTriggerTemplateActionController extends AreaTriggerTemplateActionControllerBase {
  constructor(
    protected readonly service: AreaTriggerTemplateActionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
