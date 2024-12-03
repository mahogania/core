import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestRequestItemService } from "./questRequestItem.service";
import { QuestRequestItemControllerBase } from "./base/questRequestItem.controller.base";

@swagger.ApiTags("questRequestItems")
@common.Controller("questRequestItems")
export class QuestRequestItemController extends QuestRequestItemControllerBase {
  constructor(
    protected readonly service: QuestRequestItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
