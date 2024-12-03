import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureFormationService } from "./creatureFormation.service";
import { CreatureFormationControllerBase } from "./base/creatureFormation.controller.base";

@swagger.ApiTags("creatureFormations")
@common.Controller("creatureFormations")
export class CreatureFormationController extends CreatureFormationControllerBase {
  constructor(
    protected readonly service: CreatureFormationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
