import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameObjectTemplateAddonService } from "./gameObjectTemplateAddon.service";
import { GameObjectTemplateAddonControllerBase } from "./base/gameObjectTemplateAddon.controller.base";

@swagger.ApiTags("gameObjectTemplateAddons")
@common.Controller("gameObjectTemplateAddons")
export class GameObjectTemplateAddonController extends GameObjectTemplateAddonControllerBase {
  constructor(
    protected readonly service: GameObjectTemplateAddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
