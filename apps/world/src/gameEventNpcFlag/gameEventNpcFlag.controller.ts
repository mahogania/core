import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventNpcFlagService } from "./gameEventNpcFlag.service";
import { GameEventNpcFlagControllerBase } from "./base/gameEventNpcFlag.controller.base";

@swagger.ApiTags("gameEventNpcFlags")
@common.Controller("gameEventNpcFlags")
export class GameEventNpcFlagController extends GameEventNpcFlagControllerBase {
  constructor(
    protected readonly service: GameEventNpcFlagService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
