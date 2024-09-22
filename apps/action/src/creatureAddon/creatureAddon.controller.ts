import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureAddonService } from "./creatureAddon.service";
import { CreatureAddonControllerBase } from "./base/creatureAddon.controller.base";

@swagger.ApiTags("creatureAddons")
@common.Controller("creatureAddons")
export class CreatureAddonController extends CreatureAddonControllerBase {
  constructor(
    protected readonly service: CreatureAddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
