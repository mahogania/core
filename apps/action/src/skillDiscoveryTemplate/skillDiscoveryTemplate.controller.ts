import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SkillDiscoveryTemplateService } from "./skillDiscoveryTemplate.service";
import { SkillDiscoveryTemplateControllerBase } from "./base/skillDiscoveryTemplate.controller.base";

@swagger.ApiTags("skillDiscoveryTemplates")
@common.Controller("skillDiscoveryTemplates")
export class SkillDiscoveryTemplateController extends SkillDiscoveryTemplateControllerBase {
  constructor(
    protected readonly service: SkillDiscoveryTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
