import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerchoiceResponseRewardItemService } from "./playerchoiceResponseRewardItem.service";
import { PlayerchoiceResponseRewardItemControllerBase } from "./base/playerchoiceResponseRewardItem.controller.base";

@swagger.ApiTags("playerchoiceResponseRewardItems")
@common.Controller("playerchoiceResponseRewardItems")
export class PlayerchoiceResponseRewardItemController extends PlayerchoiceResponseRewardItemControllerBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
