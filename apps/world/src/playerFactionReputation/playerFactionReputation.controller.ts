import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerFactionReputationService } from "./playerFactionReputation.service";
import { PlayerFactionReputationControllerBase } from "./base/playerFactionReputation.controller.base";

@swagger.ApiTags("playerFactionReputations")
@common.Controller("playerFactionReputations")
export class PlayerFactionReputationController extends PlayerFactionReputationControllerBase {
  constructor(
    protected readonly service: PlayerFactionReputationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
