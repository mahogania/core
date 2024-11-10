import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestCompletionConditionalService } from "./questCompletionConditional.service";
import { QuestCompletionConditionalControllerBase } from "./base/questCompletionConditional.controller.base";

@swagger.ApiTags("questCompletionConditionals")
@common.Controller("questCompletionConditionals")
export class QuestCompletionConditionalController extends QuestCompletionConditionalControllerBase {
  constructor(
    protected readonly service: QuestCompletionConditionalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
