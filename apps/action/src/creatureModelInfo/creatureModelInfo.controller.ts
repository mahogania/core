import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureModelInfoService } from "./creatureModelInfo.service";
import { CreatureModelInfoControllerBase } from "./base/creatureModelInfo.controller.base";

@swagger.ApiTags("creatureModelInfos")
@common.Controller("creatureModelInfos")
export class CreatureModelInfoController extends CreatureModelInfoControllerBase {
  constructor(
    protected readonly service: CreatureModelInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
