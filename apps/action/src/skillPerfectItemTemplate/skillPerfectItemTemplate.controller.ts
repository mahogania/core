import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SkillPerfectItemTemplateService } from "./skillPerfectItemTemplate.service";
import { SkillPerfectItemTemplateControllerBase } from "./base/skillPerfectItemTemplate.controller.base";

@swagger.ApiTags("skillPerfectItemTemplates")
@common.Controller("skillPerfectItemTemplates")
export class SkillPerfectItemTemplateController extends SkillPerfectItemTemplateControllerBase {
  constructor(
    protected readonly service: SkillPerfectItemTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
