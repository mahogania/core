import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureMovementInfoService } from "./creatureMovementInfo.service";
import { CreatureMovementInfoControllerBase } from "./base/creatureMovementInfo.controller.base";

@swagger.ApiTags("creatureMovementInfos")
@common.Controller("creatureMovementInfos")
export class CreatureMovementInfoController extends CreatureMovementInfoControllerBase {
  constructor(
    protected readonly service: CreatureMovementInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
