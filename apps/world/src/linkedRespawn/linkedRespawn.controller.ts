import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LinkedRespawnService } from "./linkedRespawn.service";
import { LinkedRespawnControllerBase } from "./base/linkedRespawn.controller.base";

@swagger.ApiTags("linkedRespawns")
@common.Controller("linkedRespawns")
export class LinkedRespawnController extends LinkedRespawnControllerBase {
  constructor(
    protected readonly service: LinkedRespawnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
