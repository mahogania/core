import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerRewardService } from "./playerReward.service";
import { PlayerRewardControllerBase } from "./base/playerReward.controller.base";

@swagger.ApiTags("playerRewards")
@common.Controller("playerRewards")
export class PlayerRewardController extends PlayerRewardControllerBase {
  constructor(
    protected readonly service: PlayerRewardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
