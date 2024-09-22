import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayercreateinfoService } from "./playercreateinfo.service";
import { PlayercreateinfoControllerBase } from "./base/playercreateinfo.controller.base";

@swagger.ApiTags("playercreateinfos")
@common.Controller("playercreateinfos")
export class PlayercreateinfoController extends PlayercreateinfoControllerBase {
  constructor(
    protected readonly service: PlayercreateinfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
