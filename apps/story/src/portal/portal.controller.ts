import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PortalService } from "./portal.service";
import { PortalControllerBase } from "./base/portal.controller.base";

@swagger.ApiTags("portals")
@common.Controller("portals")
export class PortalController extends PortalControllerBase {
  constructor(
    protected readonly service: PortalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
