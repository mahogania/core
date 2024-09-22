import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerRacestatsService } from "./playerRacestats.service";
import { PlayerRacestatsControllerBase } from "./base/playerRacestats.controller.base";

@swagger.ApiTags("playerRacestats")
@common.Controller("playerRacestats")
export class PlayerRacestatsController extends PlayerRacestatsControllerBase {
  constructor(
    protected readonly service: PlayerRacestatsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
