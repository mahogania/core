import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerClasslevelstatsService } from "./playerClasslevelstats.service";
import { PlayerClasslevelstatsControllerBase } from "./base/playerClasslevelstats.controller.base";

@swagger.ApiTags("playerClasslevelstats")
@common.Controller("playerClasslevelstats")
export class PlayerClasslevelstatsController extends PlayerClasslevelstatsControllerBase {
  constructor(
    protected readonly service: PlayerClasslevelstatsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
