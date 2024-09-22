import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SkillExtraItemTemplateService } from "./skillExtraItemTemplate.service";
import { SkillExtraItemTemplateControllerBase } from "./base/skillExtraItemTemplate.controller.base";

@swagger.ApiTags("skillExtraItemTemplates")
@common.Controller("skillExtraItemTemplates")
export class SkillExtraItemTemplateController extends SkillExtraItemTemplateControllerBase {
  constructor(
    protected readonly service: SkillExtraItemTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
