import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureOnKillReputationService } from "./creatureOnKillReputation.service";
import { CreatureOnKillReputationControllerBase } from "./base/creatureOnKillReputation.controller.base";

@swagger.ApiTags("creatureOnKillReputations")
@common.Controller("creatureOnKillReputations")
export class CreatureOnKillReputationController extends CreatureOnKillReputationControllerBase {
  constructor(
    protected readonly service: CreatureOnKillReputationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
