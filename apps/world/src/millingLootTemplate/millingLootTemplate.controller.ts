import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MillingLootTemplateService } from "./millingLootTemplate.service";
import { MillingLootTemplateControllerBase } from "./base/millingLootTemplate.controller.base";

@swagger.ApiTags("millingLootTemplates")
@common.Controller("millingLootTemplates")
export class MillingLootTemplateController extends MillingLootTemplateControllerBase {
  constructor(
    protected readonly service: MillingLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
