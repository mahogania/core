import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureFormationsService } from "./creatureFormations.service";
import { CreatureFormationsControllerBase } from "./base/creatureFormations.controller.base";

@swagger.ApiTags("creatureFormations")
@common.Controller("creatureFormations")
export class CreatureFormationsController extends CreatureFormationsControllerBase {
  constructor(
    protected readonly service: CreatureFormationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
