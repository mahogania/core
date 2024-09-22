import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GraveyardZoneService } from "./graveyardZone.service";
import { GraveyardZoneControllerBase } from "./base/graveyardZone.controller.base";

@swagger.ApiTags("graveyardZones")
@common.Controller("graveyardZones")
export class GraveyardZoneController extends GraveyardZoneControllerBase {
  constructor(
    protected readonly service: GraveyardZoneService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
