import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MountDefinitionsService } from "./mountDefinitions.service";
import { MountDefinitionsControllerBase } from "./base/mountDefinitions.controller.base";

@swagger.ApiTags("mountDefinitions")
@common.Controller("mountDefinitions")
export class MountDefinitionsController extends MountDefinitionsControllerBase {
  constructor(
    protected readonly service: MountDefinitionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
