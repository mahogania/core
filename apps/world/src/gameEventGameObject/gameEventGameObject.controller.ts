import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventGameObjectService } from "./gameEventGameObject.service";
import { GameEventGameObjectControllerBase } from "./base/gameEventGameObject.controller.base";

@swagger.ApiTags("gameEventGameObjects")
@common.Controller("gameEventGameObjects")
export class GameEventGameObjectController extends GameEventGameObjectControllerBase {
  constructor(
    protected readonly service: GameEventGameObjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
