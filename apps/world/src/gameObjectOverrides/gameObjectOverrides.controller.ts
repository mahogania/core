import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameObjectOverridesService } from "./gameObjectOverrides.service";
import { GameObjectOverridesControllerBase } from "./base/gameObjectOverrides.controller.base";

@swagger.ApiTags("gameObjectOverrides")
@common.Controller("gameObjectOverrides")
export class GameObjectOverridesController extends GameObjectOverridesControllerBase {
  constructor(
    protected readonly service: GameObjectOverridesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
