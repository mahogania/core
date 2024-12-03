import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SkinningLootTemplateService } from "./skinningLootTemplate.service";
import { SkinningLootTemplateControllerBase } from "./base/skinningLootTemplate.controller.base";

@swagger.ApiTags("skinningLootTemplates")
@common.Controller("skinningLootTemplates")
export class SkinningLootTemplateController extends SkinningLootTemplateControllerBase {
  constructor(
    protected readonly service: SkinningLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
