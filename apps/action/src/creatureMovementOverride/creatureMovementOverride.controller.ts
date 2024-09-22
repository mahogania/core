import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureMovementOverrideService } from "./creatureMovementOverride.service";
import { CreatureMovementOverrideControllerBase } from "./base/creatureMovementOverride.controller.base";

@swagger.ApiTags("creatureMovementOverrides")
@common.Controller("creatureMovementOverrides")
export class CreatureMovementOverrideController extends CreatureMovementOverrideControllerBase {
  constructor(
    protected readonly service: CreatureMovementOverrideService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
