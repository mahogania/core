import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestRequestItemsService } from "./questRequestItems.service";
import { QuestRequestItemsControllerBase } from "./base/questRequestItems.controller.base";

@swagger.ApiTags("questRequestItems")
@common.Controller("questRequestItems")
export class QuestRequestItemsController extends QuestRequestItemsControllerBase {
  constructor(
    protected readonly service: QuestRequestItemsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
