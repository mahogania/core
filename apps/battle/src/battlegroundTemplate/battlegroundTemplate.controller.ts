import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BattlegroundTemplateService } from "./battlegroundTemplate.service";
import { BattlegroundTemplateControllerBase } from "./base/battlegroundTemplate.controller.base";

@swagger.ApiTags("battlegroundTemplates")
@common.Controller("battlegroundTemplates")
export class BattlegroundTemplateController extends BattlegroundTemplateControllerBase {
  constructor(
    protected readonly service: BattlegroundTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
