import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventPoolService } from "./gameEventPool.service";
import { GameEventPoolControllerBase } from "./base/gameEventPool.controller.base";

@swagger.ApiTags("gameEventPools")
@common.Controller("gameEventPools")
export class GameEventPoolController extends GameEventPoolControllerBase {
  constructor(
    protected readonly service: GameEventPoolService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
