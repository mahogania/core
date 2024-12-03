import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureEquipmentService } from "./creatureEquipment.service";
import { CreatureEquipmentControllerBase } from "./base/creatureEquipment.controller.base";

@swagger.ApiTags("creatureEquipments")
@common.Controller("creatureEquipments")
export class CreatureEquipmentController extends CreatureEquipmentControllerBase {
  constructor(
    protected readonly service: CreatureEquipmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
