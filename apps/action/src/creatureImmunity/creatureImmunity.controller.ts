import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureImmunityService } from "./creatureImmunity.service";
import { CreatureImmunityControllerBase } from "./base/creatureImmunity.controller.base";

@swagger.ApiTags("creatureImmunities")
@common.Controller("creatureImmunities")
export class CreatureImmunityController extends CreatureImmunityControllerBase {
  constructor(
    protected readonly service: CreatureImmunityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
