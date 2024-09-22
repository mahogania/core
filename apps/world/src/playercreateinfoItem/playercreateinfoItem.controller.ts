import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayercreateinfoItemService } from "./playercreateinfoItem.service";
import { PlayercreateinfoItemControllerBase } from "./base/playercreateinfoItem.controller.base";

@swagger.ApiTags("playercreateinfoItems")
@common.Controller("playercreateinfoItems")
export class PlayercreateinfoItemController extends PlayercreateinfoItemControllerBase {
  constructor(
    protected readonly service: PlayercreateinfoItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
