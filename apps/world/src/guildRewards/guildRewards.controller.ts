import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GuildRewardsService } from "./guildRewards.service";
import { GuildRewardsControllerBase } from "./base/guildRewards.controller.base";

@swagger.ApiTags("guildRewards")
@common.Controller("guildRewards")
export class GuildRewardsController extends GuildRewardsControllerBase {
  constructor(
    protected readonly service: GuildRewardsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
