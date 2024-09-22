import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NpcVendorService } from "./npcVendor.service";
import { NpcVendorControllerBase } from "./base/npcVendor.controller.base";

@swagger.ApiTags("npcVendors")
@common.Controller("npcVendors")
export class NpcVendorController extends NpcVendorControllerBase {
  constructor(
    protected readonly service: NpcVendorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
