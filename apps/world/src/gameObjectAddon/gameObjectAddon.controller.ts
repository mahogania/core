import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameObjectAddonService } from "./gameObjectAddon.service";
import { GameObjectAddonControllerBase } from "./base/gameObjectAddon.controller.base";

@swagger.ApiTags("gameObjectAddons")
@common.Controller("gameObjectAddons")
export class GameObjectAddonController extends GameObjectAddonControllerBase {
  constructor(
    protected readonly service: GameObjectAddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
