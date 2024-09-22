import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BattlefieldTemplateService } from "./battlefieldTemplate.service";
import { BattlefieldTemplateControllerBase } from "./base/battlefieldTemplate.controller.base";

@swagger.ApiTags("battlefieldTemplates")
@common.Controller("battlefieldTemplates")
export class BattlefieldTemplateController extends BattlefieldTemplateControllerBase {
  constructor(
    protected readonly service: BattlefieldTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
