import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LfgDungeonRewardsService } from "./lfgDungeonRewards.service";
import { LfgDungeonRewardsControllerBase } from "./base/lfgDungeonRewards.controller.base";

@swagger.ApiTags("lfgDungeonRewards")
@common.Controller("lfgDungeonRewards")
export class LfgDungeonRewardsController extends LfgDungeonRewardsControllerBase {
  constructor(
    protected readonly service: LfgDungeonRewardsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
