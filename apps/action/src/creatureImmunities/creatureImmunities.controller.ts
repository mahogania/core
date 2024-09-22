import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureImmunitiesService } from "./creatureImmunities.service";
import { CreatureImmunitiesControllerBase } from "./base/creatureImmunities.controller.base";

@swagger.ApiTags("creatureImmunities")
@common.Controller("creatureImmunities")
export class CreatureImmunitiesController extends CreatureImmunitiesControllerBase {
  constructor(
    protected readonly service: CreatureImmunitiesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
