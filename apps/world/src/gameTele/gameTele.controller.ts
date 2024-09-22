import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameTeleService } from "./gameTele.service";
import { GameTeleControllerBase } from "./base/gameTele.controller.base";

@swagger.ApiTags("gameTeles")
@common.Controller("gameTeles")
export class GameTeleController extends GameTeleControllerBase {
  constructor(
    protected readonly service: GameTeleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
