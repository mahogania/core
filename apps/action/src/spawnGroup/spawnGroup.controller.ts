import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpawnGroupService } from "./spawnGroup.service";
import { SpawnGroupControllerBase } from "./base/spawnGroup.controller.base";

@swagger.ApiTags("spawnGroups")
@common.Controller("spawnGroups")
export class SpawnGroupController extends SpawnGroupControllerBase {
  constructor(
    protected readonly service: SpawnGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
