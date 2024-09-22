import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestCompletionLogConditionalService } from "./questCompletionLogConditional.service";
import { QuestCompletionLogConditionalControllerBase } from "./base/questCompletionLogConditional.controller.base";

@swagger.ApiTags("questCompletionLogConditionals")
@common.Controller("questCompletionLogConditionals")
export class QuestCompletionLogConditionalController extends QuestCompletionLogConditionalControllerBase {
  constructor(
    protected readonly service: QuestCompletionLogConditionalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
