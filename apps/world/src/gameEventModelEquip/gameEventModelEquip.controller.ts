import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventModelEquipService } from "./gameEventModelEquip.service";
import { GameEventModelEquipControllerBase } from "./base/gameEventModelEquip.controller.base";

@swagger.ApiTags("gameEventModelEquips")
@common.Controller("gameEventModelEquips")
export class GameEventModelEquipController extends GameEventModelEquipControllerBase {
  constructor(
    protected readonly service: GameEventModelEquipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
