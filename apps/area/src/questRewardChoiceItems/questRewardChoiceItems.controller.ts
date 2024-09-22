import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestRewardChoiceItemsService } from "./questRewardChoiceItems.service";
import { QuestRewardChoiceItemsControllerBase } from "./base/questRewardChoiceItems.controller.base";

@swagger.ApiTags("questRewardChoiceItems")
@common.Controller("questRewardChoiceItems")
export class QuestRewardChoiceItemsController extends QuestRewardChoiceItemsControllerBase {
  constructor(
    protected readonly service: QuestRewardChoiceItemsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
