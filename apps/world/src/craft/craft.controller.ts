import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CraftService } from "./craft.service";
import { CraftControllerBase } from "./base/craft.controller.base";

@swagger.ApiTags("crafts")
@common.Controller("crafts")
export class CraftController extends CraftControllerBase {
  constructor(
    protected readonly service: CraftService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
