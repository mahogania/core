import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerFactionchangeReputationsService } from "./playerFactionchangeReputations.service";
import { PlayerFactionchangeReputationsControllerBase } from "./base/playerFactionchangeReputations.controller.base";

@swagger.ApiTags("playerFactionchangeReputations")
@common.Controller("playerFactionchangeReputations")
export class PlayerFactionchangeReputationsController extends PlayerFactionchangeReputationsControllerBase {
  constructor(
    protected readonly service: PlayerFactionchangeReputationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
