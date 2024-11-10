import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AreaQuestTriggerService } from "./areaQuestTrigger.service";
import { AreaQuestTriggerControllerBase } from "./base/areaQuestTrigger.controller.base";

@swagger.ApiTags("areaQuestTriggers")
@common.Controller("areaQuestTriggers")
export class AreaQuestTriggerController extends AreaQuestTriggerControllerBase {
  constructor(
    protected readonly service: AreaQuestTriggerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
