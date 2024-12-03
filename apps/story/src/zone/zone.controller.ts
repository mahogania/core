import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ZoneService } from "./zone.service";
import { ZoneControllerBase } from "./base/zone.controller.base";

@swagger.ApiTags("zones")
@common.Controller("zones")
export class ZoneController extends ZoneControllerBase {
  constructor(
    protected readonly service: ZoneService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
