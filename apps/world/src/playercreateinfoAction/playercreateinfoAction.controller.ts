import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayercreateinfoActionService } from "./playercreateinfoAction.service";
import { PlayercreateinfoActionControllerBase } from "./base/playercreateinfoAction.controller.base";

@swagger.ApiTags("playercreateinfoActions")
@common.Controller("playercreateinfoActions")
export class PlayercreateinfoActionController extends PlayercreateinfoActionControllerBase {
  constructor(
    protected readonly service: PlayercreateinfoActionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
