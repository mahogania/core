import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestRequestItemsConditionalService } from "./questRequestItemsConditional.service";
import { QuestRequestItemsConditionalControllerBase } from "./base/questRequestItemsConditional.controller.base";

@swagger.ApiTags("questRequestItemsConditionals")
@common.Controller("questRequestItemsConditionals")
export class QuestRequestItemsConditionalController extends QuestRequestItemsConditionalControllerBase {
  constructor(
    protected readonly service: QuestRequestItemsConditionalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
