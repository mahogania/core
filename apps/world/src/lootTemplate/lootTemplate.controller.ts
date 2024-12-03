import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LootTemplateService } from "./lootTemplate.service";
import { LootTemplateControllerBase } from "./base/lootTemplate.controller.base";

@swagger.ApiTags("lootTemplates")
@common.Controller("lootTemplates")
export class LootTemplateController extends LootTemplateControllerBase {
  constructor(
    protected readonly service: LootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
