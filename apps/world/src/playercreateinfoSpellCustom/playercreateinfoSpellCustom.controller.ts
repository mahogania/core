import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayercreateinfoSpellCustomService } from "./playercreateinfoSpellCustom.service";
import { PlayercreateinfoSpellCustomControllerBase } from "./base/playercreateinfoSpellCustom.controller.base";

@swagger.ApiTags("playercreateinfoSpellCustoms")
@common.Controller("playercreateinfoSpellCustoms")
export class PlayercreateinfoSpellCustomController extends PlayercreateinfoSpellCustomControllerBase {
  constructor(
    protected readonly service: PlayercreateinfoSpellCustomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
