import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureTemplateAddonService } from "./creatureTemplateAddon.service";
import { CreatureTemplateAddonControllerBase } from "./base/creatureTemplateAddon.controller.base";

@swagger.ApiTags("creatureTemplateAddons")
@common.Controller("creatureTemplateAddons")
export class CreatureTemplateAddonController extends CreatureTemplateAddonControllerBase {
  constructor(
    protected readonly service: CreatureTemplateAddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
