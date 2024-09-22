import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureTemplateMovementService } from "./creatureTemplateMovement.service";
import { CreatureTemplateMovementControllerBase } from "./base/creatureTemplateMovement.controller.base";

@swagger.ApiTags("creatureTemplateMovements")
@common.Controller("creatureTemplateMovements")
export class CreatureTemplateMovementController extends CreatureTemplateMovementControllerBase {
  constructor(
    protected readonly service: CreatureTemplateMovementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
