import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerchoiceResponseRewardFactionService } from "./playerchoiceResponseRewardFaction.service";
import { PlayerchoiceResponseRewardFactionControllerBase } from "./base/playerchoiceResponseRewardFaction.controller.base";

@swagger.ApiTags("playerchoiceResponseRewardFactions")
@common.Controller("playerchoiceResponseRewardFactions")
export class PlayerchoiceResponseRewardFactionController extends PlayerchoiceResponseRewardFactionControllerBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardFactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
