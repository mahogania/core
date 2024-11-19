import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameObjectService } from "./gameObject.service";
import { GameObjectControllerBase } from "./base/gameObject.controller.base";

@swagger.ApiTags("gameObjects")
@common.Controller("gameObjects")
export class GameObjectController extends GameObjectControllerBase {
  constructor(
    protected readonly service: GameObjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
