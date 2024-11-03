import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestRewardItemService } from "./questRewardItem.service";
import { QuestRewardItemControllerBase } from "./base/questRewardItem.controller.base";

@swagger.ApiTags("questRewardItems")
@common.Controller("questRewardItems")
export class QuestRewardItemController extends QuestRewardItemControllerBase {
  constructor(
    protected readonly service: QuestRewardItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
