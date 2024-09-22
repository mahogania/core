import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerchoiceResponseRewardService } from "./playerchoiceResponseReward.service";
import { PlayerchoiceResponseRewardControllerBase } from "./base/playerchoiceResponseReward.controller.base";

@swagger.ApiTags("playerchoiceResponseRewards")
@common.Controller("playerchoiceResponseRewards")
export class PlayerchoiceResponseRewardController extends PlayerchoiceResponseRewardControllerBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
