import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestRequestItemConditionalService } from "./questRequestItemConditional.service";
import { QuestRequestItemConditionalControllerBase } from "./base/questRequestItemConditional.controller.base";

@swagger.ApiTags("questRequestItemConditionals")
@common.Controller("questRequestItemConditionals")
export class QuestRequestItemConditionalController extends QuestRequestItemConditionalControllerBase {
  constructor(
    protected readonly service: QuestRequestItemConditionalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
