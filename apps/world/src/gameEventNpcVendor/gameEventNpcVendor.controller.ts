import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventNpcVendorService } from "./gameEventNpcVendor.service";
import { GameEventNpcVendorControllerBase } from "./base/gameEventNpcVendor.controller.base";

@swagger.ApiTags("gameEventNpcVendors")
@common.Controller("gameEventNpcVendors")
export class GameEventNpcVendorController extends GameEventNpcVendorControllerBase {
  constructor(
    protected readonly service: GameEventNpcVendorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
