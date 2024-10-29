import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerRewardItemService } from "./playerRewardItem.service";
import { PlayerRewardItemControllerBase } from "./base/playerRewardItem.controller.base";

@swagger.ApiTags("playerRewardItems")
@common.Controller("playerRewardItems")
export class PlayerRewardItemController extends PlayerRewardItemControllerBase {
  constructor(
    protected readonly service: PlayerRewardItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
