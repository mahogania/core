import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SkillTiersService } from "./skillTiers.service";
import { SkillTiersControllerBase } from "./base/skillTiers.controller.base";

@swagger.ApiTags("skillTiers")
@common.Controller("skillTiers")
export class SkillTiersController extends SkillTiersControllerBase {
  constructor(
    protected readonly service: SkillTiersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
