import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InstanceSpawnGroupsService } from "./instanceSpawnGroups.service";
import { InstanceSpawnGroupsControllerBase } from "./base/instanceSpawnGroups.controller.base";

@swagger.ApiTags("instanceSpawnGroups")
@common.Controller("instanceSpawnGroups")
export class InstanceSpawnGroupsController extends InstanceSpawnGroupsControllerBase {
  constructor(
    protected readonly service: InstanceSpawnGroupsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
